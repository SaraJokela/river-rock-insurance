import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-lg">RR</span>
            </div>
            <div className="leading-tight">
              <span className="font-bold text-lg block">River Rock</span>
              <span className="text-sm opacity-80">Insurance Services</span>
            </div>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Licensed Medicare insurance brokerage proudly serving California and Hawaii since 2003.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Medicare Plans</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/medicare#advantage" className="hover:opacity-100 transition-opacity">Medicare Advantage</Link></li>
            <li><Link to="/medicare#supplement" className="hover:opacity-100 transition-opacity">Medicare Supplement</Link></li>
            <li><Link to="/medicare#partd" className="hover:opacity-100 transition-opacity">Medicare Part D</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Individual & Family</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Locations</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/california" className="hover:opacity-100 transition-opacity">California</Link></li>
            <li><Link to="/sacramento" className="hover:opacity-100 transition-opacity">Sacramento</Link></li>
            <li><Link to="/roseville" className="hover:opacity-100 transition-opacity">Roseville</Link></li>
            <li><Link to="/hawaii" className="hover:opacity-100 transition-opacity">Hawaii</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li><a href="tel:+19168658352" className="flex items-center gap-2 hover:opacity-100"><Phone className="w-4 h-4" /> (916) 865-8352</a></li>
            <li><a href="mailto:help@plansforhealth.com" className="flex items-center gap-2 hover:opacity-100"><Mail className="w-4 h-4" /> help@plansforhealth.com</a></li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> Sacramento & Roseville, CA</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
        <p>&copy; {new Date().getFullYear()} River Rock Insurance Services. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/about" className="hover:opacity-100">About</Link>
          <Link to="/contact" className="hover:opacity-100">Contact</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
