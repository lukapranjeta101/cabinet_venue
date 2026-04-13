import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronLeft, Compass, PencilRuler, SwatchBook } from "lucide-react";
import { Link } from "wouter";

const marshCabinetsUrl = "https://www.marshcabinets.com/";

const buildHighlights = [
  {
    icon: PencilRuler,
    title: "Design Around Your Space",
    description:
      "Use a custom-oriented cabinet line when you need layout flexibility, more finish control, or a look that goes beyond stocked selections.",
  },
  {
    icon: SwatchBook,
    title: "Browse Styles And Finishes",
    description:
      "Marsh offers style galleries and a selector tool so clients can compare door styles, wood species, and finish directions before narrowing the build.",
  },
  {
    icon: Compass,
    title: "Move Toward A Dealer Buildout",
    description:
      "Once the direction is set, the next step is connecting with a Marsh dealer to review samples, planning details, and project-specific options.",
  },
];

export default function CustomBuild() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="bg-primary text-white py-20">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3 text-sm text-white/70 mb-8">
            <Link href="/cabinets" className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <ChevronLeft className="w-4 h-4" />
              <span>All Cabinet Lines</span>
            </Link>
            <span>/</span>
            <span className="text-white">Custom Build</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70 mb-4">Custom Cabinet Program</p>
              <h1 className="text-5xl font-bold mb-6 leading-tight md:text-6xl">Full Custom Build Options</h1>
              <p className="text-xl text-gray-100 max-w-2xl leading-relaxed">
                For projects that need more than a stocked cabinet line, this path opens up a broader design process centered on finish, style, and layout flexibility.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold">
                  <a href={marshCabinetsUrl} target="_blank" rel="noreferrer">
                    Explore Marsh Cabinets
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
                >
                  <Link href="/quote">Request A Quote</Link>
                </Button>
              </div>
            </div>

            <div className="border border-white/20 bg-white/10 p-6 md:p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-white/60 mb-4">Why This Path Works</p>
              <div className="space-y-4 text-white/85">
                <p>
                  Marsh is a family-owned American cabinetry manufacturer with a long production history and public tools for exploring styles and finishes.
                </p>
                <p>
                  This option is best when the client wants a more tailored cabinet direction instead of choosing only from the stocked lines already listed on the site.
                </p>
              </div>
              <a
                href={marshCabinetsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-semibold"
              >
                <span>Open Marsh Cabinets</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">How To Use The Custom Build Option</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
            <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
              This page acts as a bridge into a fuller custom cabinet workflow. Start with the Marsh catalog, then return to Cabinet Venue to move the project forward.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {buildHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="border border-border/70 bg-white p-8 shadow-sm">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 text-accent mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="border border-border/70 bg-white p-8 md:p-10 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary/70 mb-4">Marsh Tools</p>
              <h2 className="text-4xl font-bold text-primary mb-6">A Better Starting Point For Fully Customized Direction</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Marsh highlights style galleries, a style selector, and dealer support as the main path for homeowners and designers. That makes it a strong fit for projects where you want to shape the cabinet program around the design instead of fitting the design into a limited catalog.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={marshCabinetsUrl}
                target="_blank"
                rel="noreferrer"
                className="group border border-border/70 bg-white p-6 shadow-sm transition-colors hover:border-accent"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Tool 01</p>
                <h3 className="text-2xl font-bold text-primary">Style Galleries</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Review cabinetry inspiration and overall style direction before narrowing finish and construction choices.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-accent font-semibold">
                  <span>Open Site</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              <a
                href={marshCabinetsUrl}
                target="_blank"
                rel="noreferrer"
                className="group border border-border/70 bg-primary text-white p-6 shadow-sm transition-opacity hover:opacity-95"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-3">Tool 02</p>
                <h3 className="text-2xl font-bold">Style Selector</h3>
                <p className="mt-3 text-white/80 leading-relaxed">
                  Move deeper into species, finish, and style combinations to build a more customized cabinet direction.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-accent font-semibold">
                  <span>Open Site</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              <a
                href={marshCabinetsUrl}
                target="_blank"
                rel="noreferrer"
                className="group border border-border/70 bg-white p-6 shadow-sm transition-colors hover:border-accent"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Tool 03</p>
                <h3 className="text-2xl font-bold text-primary">Find A Dealer</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Use Marsh’s dealer network when the project is ready to move from inspiration into real sample and specification review.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-accent font-semibold">
                  <span>Open Site</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>

              <div className="border border-border/70 bg-white p-6 shadow-sm">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-3">Next Step</p>
                <h3 className="text-2xl font-bold text-primary">Bring It Back To Cabinet Venue</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Once you find a Marsh direction you like, use our quote flow so we can help translate that into the project scope and next conversation.
                </p>
                <Button asChild className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/quote">Start Your Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
