import { Mail, Phone } from "lucide-react";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground text-xs sm:text-sm py-2">
    <div className="container flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-center">
      <span className="opacity-80">Serving California &amp; Hawaii Since 2003</span>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
        <a
          href="mailto:help@plansforhealth.com"
          className="flex items-center gap-1.5 whitespace-nowrap hover:opacity-100 opacity-80 transition-opacity"
        >
          <Mail className="w-3.5 h-3.5 shrink-0" /> help@plansforhealth.com
        </a>
        <a
          href="tel:+19168658352"
          className="flex items-center gap-1.5 whitespace-nowrap hover:opacity-100 opacity-80 transition-opacity"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" /> (916) 865-8352
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
