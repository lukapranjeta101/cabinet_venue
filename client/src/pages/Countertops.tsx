import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Check } from "lucide-react";

export default function Countertops() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">Premium Countertops</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Durable, beautiful countertop solutions for kitchens and bathrooms.
          </p>
        </div>
      </section>

      {/* Countertop Materials */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Countertop Materials</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: "Granite",
                desc: "Natural stone with unique patterns. Extremely durable and heat-resistant.",
                pros: ["Unique patterns", "Heat resistant", "Very durable", "High-end appearance"],
                cons: ["Requires sealing", "Higher cost", "Needs maintenance"],
              },
              {
                name: "Quartz",
                desc: "Engineered stone combining durability with consistent appearance.",
                pros: ["Non-porous", "Low maintenance", "Consistent look", "Durable"],
                cons: ["Can be pricey", "Limited edge options", "Not heat-proof"],
              },
              {
                name: "Marble",
                desc: "Elegant natural stone with classic beauty and timeless appeal.",
                pros: ["Beautiful appearance", "Elegant look", "Cool to touch", "Unique patterns"],
                cons: ["Requires sealing", "Stains easily", "Softer material", "Higher maintenance"],
              },
              {
                name: "Laminate",
                desc: "Budget-friendly option with wide range of colors and patterns.",
                pros: ["Affordable", "Many styles", "Easy to clean", "Quick installation"],
                cons: ["Less durable", "Can chip", "Visible seams", "Lower resale value"],
              },
              {
                name: "Solid Surface",
                desc: "Seamless, non-porous material that's easy to maintain and repair.",
                pros: ["Seamless", "Repairable", "Non-porous", "Easy to clean"],
                cons: ["Can scratch", "Heat sensitive", "Lower durability", "Moderate cost"],
              },
              {
                name: "Butcher Block",
                desc: "Warm wood surface that adds natural character to your kitchen.",
                pros: ["Warm appearance", "Affordable", "Renewable", "Unique character"],
                cons: ["Requires maintenance", "Water damage risk", "Stains easily", "Shorter lifespan"],
              },
            ].map((material, idx) => (
              <Card key={idx} className="p-8 border-0 shadow-md">
                <h3 className="text-2xl font-bold mb-2 text-primary">{material.name}</h3>
                <p className="text-muted-foreground mb-6">{material.desc}</p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-primary mb-3">Pros:</p>
                    <ul className="space-y-2">
                      {material.pros.map((pro, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-3">Cons:</p>
                    <ul className="space-y-2">
                      {material.cons.map((con, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5">×</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Color & Style Options */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Colors & Styles</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            We offer a wide range of colors and finishes to complement your cabinet style and home décor.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Classic White", color: "bg-white border-2 border-gray-300" },
              { name: "Warm Beige", color: "bg-amber-100" },
              { name: "Soft Gray", color: "bg-gray-300" },
              { name: "Black", color: "bg-black" },
              { name: "Marble Look", color: "bg-gradient-to-br from-white to-gray-200" },
              { name: "Granite Look", color: "bg-gradient-to-br from-gray-600 to-gray-900" },
              { name: "Wood Grain", color: "bg-amber-700" },
              { name: "Concrete", color: "bg-gray-500" },
            ].map((style, idx) => (
              <div key={idx} className="text-center">
                <div className={`h-32 rounded-lg mb-4 shadow-md ${style.color}`}></div>
                <p className="font-semibold text-primary">{style.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance & Care */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Maintenance & Care</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Daily Cleaning",
                tips: ["Wipe with soft cloth", "Use mild soap and water", "Dry immediately", "Avoid abrasive cleaners"],
              },
              {
                title: "Regular Maintenance",
                tips: ["Seal as needed", "Polish periodically", "Avoid harsh chemicals", "Use cutting boards"],
              },
              {
                title: "Long-term Care",
                tips: ["Professional sealing", "Repair chips promptly", "Protect from heat", "Use trivets and pads"],
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
          <h2 className="text-4xl font-bold mb-8">Choose Your Perfect Countertop</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Our experts can help you select the ideal countertop material for your kitchen or bathroom.
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
