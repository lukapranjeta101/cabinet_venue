import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Get in touch with Cabinet Venue. We're here to answer your questions and help with your project.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-primary">Get In Touch</h2>
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-primary">Phone</h3>
                    <a href="tel:(440) 561-0354" className="text-accent hover:text-accent/80 font-semibold text-lg">
                      (440) 561-0354
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">Call us for immediate assistance</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-primary">Email</h3>
                    <a href="mailto:info@cabinetvenue.com" className="text-accent hover:text-accent/80 font-semibold text-lg">
                      info@cabinetvenue.com
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-primary">Visit Our Showroom</h3>
                    <p className="text-muted-foreground font-semibold">
                      25700 Lakeland Blvd<br />
                      Euclid, Ohio 44117
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">Browse our cabinet and flooring samples</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-primary">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-muted-foreground">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.5567890123456!2d-81.4!3d41.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830e5f5f5f5f5f5%3A0x5f5f5f5f5f5f5f5f!2s25700%20Lakeland%20Blvd%2C%20Euclid%2C%20OH!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-primary">Send us a Message</h2>
              <div className="w-16 h-1 bg-accent mx-auto"></div>
            </div>

            <Card className="p-8 border-0 shadow-md">
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary">Email Address *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="(440) 000-0000"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary">Subject *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="What is this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-primary">Message *</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Tell us your message..."
                  ></textarea>
                </div>

                {/* Submit */}
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 font-semibold text-lg">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Frequently Asked Questions</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "How long does a kitchen remodel typically take?",
                a: "Most kitchen remodels take 4-8 weeks depending on the scope of work and complexity of the project.",
              },
              {
                q: "Do you offer design services?",
                a: "Yes! Our professional designers can help you plan your kitchen or bathroom layout and select materials.",
              },
              {
                q: "What is your warranty on cabinets?",
                a: "We offer a 5-year warranty on all cabinet construction and hardware against defects.",
              },
              {
                q: "Can you work with my existing layout?",
                a: "Absolutely. We can work with your current space or completely redesign it based on your needs.",
              },
              {
                q: "Do you handle all the installation?",
                a: "Yes, our skilled installation team handles all aspects of the installation process.",
              },
              {
                q: "What payment options do you offer?",
                a: "We accept cash, check, credit cards, and offer financing options for larger projects.",
              },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6 border-0 shadow-md">
                <h3 className="font-bold text-lg mb-3 text-primary">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
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
            Contact us today or request a free quote to discuss your kitchen or bathroom project.
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
