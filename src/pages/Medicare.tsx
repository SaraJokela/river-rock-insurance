import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Heart, Pill, CheckCircle } from "lucide-react";

const plans = [
  {
    id: "advantage",
    icon: Shield,
    title: "Medicare Advantage (Part C)",
    desc: "Medicare Advantage plans bundle hospital (Part A) and medical (Part B) coverage into one plan — often including extras like dental, vision, hearing, and prescription drugs.",
    benefits: ["Low or $0 monthly premiums", "All-in-one coverage", "Extra benefits (dental, vision, fitness)", "Out-of-pocket maximum protection"],
  },
  {
    id: "supplement",
    icon: Heart,
    title: "Medicare Supplement (Medigap)",
    desc: "Medigap policies help cover the out-of-pocket costs that Original Medicare doesn't — like copayments, coinsurance, and deductibles. See any doctor who accepts Medicare.",
    benefits: ["Predictable healthcare costs", "No network restrictions", "Guaranteed renewable", "Travel emergency coverage"],
  },
  {
    id: "partd",
    icon: Pill,
    title: "Medicare Part D",
    desc: "Medicare Part D provides prescription drug coverage through private insurance plans. Reduce your medication costs with plans tailored to the drugs you take.",
    benefits: ["Lower prescription costs", "Coverage at your pharmacy", "Catastrophic coverage built-in", "Extra help for low-income enrollees"],
  },
];

const Medicare = () => (
  <Layout>
    <HeroSection
      subtitle="Medicare Made Simple"
      title="Understanding Your Medicare Options"
      description="Choosing the right Medicare plan doesn't have to be overwhelming. We break down your options so you can make an informed decision."
      ctaText="Compare Plans Now"
    />

    <section className="py-16 md:py-24">
      <div className="container space-y-16">
        {plans.map((plan) => (
          <div key={plan.id} id={plan.id} className="scroll-mt-24">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <plan.icon className="w-6 h-6 text-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{plan.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{plan.desc}</p>
              </div>
              <Card>
                <CardContent className="p-6 space-y-3">
                  <h4 className="font-bold text-foreground">Key Benefits</h4>
                  {plan.benefits.map((b) => (
                    <div key={b} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                      <span className="text-muted-foreground">{b}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-xl mx-auto">
        <LeadCaptureForm heading="Not Sure Which Plan Is Right for You?" subheading="Talk to a licensed Medicare agent. We'll compare plans and find the best fit — at no cost to you." />
      </div>
    </section>
  </Layout>
);

export default Medicare;
