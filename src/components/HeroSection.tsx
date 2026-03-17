import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Heart, Award, Phone, CheckCircle } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  highlightWord?: string;
  ctaText?: string;
  ctaLink?: string;
  showBadges?: boolean;
  showStats?: boolean;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  highlightWord,
  ctaText = "Get a Free Quote",
  ctaLink = "/contact",
  showBadges = true,
  showStats = false,
}: HeroSectionProps) => {
  const renderTitle = () => {
    if (!highlightWord) return <>{title}</>;
    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className="text-accent">{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="bg-background">
      <div className="container py-16 md:py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent border border-accent/20 text-sm font-medium px-4 py-1.5 rounded-full">
              <Shield className="w-3.5 h-3.5" />
              {subtitle}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-foreground">
              {renderTitle()}
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">{description}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link to={ctaLink}>{ctaText}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary">
                <a href="tel:+19168658352" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> (916) 865-8352
                </a>
              </Button>
            </div>
            {showBadges && (
              <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent" /> Licensed CA Agent</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent" /> Certified Covered CA</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent" /> No Cost to You</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-accent" /> 20+ Years Experience</span>
              </div>
            )}
          </div>

          {/* Right side - decorative card / image placeholder */}
          <div className="hidden lg:flex justify-center">
            <div className="w-full max-w-md aspect-[4/3] bg-secondary rounded-2xl flex items-center justify-center overflow-hidden relative">
              <div className="text-center space-y-3 p-8">
                <div className="w-20 h-20 mx-auto rounded-full bg-accent/15 flex items-center justify-center">
                  <Heart className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Your Medicare, Simplified</h3>
                <p className="text-sm text-muted-foreground">We compare plans from top carriers so you don't have to. Free, unbiased guidance — always.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        {showStats && (
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "100K+", label: "Quotes Provided", sub: "Across California & Hawaii" },
              { value: "20+", label: "Years Experience", sub: "Since 2003" },
              { value: "50+", label: "Carrier Partners", sub: "Unbiased plan selection" },
              { value: "$0", label: "Cost to You", sub: "Always free guidance" },
            ].map((stat) => (
              <div key={stat.label} className="bg-card border border-border rounded-xl p-4 text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-accent">{stat.value}</div>
                <div className="text-sm font-semibold text-foreground">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.sub}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
