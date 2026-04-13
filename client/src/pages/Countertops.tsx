import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import graniteImage from "/granite.png";
import quartzImage from "/countertop-quartz.jpg";
import laminateImage from "/countertop-laminate.jpg";

const countertopTypes = [
  {
    name: "Granite",
    image: graniteImage,
    description: [
      "Granite is a fantastic choice for kitchen countertops because of its ability to withstand heavy usage. It has become a popular choice for not only its durability, but also for the amazing design. These countertops can fit in with practically every kitchen, and come in many different colors.",
      "When you choose Cabinet Venue for your granite countertop, we will take you to pick out the type of granite you wish to have installed in your kitchen and bath. From there, we custom cut it and handle the installation to build a beautiful display in your home.",
    ],
  },
  {
    name: "Quartz",
    image: quartzImage,
    description: [
      "The quartz countertop has become a popular choice due to the unique aesthetic appeal that includes color and a sense of fluidity. It combines long-lasting strength with a beautiful display that will survive the test of time. The unique surface is unforgettable, and you will be loving the look of your kitchen thanks to this addition.",
      "Our team of experts is available and ready to custom cut your selection and install it for your kitchen and bath countertops. Choose the countertop you would like to have installed in your home, and we will be with you from start to finish as you watch this new addition to your home bring with it a unique presence.",
    ],
  },
  {
    name: "Custom Laminate",
    image: laminateImage,
    description: [
      "Cabinet Venue also offers an array of budget friendly laminate countertops to be installed in your home. Laminate countertops offer a variety of blends and beautiful finishes that are extremely durable. Choose one that fits your budget, and let out team of expert designers handle the installation.",
    ],
  },
];

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

      {/* Countertop Types */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Countertop Types</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="space-y-10">
            {countertopTypes.map((type, idx) => (
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
          <h2 className="text-4xl font-bold mb-8">Choose Your Perfect Countertop</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Our experts can help you select the ideal countertop material for your kitchen or bathroom.
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
