import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

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
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: "Ceramic Tile",
                desc: "Durable, water-resistant, and easy to clean. Perfect for kitchens and bathrooms.",
                benefits: ["Water resistant", "Easy to clean", "Durable", "Wide variety", "Affordable"],
                best: "Best for kitchens and bathrooms",
              },
              {
                name: "Porcelain Tile",
                desc: "Harder than ceramic, stain-resistant, and extremely durable.",
                benefits: ["Very durable", "Stain resistant", "Low maintenance", "Premium look", "Long-lasting"],
                best: "Best for high-traffic areas",
              },
              {
                name: "Hardwood",
                desc: "Classic, warm flooring that adds character and value to your home.",
                benefits: ["Beautiful appearance", "Warm feel", "Adds value", "Timeless", "Refinishable"],
                best: "Best for living areas",
              },
              {
                name: "Laminate",
                desc: "Budget-friendly option that mimics the look of hardwood or tile.",
                benefits: ["Affordable", "Easy installation", "Durable", "Many styles", "Low maintenance"],
                best: "Best for budget-conscious projects",
              },
              {
                name: "Vinyl Plank",
                desc: "Water-resistant, comfortable underfoot, and easy to install.",
                benefits: ["Water resistant", "Comfortable", "Easy to install", "Affordable", "Durable"],
                best: "Best for kitchens and bathrooms",
              },
              {
                name: "Stone",
                desc: "Natural stone flooring for a luxurious, elegant appearance.",
                benefits: ["Luxurious look", "Unique patterns", "Durable", "Premium feel", "Timeless"],
                best: "Best for high-end projects",
              },
            ].map((flooring, idx) => (
              <Card key={idx} className="p-8 border-0 shadow-md">
                <h3 className="text-2xl font-bold mb-2 text-primary">{flooring.name}</h3>
                <p className="text-muted-foreground mb-4">{flooring.desc}</p>
                <div className="mb-4">
                  <p className="font-semibold text-primary mb-2">Benefits:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    {flooring.benefits.map((benefit, i) => (
                      <li key={i}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-accent font-semibold">{flooring.best}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Colors & Finishes */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Colors & Finishes</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Choose from a wide range of colors and finishes to complement your kitchen and bathroom design.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Light Oak", color: "bg-yellow-100" },
              { name: "Dark Walnut", color: "bg-amber-900" },
              { name: "Gray Concrete", color: "bg-gray-400" },
              { name: "White Marble", color: "bg-gray-100 border-2 border-gray-300" },
              { name: "Black Slate", color: "bg-gray-800" },
              { name: "Warm Beige", color: "bg-yellow-50" },
              { name: "Espresso", color: "bg-amber-950" },
              { name: "Ash Gray", color: "bg-gray-500" },
            ].map((finish, idx) => (
              <div key={idx} className="text-center">
                <div className={`h-32 rounded-lg mb-4 shadow-md ${finish.color}`}></div>
                <p className="font-semibold text-primary">{finish.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation & Durability */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-primary">Professional Installation</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Proper installation is crucial for the longevity and appearance of your flooring. Our experienced installation team ensures every detail is perfect.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Proper subfloor preparation",
                  "Precise measurements and cuts",
                  "Professional-grade adhesives and sealants",
                  "Expert finishing touches",
                  "Warranty on installation",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
                <Link href="/quote">Get Installation Quote</Link>
              </Button>
            </div>
            <div className="relative h-96">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/hero-kitchen-4vRGYuxGNodsSd5UHWj3JY.webp"
                alt="Professional flooring installation"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Flooring Care & Maintenance</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Daily Care",
                tips: ["Sweep regularly", "Wipe spills immediately", "Use doormats", "Avoid excess moisture"],
              },
              {
                title: "Regular Cleaning",
                tips: ["Vacuum or sweep", "Damp mop gently", "Use appropriate cleaners", "Avoid harsh chemicals"],
              },
              {
                title: "Long-term Maintenance",
                tips: ["Refinish as needed", "Repair damage promptly", "Use protective pads", "Professional cleaning"],
              },
            ].map((care, idx) => (
              <Card key={idx} className="p-8 border-0 shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-primary">{care.title}</h3>
                <ul className="space-y-3">
                  {care.tips.map((tip, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted-foreground">
                      <span className="w-2 h-2 bg-accent rounded-full"></span>
                      {tip}
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
          <h2 className="text-4xl font-bold mb-8">Complete Your Renovation</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Let us help you select and install the perfect flooring for your kitchen or bathroom.
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
