import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/cabinets", label: "Cabinets" },
    { href: "/countertops", label: "Countertops" },
    { href: "/flooring", label: "Flooring" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container">
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between py-4 gap-8">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/Screenshot2026-03-12at11.58.15AM_4e32ffc3.png"
                alt="Cabinet Venue Logo"
                className="w-12 h-12 object-contain"
              />
              <div className="min-w-0">
                <h1 className="font-bold text-base text-primary whitespace-nowrap">Cabinet Venue</h1>
                <p className="text-xs text-muted-foreground whitespace-nowrap">Euclid, Ohio</p>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-6 flex-1 justify-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-primary hover:text-accent transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Section - Phone and Button */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <a href="tel:(440) 561-0354" className="flex items-center gap-2 text-primary hover:text-accent transition-colors whitespace-nowrap">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-semibold">(440) 561-0354</span>
              </a>
              <Button asChild className="bg-accent hover:bg-accent/90 text-primary flex-shrink-0">
                <Link href="/quote">Get Quote</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between py-3 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663426490300/kn7uSdQy55GNMguLj92vSE/Screenshot2026-03-12at11.58.15AM_4e32ffc3.png"
                alt="Cabinet Venue Logo"
                className="w-10 h-10 object-contain"
              />
              <div className="min-w-0">
                <h1 className="font-bold text-sm text-primary">Cabinet Venue</h1>
                <p className="text-xs text-muted-foreground">Euclid, Ohio</p>
              </div>
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-white pb-4">
              <nav className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 text-primary hover:bg-gray-100 rounded transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border space-y-2 px-4">
                  <a href="tel:(440) 561-0354" className="block py-2 text-primary hover:text-accent transition-colors font-semibold">
                    Call (440) 561-0354
                  </a>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-primary">
                    <Link href="/quote">Get Quote</Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-white py-12 mt-auto">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Cabinet Venue</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Professional cabinetry and kitchen design services in Northeast Ohio. Transforming homes with quality craftsmanship.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/cabinets" className="hover:text-accent transition-colors">
                    Cabinet Sales
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-accent transition-colors">
                    Kitchen Design
                  </Link>
                </li>
                <li>
                  <Link href="/countertops" className="hover:text-accent transition-colors">
                    Countertops
                  </Link>
                </li>
                <li>
                  <Link href="/flooring" className="hover:text-accent transition-colors">
                    Flooring
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/about-us" className="hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-accent transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-accent transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/quote" className="hover:text-accent transition-colors">
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-sm text-gray-300 mb-3">
                <a href="tel:(440) 561-0354" className="hover:text-accent transition-colors">
                  (440) 561-0354
                </a>
              </p>
              <p className="text-sm text-gray-300">
                25700 Lakeland Blvd<br />
                Euclid, Ohio 44117
              </p>
              <p className="text-sm text-gray-300 mt-3">
                Mon-Fri: 9am-6pm<br />
                Sat: 10am-4pm
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/20 pt-8 text-center text-sm text-gray-300">
            <p>&copy; 2026 Cabinet Venue. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
