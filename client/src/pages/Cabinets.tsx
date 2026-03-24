import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

export default function Cabinets() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">Kitchen & Bathroom Cabinets</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Premium cabinetry in a variety of styles, finishes, and configurations to match your home.
          </p>
        </div>
      </section>

      {/* Cabinet Styles */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Cabinet Styles</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {[
              {
                title: "Modern Minimalist",
                desc: "Clean lines, sleek finishes, and contemporary hardware. Perfect for modern homes.",
                features: ["Flat-panel doors", "Minimalist hardware", "Neutral finishes", "Open shelving options"],
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/hero-kitchen-4vRGYuxGNodsSd5UHWj3JY.webp",
              },
              {
                title: "Traditional Classic",
                desc: "Timeless designs with detailed craftsmanship. Elegant and enduring style.",
                features: ["Raised-panel doors", "Decorative hardware", "Rich finishes", "Detailed molding"],
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/cabinet-details-akAKJa6SVP7wwBrGjjutvB.webp",
              },
              {
                title: "Transitional",
                desc: "Blends modern and traditional elements for a balanced, versatile look.",
                features: ["Shaker-style doors", "Mixed finishes", "Versatile hardware", "Balanced proportions"],
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/kitchen-remodel-before-after-LtV3yEXvvwAnLDRP7TfedS.webp",
              },
              {
                title: "Rustic Farmhouse",
                desc: "Warm, inviting designs with natural materials and vintage charm.",
                features: ["Wood grain finishes", "Rustic hardware", "Warm tones", "Distressed options"],
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/showroom-interior-Zgfqnfz9J2ZpdxNj8vtPDA.webp",
              },
            ].map((style, idx) => (
              <Card key={idx} className="p-8 border-0 shadow-md overflow-hidden">
                <div className="h-48 mb-6 overflow-hidden rounded-lg">
                  <img src={style.img} alt={style.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{style.title}</h3>
                <p className="text-muted-foreground mb-4">{style.desc}</p>
                <div className="mb-6">
                  <p className="font-semibold text-primary mb-2">Features:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    {style.features.map((feature, i) => (
                      <li key={i}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-primary">
                  <Link href="/quote">Learn More</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Finishes & Materials */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Finishes & Materials</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Solid Wood",
                desc: "Premium hardwoods for durability and natural beauty. Timeless and elegant.",
              },
              {
                name: "Plywood",
                desc: "Strong, stable construction with excellent finish options. Great value.",
              },
              {
                name: "Thermofoil",
                desc: "Durable, moisture-resistant finish. Perfect for kitchens and bathrooms.",
              },
              {
                name: "Laminate",
                desc: "Wide range of colors and patterns. Budget-friendly and easy to maintain.",
              },
              {
                name: "Veneer",
                desc: "Beautiful wood appearance with excellent stability. Premium look.",
              },
              {
                name: "Painted",
                desc: "Custom colors to match your design. Modern and versatile option.",
              },
            ].map((finish, idx) => (
              <Card key={idx} className="p-6 border-0 shadow-md">
                <h3 className="text-xl font-bold mb-2 text-primary">{finish.name}</h3>
                <p className="text-muted-foreground">{finish.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware & Accessories */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Hardware & Accessories</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Complete your cabinets with our selection of premium hardware and organizational accessories.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Hardware Options",
                items: ["Soft-close hinges", "Drawer slides", "Knobs and pulls", "Handles", "Specialty hinges"],
              },
              {
                title: "Accessories",
                items: ["Pull-out organizers", "Spice racks", "Trash bins", "Shelf dividers", "Lighting"],
              },
            ].map((category, idx) => (
              <Card key={idx} className="p-8 border-0 shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Find Your Perfect Cabinets</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Let our designers help you select the perfect cabinets for your kitchen or bathroom.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-accent hover:bg-accent/90 text-primary px-8 py-6 text-lg font-semibold">
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
