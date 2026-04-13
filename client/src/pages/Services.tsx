import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

import measureImage from "/measure.jpg";
import bathroomImage from "/Bathroom-1.png";
import accessoriesImage from "/44969.png";
import countertopsImage from "/Kitchen1.jpg";
import deliveryImage from "/truck.jpg";

const services = [
  {
    title: "Kitchen and Bath Design",
    image: measureImage,
    description:
      "Cabinet Venue has the knowledge and expertise to transform your old kitchen into a beautiful design that is customized to your needs. No matter what you are looking for, we make sure to approach each project with creativity and professionalism to achieve 100% satisfaction. With our help, your kitchen can become the lively center of the household it was meant to be, at a price tag that won’t rob you of your money. Let’s setup a Free Measure and Design Consultation to get started!",
  },
  {
    title: "Cabinet Sales",
    image: bathroomImage,
    description:
      "Looking to update the look and feel of your kitchen, but don’t know what cabinets would be the best fit? Rely on our knowledge and experience in kitchen design to help you make the best selection for your home. With a variety of kitchen and bath cabinets available, we can guarantee that whatever you are looking for, our premium quality cabinets can be the answer to your needs. For DIYers and house flippers, when time is of the essence and low cost is key, we have beautiful 100% solid wood shaker style cabinets with soft closing hinges, ready to be picked up the same day.",
  },
  {
    title: "Cabinet Accessories",
    image: accessoriesImage,
    description:
      "Our cabinets come with many helpful features, making them very versatile and extremely useful for your kitchen. From soft close hinges that prevent banging to improve the durability of your cabinets, to wooden roll out shelving that are made for easy storage, our cabinets come with a variety of features that not only improve the aesthetics of your cabinet, but make it a more useful piece in your home. Our cabinet accessories also include easy trash pull outs and finished wooden cutlery dividers designed to improve the use of your cabinet.",
  },
  {
    title: "Cabinet Repair",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/cabinet-details-akAKJa6SVP7wwBrGjjutvB.webp",
    description:
      "Cabinet Venue takes extreme care of our cabinets, which is why we include subtle features such as soft close hinges to improve the lifespan of your cabinets. But, if you have a cabinet that has seen its fair share of wear and tear, then you don’t need to toss it away. Our experts will examine the problems and fix it up so that your cabinet looks and performs like its brand new.",
  },
  {
    title: "Countertops",
    image: countertopsImage,
    description:
      "Countertops are the perfect complement to your new cabinet, and our modern designs will really add to the beauty of your kitchen. We offer a wide variety of countertops that not only look great, but are built to last. Including, but not limited to, granite and natural stone, quartz, and custom laminate or Formica. No matter what design you are looking for, our countertop selection will boost the appeal of your kitchen!",
  },
  {
    title: "Delivery",
    image: deliveryImage,
    description:
      "For DIYers, contractors, and house flippers, our team can provide a fast and safe delivery to your location. When you choose our delivery services, you can be assured that no damage will occur to your cabinet during the transfer to your home, easing the burden that otherwise would be placed on you.",
  },
];

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

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-10">
            {services.map((service, idx) => (
              <Card key={service.title} className="border border-border/70 shadow-sm overflow-hidden">
                <div className={`grid lg:grid-cols-2 ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div className="h-72 md:h-96 bg-muted flex items-center justify-center">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold mb-5 text-primary">{service.title}</h3>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
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
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold">
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
