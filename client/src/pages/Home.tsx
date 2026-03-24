import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Hammer, Palette, Wrench, ChevronRight, Star } from "lucide-react";
import { Link } from "wouter";

/**
 * Cabinet Venue Home Page
 * Design: Modern Minimalism with Warm Sophistication
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/hero-kitchen-4vRGYuxGNodsSd5UHWj3JY.webp"
            alt="Modern kitchen with dark cabinets"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="container relative z-10 grid grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Beautiful Kitchens Start With the Right Cabinets
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Professional cabinetry, countertops, and kitchen design services for homeowners in Northeast Ohio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-accent hover:bg-accent/90 text-primary px-8 py-6 text-lg font-semibold">
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
              >
                <a href="tel:(440) 561-0354">Call Now</a>
              </Button>
            </div>
          </div>
          <div></div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Services</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Hammer,
                title: "Cabinet Sales",
                desc: "High-quality kitchen and bathroom cabinets with modern styles and durable materials.",
                link: "/cabinets",
              },
              {
                icon: Palette,
                title: "Kitchen & Bath Design",
                desc: "Professional design services to help plan your ideal kitchen layout and cabinetry.",
                link: "/services",
              },
              {
                icon: Wrench,
                title: "Installation & Contracting",
                desc: "Complete installation services to ensure a seamless renovation experience.",
                link: "/services",
              },
            ].map((service, idx) => (
              <Card key={idx} className="p-8 border-0 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
                <Link href={service.link} className="text-accent font-semibold hover:text-accent/80 inline-flex items-center gap-2">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-primary">Why Choose Cabinet Venue?</h2>
              <div className="space-y-6">
                {[
                  "Professional design guidance from experienced consultants",
                  "Affordable pricing without compromising on quality",
                  "Quality craftsmanship and attention to detail",
                  "Local Cleveland-area business you can trust",
                  "Personalized kitchen solutions tailored to your needs",
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                      <ChevronRight className="w-4 h-4 text-primary" />
                    </div>
                    <p className="text-lg text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/showroom-interior-Zgfqnfz9J2ZpdxNj8vtPDA.webp"
                alt="Cabinet Venue showroom"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Featured Projects</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/hero-kitchen-4vRGYuxGNodsSd5UHWj3JY.webp",
                title: "Modern Kitchen Remodel",
              },
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/bathroom-cabinets-ZkUMxfYLJJA2dy4y7PLtsQ.webp",
                title: "Luxury Bathroom Vanity",
              },
              {
                img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/kitchen-remodel-before-after-LtV3yEXvvwAnLDRP7TfedS.webp",
                title: "Kitchen Transformation",
              },
            ].map((project, idx) => (
              <div key={idx} className="group relative h-64 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                  <div className="p-4 w-full bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-semibold">{project.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button asChild className="bg-accent hover:bg-accent/90 text-primary px-8 py-6 font-semibold">
              <Link href="/gallery">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">What Our Customers Say</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "Cabinets are just what was promised. Very good quality.",
                author: "Sarah M.",
                rating: 5,
              },
              {
                text: "The process from design to installation was seamless. Highly recommend!",
                author: "John D.",
                rating: 5,
              },
              {
                text: "Great experience working together to achieve our dream kitchen.",
                author: "Michelle T.",
                rating: 5,
              },
            ].map((review, idx) => (
              <Card key={idx} className="p-8 border-0 shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-semibold text-primary">{review.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Start Designing Your Dream Kitchen</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-accent hover:bg-accent/90 text-primary px-8 py-6 text-lg font-semibold">
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
