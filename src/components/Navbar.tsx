import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Medicare",
    to: "/medicare",
    children: [
      { label: "Medicare Overview", to: "/medicare" },
      { label: "Medicare Advantage", to: "/medicare#advantage" },
      { label: "Medicare Supplement", to: "/medicare#supplement" },
      { label: "Medicare Part D", to: "/medicare#partd" },
    ],
  },
  {
    label: "Locations",
    to: "/california",
    children: [
      { label: "California", to: "/california" },
      { label: "Sacramento", to: "/sacramento" },
      { label: "Roseville", to: "/roseville" },
      { label: "Hawaii", to: "/hawaii" },
    ],
  },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">RR</span>
          </div>
          <div className="leading-tight">
            <span className="font-bold text-primary text-base md:text-lg block">River Rock</span>
            <span className="text-xs text-muted-foreground">Insurance Services</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={link.to}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.to ? "text-accent" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
              {link.children && openDropdown === link.label && (
                <div className="absolute top-full left-0 bg-card border rounded-lg shadow-lg py-2 min-w-[200px] animate-fade-in">
                  {link.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className="block px-4 py-2 text-sm hover:bg-secondary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+19165551234" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent">
            <Phone className="w-4 h-4" />
            (916) 555-1234
          </a>
          <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t bg-card">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.to}
                  className="block px-3 py-2.5 rounded-md font-medium hover:bg-secondary"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.to}
                    to={child.to}
                    className="block pl-8 py-2 text-sm text-muted-foreground hover:text-accent"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Button asChild className="mt-3 bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact" onClick={() => setMobileOpen(false)}>Get a Free Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
