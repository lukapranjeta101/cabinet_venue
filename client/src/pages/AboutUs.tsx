import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Award, Users, Zap } from "lucide-react";

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

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Cabinet Venue was founded with a simple mission: to provide homeowners in Northeast Ohio with access to high-quality cabinetry, professional design services, and expert installation at affordable prices.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We believe that a beautiful kitchen or bathroom shouldn't require a luxury budget. By combining quality materials with skilled craftsmanship, we've helped hundreds of families create the homes of their dreams.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, Cabinet Venue stands as a trusted local business in Euclid, Ohio, known for reliability, quality, and personalized service.
              </p>
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

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Core Values</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-md">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Quality</h3>
              <p className="text-muted-foreground">
                We never compromise on the quality of our materials, craftsmanship, or service. Every cabinet is built to last.
              </p>
            </Card>
            <Card className="p-8 border-0 shadow-md">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Customer Focus</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We listen to your needs and deliver personalized solutions.
              </p>
            </Card>
            <Card className="p-8 border-0 shadow-md">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-primary">Efficiency</h3>
              <p className="text-muted-foreground">
                We work efficiently to deliver your project on time and within budget, without cutting corners.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Team</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Our experienced team of designers, craftsmen, and installation specialists are dedicated to bringing your vision to life. With years of experience in the kitchen and bath industry, we know how to create beautiful, functional spaces.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Smith", role: "Owner & Lead Designer", desc: "20+ years in cabinet design and installation" },
              { name: "Maria Garcia", role: "Senior Designer", desc: "Expert in kitchen layouts and space optimization" },
              { name: "David Chen", role: "Installation Manager", desc: "Ensures every project is completed to perfection" },
            ].map((member, idx) => (
              <Card key={idx} className="p-8 border-0 shadow-md text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold text-accent">{member.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-primary">{member.name}</h3>
                <p className="text-accent font-semibold mb-2">{member.role}</p>
                <p className="text-muted-foreground">{member.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Let's discuss your kitchen or bathroom renovation project and create something beautiful together.
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
