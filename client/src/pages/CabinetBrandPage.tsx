import { Button } from "@/components/ui/button";
import { cabinetBrandsBySlug, cabinetSectionLinks } from "@/lib/cabinetCatalog";
import { ChevronLeft, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import NotFound from "./NotFound";

type CabinetBrandPageProps = {
  brandSlug: string;
};

export default function CabinetBrandPage({ brandSlug }: CabinetBrandPageProps) {
  const brand = cabinetBrandsBySlug[brandSlug];
  const [, setLocation] = useLocation();
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    brand: string;
    collection: string;
  } | null>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!brand) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/70 mb-6">
            <Link href="/cabinets" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <ChevronLeft className="w-4 h-4" />
              <span>All Cabinet Lines</span>
            </Link>
            <span>/</span>
            <span className="text-white">{brand.name}</span>
          </div>

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent mb-4">Cabinet Collection</p>
            <h1 className="text-5xl font-bold mb-6">{brand.name}</h1>
            <p className="text-xl text-gray-100 max-w-2xl">{brand.description}</p>
            <p className="text-base text-white/80 max-w-3xl mt-5 leading-relaxed">{brand.overview}</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-border/70">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-[1.6fr_0.9fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-3">Browse Cabinet Lines</h2>
              <p className="text-muted-foreground max-w-2xl">
                Switch between cabinet brands without leaving the cabinets section. Every line has its own dedicated page.
              </p>
            </div>

            <div className="border border-border/70 bg-white p-4 shadow-sm">
              <label htmlFor="cabinet-brand-switcher" className="block text-sm font-semibold text-primary mb-2">
                Jump to another cabinet line
              </label>
              <select
                id="cabinet-brand-switcher"
                value={brand.slug}
                onChange={(event) => setLocation(`/cabinets/${event.target.value}`)}
                className="w-full rounded-none border border-border bg-white px-4 py-3 text-base text-primary outline-none transition-colors focus:border-accent"
              >
                {cabinetSectionLinks.map((link) => (
                  <option key={link.href} value={link.href.replace("/cabinets/", "")}>
                    {link.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-4xl font-bold text-primary">Available Styles</h2>
              <div className="w-16 h-1 bg-accent mt-4"></div>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center rounded-full bg-accent/10 text-accent px-4 py-2 text-sm font-semibold">
                {brand.imageCount} finish options
              </div>
              <div className="inline-flex items-center rounded-full bg-primary/5 text-primary px-4 py-2 text-sm font-semibold">
                {brand.collections.length} collections
              </div>
            </div>
          </div>

          <div className="space-y-16">
            {brand.collections.map((collection) => (
              <article key={collection.name} className="border border-border/70 bg-white p-6 md:p-8 shadow-sm">
                <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-primary">{collection.name}</h3>
                    <p className="text-muted-foreground mt-2">
                      Click any finish to view it larger.
                    </p>
                  </div>
                  <div className="inline-flex items-center rounded-full bg-primary/5 text-primary px-4 py-2 text-sm font-semibold">
                    {collection.images.length} styles
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {collection.images.map((image) => (
                    <button
                      key={image.path}
                      type="button"
                      className="group bg-white text-left"
                      onClick={() =>
                        setSelectedImage({
                          src: image.src,
                          title: image.title,
                          brand: brand.name,
                          collection: collection.name,
                        })
                      }
                    >
                      <figure className="h-full border border-transparent p-2 transition-colors group-hover:border-border/80">
                        <div className="aspect-[3/4] md:aspect-[4/3] w-full flex items-center justify-center bg-muted/30 p-2 md:p-3">
                          <img
                            src={image.src}
                            alt={`${brand.name} ${collection.name} ${image.title}`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="mt-3 text-center">
                          <p className="text-sm font-semibold text-primary/90 leading-tight">{image.title}</p>
                          <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{collection.name}</p>
                        </figcaption>
                      </figure>
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Ready To Build Around {brand.name}?</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Visit our showroom or request a quote and we can help you match the right cabinet line to your layout, finish, and budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold">
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
            >
              <Link href="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 p-4 md:p-8 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.brand} ${selectedImage.collection} ${selectedImage.title}`}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            aria-label="Close fullscreen image"
            className="absolute top-4 right-4 md:top-6 md:right-6 inline-flex items-center justify-center w-10 h-10 border border-white/30 bg-black/40 text-white hover:bg-black/60"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5" />
          </button>

          <figure
            className="max-w-[95vw] max-h-[92vh] flex flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={`${selectedImage.brand} ${selectedImage.collection} ${selectedImage.title}`}
              className="max-w-full max-h-[82vh] object-contain"
            />
            <figcaption className="mt-4 text-center text-white">
              <p className="text-sm uppercase tracking-wide text-white/70">{selectedImage.brand}</p>
              <p className="text-sm text-white/70 mt-1">{selectedImage.collection}</p>
              <p className="text-lg font-semibold mt-2">{selectedImage.title}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
