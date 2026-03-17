import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Award } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  showBadges?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  ctaText = "Get a Free Quote",
  ctaLink = "/contact",
  showBadges = true,
}: HeroSectionProps) => (
  <section className="bg-primary text-primary-foreground">
    <div className="container py-16 md:py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-block bg-accent/20 text-accent-foreground border border-accent/30 text-sm font-medium px-4 py-1.5 rounded-full">
            {subtitle}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            {title}
          </h1>
          <p className="text-lg opacity-90 max-w-lg leading-relaxed">{description}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <Link to={ctaLink}>{ctaText}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="tel:+19165551234">Call (916) 555-1234</a>
            </Button>
          </div>
          {showBadges && (
            <div className="flex flex-wrap gap-6 pt-4 text-sm opacity-80">
              <span className="flex items-center gap-2"><Shield className="w-4 h-4" /> Licensed & Certified</span>
              <span className="flex items-center gap-2"><Heart className="w-4 h-4" /> Serving Since 2003</span>
              <span className="flex items-center gap-2"><Award className="w-4 h-4" /> Trusted by Thousands</span>
            </div>
          )}
        </div>
        <div className="hidden lg:flex justify-center">
          <div className="w-full max-w-md bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
            <div className="space-y-4 text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-accent/20 flex items-center justify-center">
                <Shield className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-xl font-bold">Your Medicare, Simplified</h3>
              <p className="text-sm opacity-80">We compare plans from top carriers so you don't have to. Free, unbiased guidance — always.</p>
              <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to={ctaLink}>Start Here</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
