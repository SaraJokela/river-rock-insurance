import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const cities = [
  { name: "Sacramento", to: "/sacramento", desc: "Medicare guidance in California's capital city. Serving Sacramento County and surrounding areas." },
  { name: "Roseville", to: "/roseville", desc: "Local Medicare support for Roseville, Rocklin, Lincoln, and Placer County residents." },
];

const California = () => (
  <Layout>
    <HeroSection
      subtitle="California Medicare Experts"
      title="Medicare Insurance in California"
      description="River Rock Insurance has helped California residents find the right Medicare plans since 2003. We serve Sacramento, Roseville, and surrounding communities."
    />

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Your Local California Medicare Brokerage</h2>
          <p className="text-muted-foreground leading-relaxed">
            With over 20 years of experience in the California Medicare market, River Rock Insurance Services understands the unique healthcare needs of our communities. We partner with top-rated carriers to provide unbiased plan comparisons — at no cost to you.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're turning 65, qualifying for Medicare due to a disability, or reviewing your current coverage during Annual Enrollment, our licensed agents are here to help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {cities.map((city) => (
            <Card key={city.name} className="group hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{city.name}</h3>
                <p className="text-sm text-muted-foreground">{city.desc}</p>
                <Link to={city.to} className="inline-flex items-center text-sm font-medium text-accent hover:underline gap-1">
                  View {city.name} Medicare Services <ArrowRight className="w-3 h-3" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-secondary">
      <div className="container max-w-xl mx-auto">
        <LeadCaptureForm heading="Get California Medicare Help Today" subheading="Connect with a local licensed agent who knows the California Medicare landscape." />
      </div>
    </section>
  </Layout>
);

export default California;
