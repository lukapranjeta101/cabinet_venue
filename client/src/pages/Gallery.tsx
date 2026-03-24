import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Remodel",
      category: "kitchen",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/hero-kitchen-4vRGYuxGNodsSd5UHWj3JY.webp",
      desc: "Complete kitchen transformation with dark charcoal cabinets and warm wood accents",
    },
    {
      id: 2,
      title: "Luxury Bathroom Vanity",
      category: "bathroom",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/bathroom-cabinets-ZkUMxfYLJJA2dy4y7PLtsQ.webp",
      desc: "Custom bathroom vanity with premium finishes and soft gold hardware",
    },
    {
      id: 3,
      title: "Kitchen Transformation",
      category: "kitchen",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/kitchen-remodel-before-after-LtV3yEXvvwAnLDRP7TfedS.webp",
      desc: "Before and after kitchen renovation showcasing professional craftsmanship",
    },
    {
      id: 4,
      title: "Premium Cabinet Details",
      category: "cabinets",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/cabinet-details-akAKJa6SVP7wwBrGjjutvB.webp",
      desc: "Close-up details showing quality craftsmanship and material selection",
    },
    {
      id: 5,
      title: "Contemporary Kitchen",
      category: "kitchen",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/hero-kitchen-4vRGYuxGNodsSd5UHWj3JY.webp",
      desc: "Sleek modern kitchen with minimalist design and premium appliances",
    },
    {
      id: 6,
      title: "Showroom Display",
      category: "showroom",
      img: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/showroom-interior-Zgfqnfz9J2ZpdxNj8vtPDA.webp",
      desc: "Cabinet Venue showroom featuring various styles and finishes",
    },
  ];

  const filteredProjects = selectedCategory === "all" ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">Project Gallery</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Explore our portfolio of completed kitchen and bathroom projects.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            {[
              { id: "all", label: "All Projects" },
              { id: "kitchen", label: "Kitchens" },
              { id: "bathroom", label: "Bathrooms" },
              { id: "cabinets", label: "Cabinets" },
              { id: "showroom", label: "Showroom" },
            ].map((filter) => (
              <Button
                key={filter.id}
                onClick={() => setSelectedCategory(filter.id)}
                className={`px-6 py-2 ${
                  selectedCategory === filter.id
                    ? "bg-accent text-primary"
                    : "bg-gray-200 text-primary hover:bg-gray-300"
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative h-80 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex flex-col items-end justify-end">
                  <div className="p-6 w-full bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200+", label: "Projects Completed" },
              { number: "500+", label: "Happy Customers" },
              { number: "15+", label: "Years Experience" },
              { number: "100%", label: "Customer Satisfaction" },
            ].map((stat, idx) => (
              <div key={idx}>
                <p className="text-5xl font-bold text-accent mb-2">{stat.number}</p>
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            See how we can transform your kitchen or bathroom. Contact us for a free consultation.
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
