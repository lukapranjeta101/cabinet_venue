import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import hardwoodImage from "/flooring-hardwood.jpg";
import laminateImage from "/flooring-laminate.jpg";
import luxuryVinylImage from "/flooring-luxury-vinyl.jpg";

const flooringTypes = [
  {
    name: "Hardwood",
    image: hardwoodImage,
    description: [
      "The most classic of them all. Hardwood flooring has withstood the test of time due to the beauty, durability, and warmth it brings into any home. Its presence adds a sense of quality and welcoming to the room, and it is always a favorite.",
      "Durability is a big reason as to why hardwood flooring is beloved. If proper care is taken, it can last a lifetime in your home. And since it is made from wood, you can simply stain it to any color that fits your needs. Age is also kind to hardwood, as it begins to look better and better as the years go by. This selection of flooring offers fantastic versatility, and includes easier installation into your home.",
    ],
  },
  {
    name: "Laminate",
    image: laminateImage,
    description: [
      "Cabinet Venue offers a wide selection of laminate flooring, all of which come with a variety of colors and great durability. You can customize your selection based upon how you want your floor to look, as laminate flooring has different styles to fit your needs. No matter whether you want your floor to look like genuine hardwood or to have polish and shine, this selection will achieve the goal.",
      "Since floors can quickly lose their original design due to use, we wanted to make sure our selection came with excellent durability, so that you won’t have to worry about new flooring for years to come. We also offer installation for these floors, making us a one-stop shop from purchase to completion.",
    ],
  },
  {
    name: "Luxury Vinyl",
    image: luxuryVinylImage,
    description: [
      "If you are looking for a smooth or textured finish to your floor, then vinyl is an excellent selection for your needs. The aesthetic appeal of these floors, combined with the benefits that include being waterproof, make these floors are excellent choice for homes that are in need of a combination of great design and reliability.",
      "The styles of these floors include a rich stone design to an elegant hardwood floor, and come with a wide variety of colors. Installation is available for these floors, ensuring that proper expertise and care is taken to outfit your home with flooring that you and your visitors will love.",
    ],
  },
];

export default function Flooring() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">Quality Flooring Solutions</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Complete your renovation with beautiful, durable flooring options.
          </p>
        </div>
      </section>

      {/* Flooring Types */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Flooring Options</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="space-y-10">
            {flooringTypes.map((type, idx) => (
              <article key={type.name} className="border border-border/70 bg-white overflow-hidden">
                <div className={`grid lg:grid-cols-2 ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="h-72 md:h-96 bg-muted">
                    <img src={type.image} alt={type.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-8 md:p-10">
                    <h3 className="text-3xl font-bold mb-5 text-primary">{type.name}</h3>
                    <div className="space-y-4">
                      {type.description.map((paragraph) => (
                        <p key={paragraph} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Complete Your Renovation</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Let us help you select and install the perfect flooring for your kitchen or bathroom.
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
