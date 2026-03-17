import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Heart } from "lucide-react";

const stats = [
  { icon: Shield, label: "Years in Business", value: "20+" },
  { icon: Users, label: "Clients Served", value: "5,000+" },
  { icon: Award, label: "Carrier Partners", value: "30+" },
  { icon: Heart, label: "States Served", value: "2" },
];

const About = () => (
  <Layout>
    <HeroSection
      subtitle="Our Story"
      title="About River Rock Insurance Services"
      description="Since 2003, we've been helping Californians and Hawaii residents navigate Medicare with honest, personalized advice."
      ctaText="Meet Our Team"
      ctaLink="/contact"
    />

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s) => (
            <Card key={s.label} className="text-center">
              <CardContent className="p-6 space-y-2">
                <div className="w-12 h-12 mx-auto rounded-lg bg-accent/10 flex items-center justify-center">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl font-extrabold text-foreground">{s.value}</div>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            River Rock Insurance Services was founded with a simple goal: make Medicare understandable. We believe every person deserves clear, honest guidance when choosing their health insurance — without pressure or hidden agendas.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As an independent brokerage, we represent multiple carriers, which means we work for you — not the insurance companies. Our licensed agents compare plans side-by-side to find the coverage that fits your health needs and budget.
          </p>
          <h3 className="text-xl font-bold text-foreground pt-4">What Makes Us Different</h3>
          <p className="text-muted-foreground leading-relaxed">
            We're not a call center. We're your neighbors in Sacramento, Roseville, and Hawaii. When you call River Rock, you talk to a real person who knows the local healthcare networks, understands the carriers, and genuinely cares about getting you the right plan.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our service is always free to you — we're compensated by the insurance carriers, so there's never a fee for our advice or enrollment help.
          </p>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-xl mx-auto">
        <LeadCaptureForm heading="Let's Talk About Your Medicare Options" subheading="Reach out today — we'd love to help you find the right plan." />
      </div>
    </section>
  </Layout>
);

export default About;
