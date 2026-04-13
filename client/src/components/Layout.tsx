import { Button } from "@/components/ui/button";
import { cabinetSectionLinks } from "@/lib/cabinetCatalog";
import { Phone, Menu, X, ChevronDown, Instagram } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useEffect, useRef, useState } from "react";
import logoImage from "../../logo.png";

interface LayoutProps {
  children: React.ReactNode;
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M13.5 21v-8.2h2.8l.42-3.2H13.5V7.56c0-.93.26-1.56 1.6-1.56h1.7V3.14c-.3-.04-1.3-.14-2.48-.14-2.46 0-4.14 1.5-4.14 4.25V9.6H7.5v3.2h3.13V21h2.87Z" />
    </svg>
  );
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCabinetMenuOpen, setMobileCabinetMenuOpen] = useState(false);
  const [location] = useLocation();
  const [isInHero, setIsInHero] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const updateHeaderMode = () => {
      if (location !== "/") {
        setIsInHero(false);
        return;
      }

      const hero = document.querySelector<HTMLElement>("[data-hero-scroll='true']");
      if (!hero) {
        setIsInHero(false);
        return;
      }

      const rect = hero.getBoundingClientRect();
      const transitionPoint = window.innerHeight * 0.92;
      const insideHero = rect.bottom > transitionPoint;
      setIsInHero(insideHero);
    };

    updateHeaderMode();
    window.addEventListener("scroll", updateHeaderMode, { passive: true });
    window.addEventListener("resize", updateHeaderMode);

    return () => {
      window.removeEventListener("scroll", updateHeaderMode);
      window.removeEventListener("resize", updateHeaderMode);
    };
  }, [location]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileCabinetMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/countertops", label: "Countertops" },
    { href: "/flooring", label: "Flooring" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  const isCabinetsSection = location === "/cabinets" || location.startsWith("/cabinets/");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header
        ref={headerRef}
        className={`top-0 z-50 border-b transition-all duration-300 ${
          location === "/"
            ? `fixed inset-x-0 ${isInHero ? "bg-transparent border-transparent shadow-none" : "bg-white/95 backdrop-blur border-border shadow-sm"}`
            : "sticky bg-white border-border shadow-sm"
        }`}
      >
        <div className="container">
          {/* Desktop Header */}
          <div className="hidden md:flex items-center justify-between py-4 gap-8">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src={logoImage}
                alt="Cabinet Venue Logo"
                className="w-16 h-16 object-contain saturate-125 contrast-110"
              />
              <div className="min-w-0">
                <h1 className="font-bold text-base text-primary whitespace-nowrap">Cabinet Venue</h1>
                <p className="text-xs text-muted-foreground whitespace-nowrap">Euclid, Ohio</p>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="flex items-center gap-6 flex-1 justify-center">
              {navLinks.slice(0, 3).map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-primary hover:text-accent transition-colors whitespace-nowrap">
                  {link.label}
                </Link>
              ))}

              <div className="relative group">
                <Link
                  href="/cabinets"
                  className={`inline-flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap ${
                    isCabinetsSection ? "text-accent" : "text-primary hover:text-accent"
                  }`}
                >
                  <span>Cabinets</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>

                <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 invisible pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto">
                  <div className="w-72 border border-border/70 bg-white shadow-lg p-2">
                    <Link
                      href="/cabinets"
                      className="block px-4 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
                    >
                      All Cabinet Lines
                    </Link>
                    {cabinetSectionLinks.map((brand) => (
                      <Link
                        key={brand.href}
                        href={brand.href}
                        className="block px-4 py-3 text-sm text-primary hover:bg-primary/5 transition-colors"
                      >
                        {brand.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {navLinks.slice(3).map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-primary hover:text-accent transition-colors whitespace-nowrap">
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
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground flex-shrink-0">
                <Link href="/quote">Get Quote</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Header */}
          <div className="md:hidden flex items-center justify-between py-3 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src={logoImage}
                alt="Cabinet Venue Logo"
                className="w-12 h-12 object-contain saturate-125 contrast-110"
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
                {navLinks.slice(0, 3).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-primary hover:bg-gray-100 rounded transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-2">
                  <button
                    type="button"
                    onClick={() => setMobileCabinetMenuOpen((open) => !open)}
                    className="flex w-full items-center justify-between px-2 py-2 text-primary hover:bg-gray-100 rounded transition-colors"
                  >
                    <span className={`font-medium ${isCabinetsSection ? "text-accent" : ""}`}>Cabinets</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileCabinetMenuOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileCabinetMenuOpen && (
                    <div className="mt-2 ml-2 border-l border-border pl-3 space-y-1">
                      <Link href="/cabinets" className="block px-4 py-2 text-primary hover:bg-gray-100 rounded transition-colors">
                        All Cabinet Lines
                      </Link>
                      {cabinetSectionLinks.map((brand) => (
                        <Link key={brand.href} href={brand.href} className="block px-4 py-2 text-primary hover:bg-gray-100 rounded transition-colors">
                          {brand.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                {navLinks.slice(3).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-primary hover:bg-gray-100 rounded transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border space-y-2 px-4">
                  <a href="tel:(440) 561-0354" className="block py-2 text-primary hover:text-accent transition-colors font-semibold">
                    Call (440) 561-0354
                  </a>
                  <a
                    href="https://www.facebook.com/CabinetVenue"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#1877F2]/25 bg-[#1877F2]/10 px-4 py-3 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors font-semibold"
                  >
                    <FacebookIcon className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
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
          <div className="grid gap-8 mb-8 text-center md:grid-cols-4 md:text-left">
            {/* Company Info */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="font-bold text-lg mb-4">Cabinet Venue</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Professional cabinetry and kitchen design services in Northeast Ohio. Transforming homes with quality craftsmanship.
              </p>
              <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
                <a
                  href="https://www.facebook.com/CabinetVenue"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 p-2.5 text-white hover:border-accent hover:text-accent transition-colors"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/8 p-2.5 text-white hover:border-accent hover:text-accent transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-col items-center md:items-start">
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
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <Link href="/about-us" className="hover:text-accent transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/cabinets/custom-build" className="hover:text-accent transition-colors">
                    Custom Build
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
            <div className="flex flex-col items-center md:items-start">
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
