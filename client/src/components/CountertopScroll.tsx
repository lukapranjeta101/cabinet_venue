import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLazyImageSequence } from "@/hooks/useLazyImageSequence";

const RAW_FRAMES = import.meta.glob("/mycomponents3/ezgif-frame-*.jpg", {
	eager: true,
	import: "default",
}) as Record<string, string>;

const FRAME_URLS = Object.entries(RAW_FRAMES)
	.sort(([a], [b]) => {
		const aMatch = a.match(/ezgif-frame-(\d+)\.jpg$/)?.[1] ?? "0";
		const bMatch = b.match(/ezgif-frame-(\d+)\.jpg$/)?.[1] ?? "0";
		return Number(aMatch) - Number(bMatch);
	})
	.map(([, url]) => url);

interface CountertopScrollProps {
	title?: string;
	subtitle?: string;
}

export default function CountertopScroll({
	title = "Premium Countertops",
	subtitle = "Explore our curated selection",
}: CountertopScrollProps) {
	const sectionRevealViewport = { once: true, amount: 0.68 };
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const targetProgressRef = useRef(0);
	const currentProgressRef = useRef(0);
	const lastDrawnFrameFloatRef = useRef(-1);
	const rafRef = useRef<number | null>(null);
	const [isReady, setIsReady] = useState(false);
	const [isDesktop, setIsDesktop] = useState(() =>
		typeof window !== "undefined" ? window.matchMedia("(min-width: 768px)").matches : false
	);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end end"],
	});

	const { isFirstFrameReady, totalFrames, getNearestLoadedFrame } = useLazyImageSequence({
		frameUrls: FRAME_URLS,
		triggerRef: sectionRef,
		rootMargin: "300px 0px",
		threshold: 0.12,
		preloadConcurrency: 3,
	});

	const drawFrame = useMemo(
		() => (progress: number) => {
			const canvas = canvasRef.current;
			if (!canvas) return;
			const ctx = canvas.getContext("2d");
			if (!ctx || totalFrames === 0) return;

			const clamped = Math.min(1, Math.max(0, progress));
			const frameIndex = Math.round(clamped * (totalFrames - 1));
			if (frameIndex === lastDrawnFrameFloatRef.current) return;

			const frame = getNearestLoadedFrame(frameIndex);
			if (!frame) return;

			const width = canvas.clientWidth;
			const height = canvas.clientHeight;
			const dpr = Math.max(1, window.devicePixelRatio || 1);

			const targetWidth = Math.floor(width * dpr);
			const targetHeight = Math.floor(height * dpr);
			if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
				canvas.width = targetWidth;
				canvas.height = targetHeight;
			}

			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.imageSmoothingEnabled = true;
			ctx.imageSmoothingQuality = "high";

			ctx.fillStyle = "#ffffff";
			ctx.fillRect(0, 0, width, height);

			const scale = Math.min(width / frame.naturalWidth, height / frame.naturalHeight);
			const drawWidth = frame.naturalWidth * scale;
			const drawHeight = frame.naturalHeight * scale;
			const x = (width - drawWidth) / 2;
			const y = (height - drawHeight) / 2;
			// Crop both source edges to eliminate frame-sequence seam artifacts.
			const sourceInsetLeft = Math.max(6, Math.round(frame.naturalWidth * 0.01));
			const sourceInsetRight = Math.max(6, Math.round(frame.naturalWidth * 0.01));
			const sourceWidth = Math.max(1, frame.naturalWidth - sourceInsetLeft - sourceInsetRight);
			ctx.drawImage(
				frame,
				sourceInsetLeft,
				0,
				sourceWidth,
				frame.naturalHeight,
				x,
				y,
				drawWidth,
				drawHeight
			);

			const bottomGradient = ctx.createLinearGradient(0, 0, 0, height);
			bottomGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
			bottomGradient.addColorStop(0.6, "rgba(255, 255, 255, 0)");
			bottomGradient.addColorStop(1, "rgba(255, 255, 255, 0.8)");
			ctx.fillStyle = bottomGradient;
			ctx.fillRect(0, 0, width, height);

			const centerX = width / 2;
			const centerY = height / 2;
			const maxDist = Math.sqrt(centerX * centerX + centerY * centerY);
			const edgeGradient = ctx.createRadialGradient(centerX, centerY, maxDist * 0.5, centerX, centerY, maxDist * 1.1);
			edgeGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
			edgeGradient.addColorStop(1, "rgba(255, 255, 255, 0.6)");
			ctx.fillStyle = edgeGradient;
			ctx.fillRect(0, 0, width, height);

			lastDrawnFrameFloatRef.current = frameIndex;
		},
		[getNearestLoadedFrame, totalFrames]
	);

	useEffect(() => {
		const initialProgress = scrollYProgress.get();
		targetProgressRef.current = initialProgress;
		currentProgressRef.current = initialProgress;
	}, [drawFrame]);

	useEffect(() => {
		if (!isFirstFrameReady) return;
		setIsReady(true);
		drawFrame(currentProgressRef.current);
	}, [drawFrame, isFirstFrameReady]);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		targetProgressRef.current = latest;
		if (!isReady || totalFrames === 0) return;
		if (rafRef.current !== null) return;

		const animate = () => {
			const current = currentProgressRef.current;
			const target = targetProgressRef.current;
			const delta = target - current;

			const next = current + delta * 0.045;
			currentProgressRef.current = Math.abs(delta) < 0.0004 ? target : next;
			drawFrame(currentProgressRef.current);

			if (Math.abs(targetProgressRef.current - currentProgressRef.current) > 0.0004) {
				rafRef.current = window.requestAnimationFrame(animate);
			} else {
				rafRef.current = null;
			}
		};

		rafRef.current = window.requestAnimationFrame(animate);
	});

	useEffect(() => {
		const mediaQuery = window.matchMedia("(min-width: 768px)");
		const updateIsDesktop = (event?: MediaQueryListEvent) => {
			setIsDesktop(event ? event.matches : mediaQuery.matches);
		};

		updateIsDesktop();
		mediaQuery.addEventListener("change", updateIsDesktop);

		return () => mediaQuery.removeEventListener("change", updateIsDesktop);
	}, []);

	useEffect(() => {
		const handleResize = () => {
			if (!isReady || totalFrames === 0) return;
			lastDrawnFrameFloatRef.current = -1;
			drawFrame(currentProgressRef.current);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [drawFrame, isDesktop, isReady, totalFrames]);

	useEffect(() => {
		return () => {
			if (rafRef.current !== null) {
				window.cancelAnimationFrame(rafRef.current);
			}
		};
	}, []);

	return (
		<section ref={sectionRef} className="relative h-[600vh] bg-white">
			<div className="sticky top-0 h-screen w-screen overflow-hidden bg-white">
				{isDesktop ? (
					<div className="relative flex h-full w-full items-center">
						<motion.div
							className="relative z-10 flex w-[50%] flex-col items-start justify-center px-16 text-left lg:px-20"
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							viewport={sectionRevealViewport}
						>
							<div className="max-w-md">
								<div className="mb-4 flex items-center gap-3 text-sm tracking-[0.18em] text-primary/80 uppercase">
									<span>Countertops</span>
								</div>
								<h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#111111] md:text-6xl">{title}</h2>
								<p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">{subtitle}</p>
								<Button asChild className="mt-6 bg-primary text-white hover:bg-primary/90">
									<Link href="/countertops">Explore More</Link>
								</Button>
							</div>
						</motion.div>

							<div className="absolute inset-y-0 right-0 w-[50%]">
								{!isReady && (
									<div className="absolute inset-0 z-20 flex items-center justify-center bg-white/80">
										<div className="flex flex-col items-center gap-4">
											<div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
											<p className="text-sm text-slate-600">Loading...</p>
									</div>
								</div>
							)}
							<canvas
								ref={canvasRef}
								className={`h-full w-full transition-opacity duration-300 ${isReady ? "opacity-100" : "opacity-0"}`}
								style={{
									display: "block",
								}}
							/>
						</div>
					</div>
				) : (
					<div className="absolute inset-0 flex items-center justify-center px-6">
						<motion.div
							className="flex w-full max-w-md flex-col items-center justify-center gap-5 text-center"
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
							viewport={sectionRevealViewport}
						>
							<div className="max-w-sm">
								<div className="mb-4 flex items-center justify-center gap-3 text-sm tracking-[0.18em] text-primary/80 uppercase">
									<span>Countertops</span>
								</div>
								<h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#111111]">{title}</h2>
							</div>

								<div className="relative h-[34vh] max-h-[320px] w-full">
									{!isReady && (
										<div className="absolute inset-0 z-20 flex items-center justify-center bg-white/80">
										<div className="flex flex-col items-center gap-4">
											<div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-300 border-t-slate-700" />
											<p className="text-sm text-slate-600">Loading...</p>
										</div>
									</div>
								)}
								<canvas
									ref={canvasRef}
									className={`h-full w-full transition-opacity duration-300 ${isReady ? "opacity-100" : "opacity-0"}`}
									style={{
										display: "block",
									}}
								/>
							</div>

							<div className="max-w-sm">
								<p className="text-base leading-relaxed text-muted-foreground">{subtitle}</p>
								<Button asChild className="mt-4 bg-primary text-white hover:bg-primary/90">
									<Link href="/countertops">Explore More</Link>
								</Button>
							</div>
						</motion.div>
					</div>
				)}
			</div>
		</section>
	);
}
