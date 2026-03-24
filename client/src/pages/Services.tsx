import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Hammer, Palette, Wrench, Lightbulb } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Comprehensive kitchen and bathroom solutions from design to installation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Cabinet Sales */}
            <Card className="p-8 border-0 shadow-md">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Hammer className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-primary">Cabinet Sales</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We offer a wide selection of high-quality kitchen and bathroom cabinets in various styles, finishes, and configurations. Whether you're looking for modern minimalist designs or classic traditional styles, we have options to match your aesthetic and budget.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>✓ Premium cabinet materials</li>
                <li>✓ Multiple finish options</li>
                <li>✓ Custom configurations</li>
                <li>✓ Competitive pricing</li>
              </ul>
              <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
                <Link href="/cabinets">View Cabinet Options</Link>
              </Button>
            </Card>

            {/* Kitchen & Bath Design */}
            <Card className="p-8 border-0 shadow-md">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-primary">Kitchen & Bath Design</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our professional designers work with you to create a space that's both beautiful and functional. We'll help you optimize your layout, select the perfect materials, and bring your vision to life.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>✓ Professional design consultation</li>
                <li>✓ 3D renderings and mockups</li>
                <li>✓ Space optimization</li>
                <li>✓ Material and color selection</li>
              </ul>
              <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
                <Link href="/quote">Schedule a Consultation</Link>
              </Button>
            </Card>

            {/* Installation & Contracting */}
            <Card className="p-8 border-0 shadow-md">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-primary">Installation & Contracting</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our skilled installation team handles every detail with precision and professionalism. We manage the entire process from preparation to final touches, ensuring a seamless renovation experience.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>✓ Professional installation</li>
                <li>✓ Project management</li>
                <li>✓ Quality assurance</li>
                <li>✓ Timely completion</li>
              </ul>
              <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
                <Link href="/quote">Get Installation Quote</Link>
              </Button>
            </Card>

            {/* Design Consultation */}
            <Card className="p-8 border-0 shadow-md">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-primary">Design Consultation</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Not sure where to start? Our free design consultation helps you explore possibilities, understand your options, and plan your renovation with confidence.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li>✓ Free initial consultation</li>
                <li>✓ Expert recommendations</li>
                <li>✓ Budget planning</li>
                <li>✓ Timeline discussion</li>
              </ul>
              <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
                <Link href="/quote">Book Consultation</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Our Process</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Free Consultation",
                desc: "We meet with you to understand your needs, budget, and vision for your project.",
              },
              {
                step: "2",
                title: "Design & Planning",
                desc: "Our designers create detailed plans, 3D renderings, and material selections for your approval.",
              },
              {
                step: "3",
                title: "Installation",
                desc: "Our skilled team handles installation with precision, ensuring quality results on time.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-accent text-primary font-bold text-2xl rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Contact us today for a free consultation and let's discuss your kitchen or bathroom renovation.
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
              <a href="tel:(440) 561-0354">Call (440) 561-0354</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
