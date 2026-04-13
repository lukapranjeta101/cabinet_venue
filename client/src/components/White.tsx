import { Button } from "@/components/ui/button";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "wouter";

const RAW_FRAMES = import.meta.glob("/mycomponents1/ezgif-frame-*.jpg", {
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

const BG_COLOR = "#f6f4f1";
const HERO_TEXT_SHADOW = "0 2px 20px rgba(0,0,0,0.25)";

const heroBackdropClass =
  "pointer-events-none absolute left-1/2 top-1/2 h-[23rem] w-[min(94vw,58rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-black/50 via-black/30 to-transparent blur-[72px] opacity-95";

const heroShellClass = "relative isolate max-w-3xl px-4";
const heroHeadlineClass = "text-6xl font-black tracking-tight leading-[1.02] md:text-7xl lg:text-8xl text-white/96";
const heroSecondaryClass = "mt-5 text-lg font-normal leading-relaxed text-white md:text-xl";

function drawCoverFrame(
  ctx: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement,
  image: HTMLImageElement,
  background = BG_COLOR,
  clear = true
) {
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
  if (clear) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);
  }

  const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
  const drawWidth = image.naturalWidth * scale;
  const drawHeight = image.naturalHeight * scale;
  const x = (width - drawWidth) / 2;
  const y = (height - drawHeight) / 2;

  // Trim a tiny top edge from source frames to avoid a persistent top-line artifact.
  const sourceInsetY = Math.max(1, Math.round(image.naturalHeight * 0.004));
  ctx.drawImage(
    image,
    0,
    sourceInsetY,
    image.naturalWidth,
    image.naturalHeight - sourceInsetY,
    x,
    y,
    drawWidth,
    drawHeight
  );
}

export default function White() {
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

  const heroOpacity = useTransform(scrollYProgress, [0, 0.16, 0.24], [1, 1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.24], [0, -8]);
  const heroIntroColor = useTransform(scrollYProgress, [0, 0.16, 0.24], ["#111111", "#111111", "#ffffff"]);

  const leftOpacity = useTransform(scrollYProgress, [0.22, 0.3, 0.46, 0.54], [0, 1, 1, 0]);
  const leftY = useTransform(scrollYProgress, [0.22, 0.54], [12, -8]);

  const rightOpacity = useTransform(scrollYProgress, [0.52, 0.6, 0.76, 0.84], [0, 1, 1, 0]);
  const rightY = useTransform(scrollYProgress, [0.52, 0.84], [12, -8]);

  const ctaOpacity = useTransform(scrollYProgress, [0.84, 0.9, 1], [0, 1, 1]);
  const ctaY = useTransform(scrollYProgress, [0.84, 1], [12, -4]);

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

      drawCoverFrame(ctx, canvas, frame, BG_COLOR);
      lastDrawnFrameFloatRef.current = frameIndex;
    },
    []
  );

  useEffect(() => {
    let cancelled = false;

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
    if (!isReady || loadedFramesRef.current.length === 0) return;

    targetProgressRef.current = latest;
    if (rafRef.current !== null) return;

    const animate = () => {
      const current = currentProgressRef.current;
      const target = targetProgressRef.current;
      const delta = target - current;

      // Stronger damping for a slower, heavier-feeling frame response.
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
    <section ref={sectionRef} data-hero-scroll="true" className="relative h-[400dvh] bg-[#f6f4f1]">
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-[#f6f4f1]">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

        {!isReady && (
          <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#f6f4f1]/95">
            <div className="flex flex-col items-center gap-4">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#d4d0ca] border-t-[#111111]" />
              <p className="text-sm tracking-[0.02em] text-[#888888] [font-family:'Overused_Grotesk_Roman','Overused_Grotesk',Arial,sans-serif]">
                Preparing Experience
              </p>
            </div>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-white/12 via-transparent to-black/8" />

        <div className="pointer-events-none absolute inset-0 z-30 [font-family:'Overused_Grotesk_Roman','Overused_Grotesk',Arial,sans-serif]">
          <motion.div
            style={{ opacity: heroOpacity, y: heroY }}
            className="absolute inset-0 flex items-center justify-center px-6 text-center"
          >
            <div className={heroShellClass}>
              <div className={heroBackdropClass} />
              <motion.h2 className={heroHeadlineClass} style={{ color: heroIntroColor, textShadow: HERO_TEXT_SHADOW }}>
                Bring your dream cabinets to life.
              </motion.h2>
              <motion.p className={heroSecondaryClass} style={{ color: heroIntroColor, textShadow: HERO_TEXT_SHADOW }}>
                It starts with a vision.
              </motion.p>
              <motion.p className="mt-3 text-lg font-normal leading-relaxed md:text-xl" style={{ color: heroIntroColor, textShadow: HERO_TEXT_SHADOW }}>
                Custom designs tailored to your space, style, and needs.
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: leftOpacity, y: leftY }}
            className="absolute inset-0 flex items-center justify-center px-6 text-center"
          >
            <div className={heroShellClass}>
              <div className={heroBackdropClass} />
              <h3 className="text-6xl font-black tracking-tight leading-[1.02] md:text-7xl lg:text-8xl text-white" style={{ textShadow: HERO_TEXT_SHADOW }}>
                It starts with a vision.
              </h3>
              <p className={heroSecondaryClass} style={{ textShadow: HERO_TEXT_SHADOW }}>
                Custom designs tailored to your space, style, and needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: rightOpacity, y: rightY }}
            className="absolute inset-0 flex items-center justify-center px-6 text-center"
          >
            <div className={heroShellClass}>
              <div className={heroBackdropClass} />
              <h3 className="text-6xl font-black tracking-tight leading-[1.02] md:text-7xl lg:text-8xl text-white" style={{ textShadow: HERO_TEXT_SHADOW }}>
                Built with precision. Designed to last.
              </h3>
              <p className={heroSecondaryClass} style={{ textShadow: HERO_TEXT_SHADOW }}>
                High-quality materials. Expert craftsmanship. No shortcuts.
              </p>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: ctaOpacity, y: ctaY }}
            className="pointer-events-auto absolute inset-0 flex items-center justify-center px-6 text-center"
          >
            <div className={heroShellClass}>
              <div className={heroBackdropClass} />
              <h3 className="text-6xl font-black tracking-tight leading-[1.02] md:text-7xl lg:text-8xl text-white" style={{ textShadow: HERO_TEXT_SHADOW }}>
                Your new kitchen starts here.
              </h3>
              <div className="mt-6 flex justify-center">
                <Button asChild className="bg-[#111111] hover:bg-[#2f2f2f] text-white px-8 py-6 text-lg md:text-xl font-semibold">
                  <Link href="/quote">Get a free quote today.</Link>
                </Button>
              </div>
              <p className="mt-5 text-lg font-normal tracking-[0.01em] text-white" style={{ textShadow: HERO_TEXT_SHADOW }}>
                Scroll to continue
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
