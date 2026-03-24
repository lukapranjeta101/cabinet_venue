import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "wouter";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "kitchen-remodel",
    scope: "full-remodel",
    budget: "moderate",
    timeline: "flexible",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "kitchen-remodel",
        scope: "full-remodel",
        budget: "moderate",
        timeline: "flexible",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container">
          <h1 className="text-5xl font-bold mb-6">Get Your Free Quote</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Tell us about your project and we'll provide a detailed estimate.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Form */}
            <div className="md:col-span-2">
              <Card className="p-8 border-0 shadow-md">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl">✓</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-primary">Thank You!</h3>
                    <p className="text-muted-foreground mb-4">
                      We've received your quote request. We'll contact you within 24 hours.
                    </p>
                    <Button asChild className="bg-accent hover:bg-accent/90 text-primary">
                      <Link href="/">Back to Home</Link>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="John Smith"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="(440) 000-0000"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">Project Type *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="kitchen-remodel">Kitchen Remodel</option>
                        <option value="bathroom-remodel">Bathroom Remodel</option>
                        <option value="cabinet-installation">Cabinet Installation</option>
                        <option value="countertop-installation">Countertop Installation</option>
                        <option value="flooring-installation">Flooring Installation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Scope */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">Project Scope *</label>
                      <select
                        name="scope"
                        value={formData.scope}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="full-remodel">Full Remodel</option>
                        <option value="partial-remodel">Partial Remodel</option>
                        <option value="cabinets-only">Cabinets Only</option>
                        <option value="countertops-only">Countertops Only</option>
                        <option value="flooring-only">Flooring Only</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">Budget Range *</label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-20k">$10,000 - $20,000</option>
                        <option value="moderate">$20,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">Timeline *</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      >
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 Months</option>
                        <option value="3-6-months">3-6 Months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">Project Details</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                        placeholder="Tell us more about your project, any specific requirements, or questions..."
                      ></textarea>
                    </div>

                    {/* Submit */}
                    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-primary py-3 font-semibold text-lg">
                      Request Quote
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Sidebar Info */}
            <div>
              <Card className="p-8 border-0 shadow-md mb-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">Why Get a Quote?</h3>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Get accurate pricing for your project</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Understand project timeline and scope</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>Explore design options and materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                    <span>No obligation or hidden fees</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8 border-0 shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-primary">Quick Contact</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <a href="tel:(440) 561-0354" className="text-accent font-semibold hover:text-accent/80">
                      (440) 561-0354
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:info@cabinetvenue.com" className="text-accent font-semibold hover:text-accent/80">
                      info@cabinetvenue.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Hours</p>
                    <p className="text-sm">Mon-Fri: 9am-6pm</p>
                    <p className="text-sm">Sat: 10am-4pm</p>
                    <p className="text-sm">Sun: Closed</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
