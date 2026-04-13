import { useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

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
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const loadedFramesRef = useRef<HTMLImageElement[]>([]);
	const targetProgressRef = useRef(0);
	const currentProgressRef = useRef(0);
	const lastDrawnFrameFloatRef = useRef(-1);
	const rafRef = useRef<number | null>(null);
	const [isReady, setIsReady] = useState(false);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start start", "end end"],
	});

	const drawFrame = useMemo(
		() => (progress: number) => {
			const canvas = canvasRef.current;
			if (!canvas) return;
			const ctx = canvas.getContext("2d");
			const frames = loadedFramesRef.current;
			if (!ctx || frames.length === 0) return;

			const clamped = Math.min(1, Math.max(0, progress));
			const frameIndex = Math.round(clamped * (frames.length - 1));
			if (frameIndex === lastDrawnFrameFloatRef.current) return;

			const frame = frames[frameIndex];
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
			const x = (width - drawWidth) / 2 - 8;
			const y = (height - drawHeight) / 2;

			ctx.drawImage(frame, x, y, drawWidth, drawHeight);

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
		[]
	);

	useEffect(() => {
		let cancelled = false;
		const initialProgress = scrollYProgress.get();
		targetProgressRef.current = initialProgress;
		currentProgressRef.current = initialProgress;

		const preload = async () => {
			const images = await Promise.all(
				FRAME_URLS.map(
					(src) =>
						new Promise<HTMLImageElement | null>((resolve) => {
							const img = new Image();
							img.decoding = "async";
							img.onload = () => resolve(img);
							img.onerror = () => resolve(null);
							img.src = src;
						})
				)
			);

			if (cancelled) return;

			const loaded = images.filter((img): img is HTMLImageElement => Boolean(img));
			loadedFramesRef.current = loaded;
			setIsReady(loaded.length > 0);

			if (loaded.length > 0) {
				drawFrame(0);
			}
		};

		preload();

		return () => {
			cancelled = true;
		};
	}, [drawFrame]);

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		targetProgressRef.current = latest;
		if (!isReady || loadedFramesRef.current.length === 0) return;
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
		const handleResize = () => {
			if (!isReady || loadedFramesRef.current.length === 0) return;
			lastDrawnFrameFloatRef.current = -1;
			drawFrame(currentProgressRef.current);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [drawFrame, isReady]);

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
				<div className="relative flex h-full w-full flex-col items-start justify-start md:flex-row md:items-center">
					<div className="relative z-10 flex w-full flex-col items-center justify-start px-6 pt-10 text-center md:w-[50%] md:items-start md:justify-center md:px-16 md:pt-0 md:text-left lg:px-20">
						<div className="max-w-md">
							<div className="mb-4 flex items-center justify-center gap-3 text-sm tracking-[0.18em] text-primary/80 uppercase md:justify-start">
								<span className="h-px w-6 bg-primary/40" />
								<span>Countertops</span>
							</div>
							<h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#111111] md:text-6xl">{title}</h2>
							<p className="mt-6 hidden text-base leading-relaxed text-muted-foreground md:block md:text-lg">{subtitle}</p>
							<Button asChild className="mt-6 hidden bg-primary text-white hover:bg-primary/90 md:inline-flex">
								<Link href="/countertops">Explore More</Link>
							</Button>
						</div>
					</div>

					<div className="relative mt-4 h-[42vh] w-full md:absolute md:inset-y-0 md:right-0 md:mt-0 md:h-auto md:w-[50%]">
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

					<p className="mt-4 px-6 text-center text-base leading-relaxed text-muted-foreground md:hidden">{subtitle}</p>
					<Button asChild className="mt-4 self-center bg-primary text-white hover:bg-primary/90 md:hidden">
						<Link href="/countertops">Explore More</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
