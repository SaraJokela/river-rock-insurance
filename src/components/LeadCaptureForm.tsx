import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  message: z.string().trim().max(1000).optional(),
});

interface LeadCaptureFormProps {
  heading?: string;
  subheading?: string;
  className?: string;
  compact?: boolean;
}

const LeadCaptureForm = ({
  heading = "Get Your Free Medicare Quote",
  subheading = "Our licensed agents will help you find the right plan. No obligation, no cost.",
  className = "",
  compact = false,
}: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className={`bg-card rounded-xl shadow-lg p-6 md:p-8 ${className}`}>
      {heading && <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{heading}</h3>}
      {subheading && <p className="text-muted-foreground text-sm mb-6">{subheading}</p>}
      <form onSubmit={handleSubmit} className={compact ? "space-y-3" : "space-y-4"}>
        <div>
          <Input
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <Input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <Input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
        </div>
        {!compact && (
          <Textarea
            placeholder="Tell us about your needs (optional)"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={3}
          />
        )}
        <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
          Get My Free Quote
        </Button>
        <p className="text-xs text-muted-foreground text-center">No spam. No obligation. Just honest advice.</p>
      </form>
    </div>
  );
};

export default LeadCaptureForm;
