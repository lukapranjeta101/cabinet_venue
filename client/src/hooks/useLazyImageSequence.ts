import { useCallback, useEffect, useRef, useState, type MutableRefObject, type RefObject } from "react";

type UseLazyImageSequenceOptions = {
  frameUrls: string[];
  triggerRef: RefObject<Element | null>;
  rootMargin?: string;
  threshold?: number;
  preloadConcurrency?: number;
};

type UseLazyImageSequenceResult = {
  framesRef: MutableRefObject<(HTMLImageElement | null)[]>;
  isFirstFrameReady: boolean;
  totalFrames: number;
  getNearestLoadedFrame: (index: number) => HTMLImageElement | null;
};

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function yieldToMainThread(): Promise<void> {
  if (typeof window !== "undefined" && "requestIdleCallback" in window) {
    return new Promise((resolve) => {
      (window as Window & { requestIdleCallback: (cb: () => void, options?: { timeout: number }) => number }).requestIdleCallback(
        () => resolve(),
        { timeout: 120 }
      );
    });
  }

  return new Promise((resolve) => {
    window.setTimeout(resolve, 0);
  });
}

export function useLazyImageSequence({
  frameUrls,
  triggerRef,
  rootMargin = "200px 0px",
  threshold = 0.1,
  preloadConcurrency = 3,
}: UseLazyImageSequenceOptions): UseLazyImageSequenceResult {
  const framesRef = useRef<(HTMLImageElement | null)[]>(Array.from({ length: frameUrls.length }, () => null));
  const frameUrlsRef = useRef(frameUrls);
  const preloadStartedRef = useRef(false);
  const cancelledRef = useRef(false);
  const [isFirstFrameReady, setIsFirstFrameReady] = useState(false);

  useEffect(() => {
    frameUrlsRef.current = frameUrls;
    framesRef.current = Array.from({ length: frameUrls.length }, () => null);
    preloadStartedRef.current = false;
    cancelledRef.current = false;
    setIsFirstFrameReady(false);

    const firstFrameUrl = frameUrls[0];
    if (!firstFrameUrl) {
      return () => {
        cancelledRef.current = true;
      };
    }

    let localCancelled = false;

    void loadImage(firstFrameUrl).then((img) => {
      if (localCancelled || cancelledRef.current) return;
      if (img) {
        framesRef.current[0] = img;
        setIsFirstFrameReady(true);
      }
    });

    return () => {
      localCancelled = true;
      cancelledRef.current = true;
    };
  }, [frameUrls]);

  const startPreloadingRemaining = useCallback(() => {
    if (preloadStartedRef.current || frameUrlsRef.current.length <= 1) return;
    preloadStartedRef.current = true;

    const total = frameUrlsRef.current.length;
    const indexes = Array.from({ length: total - 1 }, (_, i) => i + 1);
    let cursor = 0;
    const workerCount = Math.max(1, Math.min(preloadConcurrency, indexes.length));

    const worker = async () => {
      while (!cancelledRef.current) {
        const idx = cursor;
        cursor += 1;
        if (idx >= indexes.length) return;

        const frameIndex = indexes[idx];
        if (framesRef.current[frameIndex]) {
          continue;
        }

        const img = await loadImage(frameUrlsRef.current[frameIndex]);
        if (cancelledRef.current) return;
        if (img) {
          framesRef.current[frameIndex] = img;
        }

        await yieldToMainThread();
      }
    };

    for (let i = 0; i < workerCount; i += 1) {
      void worker();
    }
  }, [preloadConcurrency]);

  useEffect(() => {
    const target = triggerRef.current;
    if (!target || frameUrls.length <= 1) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          startPreloadingRemaining();
          observer.disconnect();
          break;
        }
      },
      { root: null, rootMargin, threshold }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [frameUrls.length, rootMargin, startPreloadingRemaining, threshold, triggerRef]);

  const getNearestLoadedFrame = useCallback((index: number) => {
    const frames = framesRef.current;
    if (frames.length === 0) return null;

    const clampedIndex = Math.min(frames.length - 1, Math.max(0, index));
    const direct = frames[clampedIndex];
    if (direct) return direct;

    for (let i = clampedIndex - 1; i >= 0; i -= 1) {
      const candidate = frames[i];
      if (candidate) return candidate;
    }

    for (let i = clampedIndex + 1; i < frames.length; i += 1) {
      const candidate = frames[i];
      if (candidate) return candidate;
    }

    return null;
  }, []);

  return {
    framesRef,
    isFirstFrameReady,
    totalFrames: frameUrls.length,
    getNearestLoadedFrame,
  };
}
