# Email diagnosis and fix: lead form emails

## Diagnosis

There is no broken email connection — there is no email sending in the project at all.

What the check found:
- No backend exists in this project (no Lovable Cloud / server functions), so nothing can send email.
- No email connector is linked to this project. Your workspace has three Gmail connections and one Search Console connection, but none are linked here.
- The quote/contact form (`src/components/LeadCaptureForm.tsx`) validates the input and then only shows a success toast. Submissions are discarded — they are never stored or emailed.

So every "Get My Free Quote" and contact-form submission since launch produced a confirmation message to the visitor and nothing on your end.

## Fix

Wire real lead delivery, using Lovable's built-in email (your own sender domain, no external account):

1. Enable Lovable Cloud so the site has a backend that can store leads and send mail.
2. Store every submission in a `leads` table (name, email, phone, message, page it came from, timestamp) so a lead is never lost even if an email fails.
3. Set up the sender email domain. This needs a domain you own; you'll complete a short setup dialog and add the DNS records it shows you.
4. Send two emails per submission:
   - Internal notification to help@plansforhealth.com with the lead's details.
   - Confirmation email to the visitor, branded to match the site (heritage red accent, navy primary), telling them a licensed agent will reach out within 24 hours.
5. Update the form so it reports real success/failure: a spinner while sending, the existing success toast only after the lead is saved, and an error toast with the phone number as a fallback if it fails.

## Technical notes

- Enable Cloud, then `leads` table migration with GRANTs: `INSERT` for `anon` and `authenticated` (public form), `ALL` for `service_role`; no public `SELECT` so lead data is not readable from the browser.
- Email infra via the built-in email tooling: domain setup, queue infra, then transactional templates in `supabase/functions/_shared/transactional-email-templates/` (`lead-notification`, `lead-confirmation`) registered in `registry.ts`.
- New edge function `submit-lead`: re-validates with Zod server-side, inserts the row with the service-role client, then invokes `send-transactional-email` twice with idempotency keys derived from the lead id.
- `LeadCaptureForm` gains a `source` prop (home / medicare / contact / city pages) passed through so you can see which page each lead came from.
- Gmail connectors are left untouched; built-in email is the better fit for site notifications and keeps deliverability tied to your own domain.

## Assumption

If you'd rather have leads delivered through one of your connected Gmail accounts instead of a verified sender domain, say so and I'll swap step 3/4 for that.
