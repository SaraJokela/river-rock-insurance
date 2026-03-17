import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { CheckCircle } from "lucide-react";

const Roseville = () => (
  <Layout>
    <HeroSection
      subtitle="Roseville Medicare Specialists"
      title="Medicare Insurance in Roseville, CA"
      description="Serving Roseville, Rocklin, Lincoln, and the greater Placer County area with personalized Medicare guidance since 2003."
    />

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Roseville & Placer County Medicare Experts</h2>
            <p className="text-muted-foreground leading-relaxed">
              River Rock Insurance Services is proud to serve the Roseville community. With access to Sutter Roseville Medical Center, Kaiser Permanente, and Adventist Health, we match you with Medicare plans that fit your healthcare providers and budget.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We help residents throughout Placer County — including Rocklin, Lincoln, Granite Bay, Loomis, and Auburn — compare and enroll in the best Medicare plans available.
            </p>
            <div className="space-y-3">
              <h4 className="font-bold text-foreground">Roseville Medicare Services Include:</h4>
              {["Medicare Advantage plan comparison", "Medicare Supplement enrollment", "Part D prescription drug plans", "Annual Enrollment Period reviews", "Special Enrollment assistance", "Small Business health plans"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
          <LeadCaptureForm heading="Get Your Roseville Medicare Quote" subheading="A local Placer County agent will review your options — free and no obligation." />
        </div>
      </div>
    </section>
  </Layout>
);

export default Roseville;
