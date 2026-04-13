import { Button } from "@/components/ui/button";
import { motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type ReactNode, useMemo, useRef, useState } from "react";
import { Link } from "wouter";
import White from "@/components/White";
import CountertopScroll from "@/components/CountertopScroll";

interface CharacterRevealTextProps {
  text: string;
  progress: MotionValue<number>;
}

function renderHighlightedText(input: string) {
  const specialWords = ["specializing", "quality cabinets."];
  const nodes: ReactNode[] = [];
  let cursor = 0;

  while (cursor < input.length) {
    let matchedWord: string | null = null;
    for (const word of specialWords) {
      if (input.slice(cursor, cursor + word.length) === word) {
        matchedWord = word;
        break;
      }
    }

    if (matchedWord) {
      nodes.push(
        <span key={`special-${cursor}`} className="font-semibold text-black/70">
          {matchedWord}
        </span>
      );
      cursor += matchedWord.length;
      continue;
    }

    let nextSpecialIndex = input.length;
    for (const word of specialWords) {
      const idx = input.indexOf(word, cursor);
      if (idx !== -1 && idx < nextSpecialIndex) {
        nextSpecialIndex = idx;
      }
    }

    nodes.push(input.slice(cursor, nextSpecialIndex));
    cursor = nextSpecialIndex;
  }

  return nodes;
}

function CharacterRevealText({ text, progress }: CharacterRevealTextProps) {
  const [displayedText, setDisplayedText] = useState("");

  useMotionValueEvent(progress, "change", (latest) => {
    const count = Math.max(0, Math.min(text.length, Math.floor(latest)));
    setDisplayedText(text.slice(0, count));
  });

  return (
    <h2 className="max-w-4xl text-4xl font-normal leading-[1.18] tracking-[-0.04em] text-[#111111] md:text-5xl lg:text-6xl">
      {renderHighlightedText(displayedText)}
    </h2>
  );
}

const SECTION2_IMAGES = Object.entries(
  import.meta.glob("/section2/*.{jpg,jpeg,png,webp,avif}", {
    eager: true,
    import: "default",
  }) as Record<string, string>
)
  .sort(([a], [b]) => {
    const aName = a.split("/").pop()?.split(".")[0] ?? "0";
    const bName = b.split("/").pop()?.split(".")[0] ?? "0";
    return Number(aName) - Number(bName);
  })
  .map(([, url]) => url);

/**
 * Cabinet Venue Home Page
 * Design: Modern Minimalism with Warm Sophistication
 */

export default function Home() {
  const [section2Index, setSection2Index] = useState(0);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const totalSection2Images = SECTION2_IMAGES.length;
  const activeSection2Image =
    SECTION2_IMAGES[section2Index] ??
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/hero-kitchen-4vRGYuxGNodsSd5UHWj3JY.webp";

  const goToPreviousSection2Image = () => {
    if (totalSection2Images === 0) return;
    setSection2Index((current) => (current - 1 + totalSection2Images) % totalSection2Images);
  };

  const goToNextSection2Image = () => {
    if (totalSection2Images === 0) return;
    setSection2Index((current) => (current + 1) % totalSection2Images);
  };

  const aboutText = useMemo(
    () =>
      "Local, family-owned and operated company specializing in design, manufacture and installation of a broad range of quality cabinets.",
    []
  );
  const charCount = aboutText.length;

  const { scrollYProgress: aboutReadProgress } = useScroll({
    target: aboutSectionRef,
    offset: ["start 120%", "end 30%"],
  });

  const displayCharCount = useTransform(aboutReadProgress, [0, 0.55, 1], [0, charCount, charCount]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <White />

      {/* About Us */}
      <section ref={aboutSectionRef} className="bg-white py-20 md:py-24">
        <div className="container">
          <div className="max-w-5xl h-[280px] md:h-[360px] lg:h-[400px]">
            <div className="mb-6 flex items-center gap-3 text-sm tracking-[0.18em] text-primary/80 uppercase">
              <span className="h-px w-6 bg-primary/40" />
              <span>About Us</span>
            </div>
            <CharacterRevealText text={aboutText} progress={displayCharCount} />
          </div>
        </div>
      </section>

      {/* Design Story Section */}
      <section className="bg-background py-0">
        <div className="w-full overflow-hidden border-t border-border/60 bg-white shadow-sm">
          <div className="grid grid-cols-2 gap-0 md:h-[86svh] md:grid-cols-12 md:grid-rows-[2fr_1fr]">
            <div className="relative col-span-2 h-[320px] overflow-hidden md:col-span-6 md:row-span-2 md:h-auto md:min-h-full">
              <img src={activeSection2Image} alt={`Kitchen design spotlight ${section2Index + 1}`} className="absolute inset-0 h-full w-full object-cover" />

              <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center justify-center gap-5 rounded-full border border-white/35 bg-black/35 px-5 py-2.5 text-white backdrop-blur-sm md:bottom-9">
                <button
                  type="button"
                  onClick={goToPreviousSection2Image}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/20 hover:bg-black/40 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <p className="min-w-20 text-center text-sm tracking-[0.2em]">
                  {String(section2Index + 1).padStart(2, "0")} / {String(Math.max(totalSection2Images, 1)).padStart(2, "0")}
                </p>

                <button
                  type="button"
                  onClick={goToNextSection2Image}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-black/20 hover:bg-black/40 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

              <div className="col-span-2 md:col-span-6 bg-white px-8 py-10 md:px-12 md:py-14 lg:px-14">
                <h3 className="text-4xl font-bold tracking-tight text-primary md:text-5xl">Modern Kitchen Dreams</h3>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  A clean, modern layout built around smart storage, durable materials, and timeless cabinetry details. Our team designs each kitchen to feel elevated, functional, and tailored to everyday living.
                </p>
              </div>

              <div className="md:col-span-3 flex h-full flex-col justify-between bg-accent/35 px-8 py-8 md:px-9 md:py-9">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">Meeting</p>
                  <h4 className="mt-3 text-3xl font-bold leading-[1.12] tracking-tight text-primary">Schedule a design consultation</h4>
                </div>
                <Button asChild className="mt-6 bg-primary text-white hover:bg-primary/90">
                  <Link href="/quote">Book Now</Link>
                </Button>
              </div>

              <div className="relative md:col-span-3 overflow-hidden border-l border-border/60">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/kitchen-remodel-before-after-LtV3yEXvvwAnLDRP7TfedS.webp"
                  alt="Kitchen gallery preview"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="relative z-10 flex h-full flex-col justify-between bg-white/86 px-8 py-8 backdrop-blur-[1px]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70">Next Step</p>
                    <h4 className="mt-3 text-3xl font-bold leading-[1.12] tracking-tight text-primary">Start your kitchen quote</h4>
                  </div>
                  <Button asChild variant="outline" className="mt-6 border-primary text-primary hover:bg-primary/10">
                    <Link href="/quote">Get Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* Countertop Scroll Section */}
      <CountertopScroll title="Premium Countertops" subtitle="Explore our curated selection of high-end countertop materials and finishes." />

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Start Designing Your Dream Kitchen</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              <a href="tel:(440) 561-0354">Call (440) 561-0354</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
