import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { CheckCircle } from "lucide-react";

const Hawaii = () => (
  <Layout>
    <HeroSection
      subtitle="Hawaii Medicare Specialists"
      title="Medicare Insurance in Hawaii"
      description="River Rock Insurance Services brings over 20 years of Medicare expertise to the Aloha State. Find the right plan for island living."
    />

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Medicare Plans for Hawaii Residents</h2>
            <p className="text-muted-foreground leading-relaxed">
              Hawaii's healthcare system is unique, and your Medicare plan should reflect that. River Rock Insurance understands the island healthcare networks — from Queen's Medical Center to Kaiser Permanente Hawaii and HMSA — and helps you find the right fit.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're on Oahu, Maui, Big Island, or Kauai, our licensed agents provide personalized Medicare consultations by phone and video.
            </p>
            <div className="space-y-3">
              <h4 className="font-bold text-foreground">Hawaii Medicare Services Include:</h4>
              {["Medicare Advantage plan comparison", "Medicare Supplement (Medigap) enrollment", "Part D prescription drug plans", "Hawaii-specific carrier knowledge", "Virtual consultations across all islands", "Individual & Family health plans"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0" /> {item}
                </div>
              ))}
            </div>
          </div>
          <LeadCaptureForm heading="Get Your Hawaii Medicare Quote" subheading="Find the best Medicare plan for your island — free guidance from a licensed agent." />
        </div>
      </div>
    </section>
  </Layout>
);

export default Hawaii;
