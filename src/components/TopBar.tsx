import { Mail, Phone } from "lucide-react";

const TopBar = () => (
  <div className="bg-primary text-primary-foreground text-sm py-2">
    <div className="container flex flex-wrap items-center justify-between gap-2">
      <span className="opacity-80">Serving California & Hawaii Since 2003</span>
      <div className="flex items-center gap-4">
        <a href="mailto:help@plansforhealth.com" className="flex items-center gap-1.5 hover:opacity-100 opacity-80 transition-opacity">
          <Mail className="w-3.5 h-3.5" /> help@plansforhealth.com
        </a>
        <a href="tel:+19168658352" className="flex items-center gap-1.5 hover:opacity-100 opacity-80 transition-opacity">
          <Phone className="w-3.5 h-3.5" /> (916) 865-8352
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
