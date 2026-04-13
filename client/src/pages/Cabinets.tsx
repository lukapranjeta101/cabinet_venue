import { Button } from "@/components/ui/button";
import { cabinetBrands, cabinetSectionLinks, customCabinetLink } from "@/lib/cabinetCatalog";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Cabinets() {
  const [selectedCabinetHref, setSelectedCabinetHref] = useState(cabinetBrands[0] ? `/cabinets/${cabinetBrands[0].slug}` : "/cabinets");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent mb-4">Cabinet Collections</p>
            <h1 className="text-5xl font-bold mb-6">Kitchen & Bathroom Cabinets</h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              Explore dedicated pages for each cabinet line and compare the styles, finishes, and collections that best fit your project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b border-border/70">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-[1.6fr_0.9fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-3">Find A Cabinet Line</h2>
              <p className="text-muted-foreground max-w-2xl">
                Use the dropdown to jump directly into a specific cabinet brand, or browse the full collection cards below.
              </p>
            </div>

            <div className="border border-border/70 bg-white p-4 shadow-sm">
              <label htmlFor="cabinet-brand-select" className="block text-sm font-semibold text-primary mb-2">
                Cabinet brand
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <select
                  id="cabinet-brand-select"
                  value={selectedCabinetHref}
                  onChange={(event) => setSelectedCabinetHref(event.target.value)}
                  className="flex-1 rounded-none border border-border bg-white px-4 py-3 text-base text-primary outline-none transition-colors focus:border-accent"
                >
                  {cabinetSectionLinks.map((brand) => (
                    <option key={brand.href} value={brand.href}>
                      {brand.label}
                    </option>
                  ))}
                </select>

                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground sm:self-stretch">
                  <Link href={selectedCabinetHref}>View Page</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Cabinet Brands</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              Every cabinet line below opens into its own page so customers can browse finishes and collections without leaving the overall cabinets section.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {cabinetBrands.map((brand) => (
              <article key={brand.slug} className="border border-border/70 bg-white overflow-hidden shadow-sm">
                <div className="h-80 md:h-72 bg-muted/40 flex items-center justify-center p-4 md:p-6">
                  {brand.previewImage ? (
                    <img
                      src={brand.previewImage}
                      alt={brand.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-center text-muted-foreground">
                      <p className="font-semibold">{brand.name}</p>
                      <p className="text-sm mt-2">Images coming soon</p>
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="inline-flex items-center rounded-full bg-accent/10 text-accent px-4 py-2 text-sm font-semibold">
                      {brand.imageCount} styles
                    </div>
                    <div className="inline-flex items-center rounded-full bg-primary/5 text-primary px-4 py-2 text-sm font-semibold">
                      {brand.collections.length} collections
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-primary">{brand.name}</h3>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{brand.description}</p>
                  <p className="text-muted-foreground/90 mt-4">{brand.overview}</p>

                  <Button asChild variant="outline" className="mt-8 border-primary text-primary hover:bg-primary hover:text-white">
                    <Link href={`/cabinets/${brand.slug}`} className="inline-flex items-center gap-2">
                      <span>Explore {brand.name}</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}

            <article className="border border-border/70 bg-white overflow-hidden shadow-sm">
              <div className="p-8">
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="inline-flex items-center rounded-full bg-accent/10 text-accent px-4 py-2 text-sm font-semibold">
                    Full custom path
                  </div>
                  <div className="inline-flex items-center rounded-full bg-primary/5 text-primary px-4 py-2 text-sm font-semibold">
                    Marsh Cabinets
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-primary">Full Custom Build</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  Ideal for projects that need more layout flexibility and finish options beyond stocked cabinet lines.
                </p>

                <Button asChild variant="outline" className="mt-6 border-primary text-primary hover:bg-primary hover:text-white">
                  <Link href={customCabinetLink.href} className="inline-flex items-center gap-2">
                    <span>Explore Custom Build</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Need Help Choosing A Cabinet Line?</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Tell us about your style, layout, and budget, and we can guide you to the cabinet collection that fits your project best.
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
    </div>
  );
}
