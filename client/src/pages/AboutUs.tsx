import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import frontImage from "../../front.png";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">About Cabinet Venue</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            We're dedicated to transforming kitchens and bathrooms with quality cabinetry and professional design services.
          </p>
        </div>
      </section>

      {/* The Cabinet Venue Solution */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">The Cabinet Venue Solution</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Cabinet Venue offers kitchen and bathroom products that combine professional quality and creative solutions to make you proud of the design in your home with prices that can’t be beat! Our work focuses on a mix of creativity and professionalism that is focused on your vision for your kitchen. When you work with us, you don’t just get discount prices. You get an amazing, professionally-crafted kitchen too!
              </p>
            </div>
            <div className="relative h-96">
              <img
                src={frontImage}
                alt="Cabinet Venue showroom"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Cabinet Venue Unique */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-primary">What Makes Cabinet Venue Unique?</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <div>
                <p className="font-bold text-primary mb-1">Expert Guidance</p>
                <p>
                  Come to us with hope that you can revitalize your outdated kitchen, and we will work with you from start to finish. We can start by scheduling a free measure for your kitchen.
                </p>
              </div>
              <div>
                <p className="font-bold text-primary mb-1">High-Quality Products</p>
                <p>
                  If you’ve ever felt your kitchen looks a little “bleak,” then you know the importance of outfitting your kitchen with quality. Cabinet Venue has the products and experience needed to take your kitchen and make it look incredible.
                </p>
              </div>
              <div>
                <p className="font-bold text-primary mb-1">Discount Prices</p>
                <p>
                  Tired of seeing something you want, only to look at the price tag and walk away, filled with sadness? We believe that great quality and a beautiful design for your kitchen should be affordable to all. Our prices are affordable so that you can have a kitchen that you are happy to walk into!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upgrading the Standard of Kitchen Design */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-primary">Upgrading the Standard of Kitchen Design</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Cabinet Venue started as a dream that blossomed from being tired of settling for an outdated kitchen because of high prices. We built up a reputation for affordable prices and quality products, and set out to make sure that every client and contractor loved the end product.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We strive to combine expert skills with a solid work ethic and a genuine care for our customers. When you work with Cabinet Venue, it&apos;s not just about quality products and affordable prices. Our customers are extremely happy because we know what it&apos;s like to not be happy with the current look of your kitchen, and we show that care in our work.
            </p>
          </div>
        </div>
      </section>

      {/* Ready to Help */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-primary">Cabinet Venue Is Ready to Help!</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Don’t continue to settle for a kitchen that you aren’t happy with. Start the transformation of your kitchen with a free measure from one of our expert contractors. Call us today at{" "}
              <a href="tel:4405610354" className="text-primary font-semibold underline underline-offset-4">
                440-561-0354
              </a>{" "}
              to learn more about how Cabinet Venue can design the kitchen you’ve always wanted!
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Let&apos;s discuss your kitchen or bathroom renovation project and create something beautiful together.
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
