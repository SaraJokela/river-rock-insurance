import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Users, MapPin, Heart, CheckCircle, ArrowRight, Pill } from "lucide-react";

const services = [
  { icon: Shield, title: "Medicare Advantage", desc: "All-in-one plans combining hospital, medical, and often prescription drug coverage.", to: "/medicare#advantage" },
  { icon: Heart, title: "Medicare Supplement", desc: "Fill the gaps in Original Medicare with predictable out-of-pocket costs.", to: "/medicare#supplement" },
  { icon: Pill, title: "Medicare Part D", desc: "Prescription drug coverage that helps reduce your medication costs.", to: "/medicare#partd" },
  { icon: Users, title: "Individual & Family", desc: "Health insurance solutions for individuals and families of all sizes.", to: "/contact" },
];

const locations = [
  { name: "Sacramento, CA", to: "/sacramento", desc: "Personalized Medicare guidance in the state capital." },
  { name: "Roseville, CA", to: "/roseville", desc: "Serving the Roseville and Placer County communities." },
  { name: "Hawaii", to: "/hawaii", desc: "Medicare plans tailored for island living." },
];

const Index = () => (
  <Layout>
    <HeroSection
      subtitle="California & Hawaii"
      title="Expert Medicare Guidance. Always Free."
      highlightWord="Guidance."
      description="River Rock Insurance has helped thousands of Californians navigate Medicare since 2003. Licensed agents. Zero cost. Best rates guaranteed."
      showStats
    />

    {/* Services */}
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Medicare & Health Insurance Services</h2>
          <p className="text-muted-foreground">We represent top-rated carriers to bring you unbiased plan comparisons — at no cost to you.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="group hover:shadow-md transition-shadow border-border/50">
              <CardContent className="p-6 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link to="/medicare">Learn More About Medicare <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Why River Rock Insurance?</h2>
            <div className="space-y-4">
              {[
                { title: "20+ Years of Experience", desc: "Since 2003, we've helped thousands navigate Medicare enrollment." },
                { title: "100% Free Service", desc: "Our service costs you nothing. We're paid by the insurance carriers." },
                { title: "Local & Personal", desc: "We live and work in your community — Sacramento, Roseville, and Hawaii." },
                { title: "Unbiased Guidance", desc: "We represent multiple carriers, so we find what's best for you — not us." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <LeadCaptureForm />
        </div>
      </div>
    </section>

    {/* Locations */}
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Serving Communities Across Two States</h2>
          <p className="text-muted-foreground">Local knowledge meets national carrier access. Find Medicare help near you.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Card key={loc.name} className="group hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{loc.name}</h3>
                <p className="text-sm text-muted-foreground">{loc.desc}</p>
                <Link to={loc.to} className="inline-flex items-center text-sm font-medium text-accent hover:underline gap-1">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container text-center max-w-2xl mx-auto space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Ready to Find the Right Medicare Plan?</h2>
        <p className="opacity-90">Talk to a licensed agent today. It's free, fast, and there's zero obligation.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Link to="/contact">Get Your Free Quote</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <a href="tel:+19168658352">Call (916) 865-8352</a>
          </Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
