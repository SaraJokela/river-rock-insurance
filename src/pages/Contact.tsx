import Layout from "@/components/Layout";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "(916) 865-8352", href: "tel:+19168658352" },
  { icon: Mail, label: "Email", value: "help@plansforhealth.com", href: "mailto:help@plansforhealth.com" },
  { icon: MapPin, label: "Offices", value: "Sacramento & Roseville, CA" },
  { icon: Clock, label: "Hours", value: "Mon–Fri 8am–5pm PST" },
];

const Contact = () => (
  <Layout>
    <section className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="container text-center max-w-2xl mx-auto space-y-4">
        <span className="inline-block bg-accent/20 text-accent-foreground border border-accent/30 text-sm font-medium px-4 py-1.5 rounded-full">
          Get in Touch
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">Contact River Rock Insurance</h1>
        <p className="text-lg opacity-90">We're here to help you find the right Medicare plan. Reach out today — no obligation, ever.</p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">How to Reach Us</h2>
              <p className="text-muted-foreground">Whether you prefer phone, email, or an in-person meeting, we're happy to assist. Fill out the form or use any of the methods below.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <Card key={info.label}>
                  <CardContent className="p-5 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm text-accent hover:underline">{info.value}</a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <LeadCaptureForm heading="Send Us a Message" subheading="Fill out the form below and a licensed agent will get back to you within 24 hours." />
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
