import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { CheckCircle } from "lucide-react";

const Sacramento = () => (
  <Layout>
    <HeroSection
      subtitle="Sacramento Medicare Specialists"
      title="Medicare Insurance in Sacramento, CA"
      description="River Rock Insurance Services provides personalized Medicare guidance to Sacramento County residents. Compare plans from top carriers — free of charge."
    />

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Sacramento's Trusted Medicare Advisors</h2>
            <p className="text-muted-foreground leading-relaxed">
              As Sacramento's local Medicare brokerage, we understand the healthcare landscape of California's capital. From UC Davis Medical Center to Sutter Health and Dignity Health networks, we help you choose a plan that works with your preferred doctors and hospitals.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you live in East Sacramento, Midtown, Natomas, Elk Grove, or Rancho Cordova, our licensed agents provide in-person and virtual consultations to fit your schedule.
            </p>
            <div className="space-y-3">
              <h4 className="font-bold text-foreground">Sacramento Medicare Services Include:</h4>
              {["Medicare Advantage plan comparison", "Medicare Supplement enrollment", "Part D prescription drug plans", "Annual Enrollment Period reviews", "Special Enrollment assistance", "Individual & Family plans"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
          <LeadCaptureForm heading="Get Your Sacramento Medicare Quote" subheading="A local agent will review your options — free, fast, and no obligation." />
        </div>
      </div>
    </section>
  </Layout>
);

export default Sacramento;
