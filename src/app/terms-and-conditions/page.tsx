import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/LegalPage";
import { business } from "@/data/business";

const title = "Terms & Conditions";
const description = "The terms that apply when you use this website or request services from FSR Recovery Group.";
const path = "/terms-and-conditions";
const lastUpdated = "14 September 2026";

export const metadata: Metadata = {
  title: { absolute: `${title} | ${business.name}` },
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPageLayout path={path} eyebrow="Legal" title={title} lastUpdated={lastUpdated}>
      <h2>About us</h2>
      <p>
        This website (fsrrecoverygroups.co.uk) is operated by {business.name}, based at{" "}
        {business.addressFull} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). We provide vehicle
        breakdown recovery, roadside assistance, jumpstart, winch-out, accident recovery, tyre-change,
        refuelling and vehicle transporting services. By using this website, or by contacting us to request
        our services, you agree to these terms.
      </p>

      <h2>Website information</h2>
      <p>
        The content on this website is provided for general information about our services and coverage
        area. While we try to keep it accurate and up to date, we do not guarantee that the website is
        complete, error-free or continuously available, and we may update or change it at any time.
      </p>

      <h2>Enquiries and service requests</h2>
      <p>
        You can request our services or ask for a quote by phone, WhatsApp or email using the contact
        details on this website, or via the &ldquo;Get a Free Quote&rdquo; form, which prepares a WhatsApp
        message for you to review and send. Submitting an enquiry — including through the quote form — does
        not itself create a contract between us. A booking is only confirmed once we have discussed your
        requirements with you directly and agreed to carry out the work.
      </p>

      <h2>Availability</h2>
      <p>
        We aim to respond to enquiries as promptly as we reasonably can, but availability depends on
        factors such as our current workload, your location and the nature of the job. We do not guarantee
        a specific response time, or that a vehicle or driver will always be available immediately.
      </p>

      <h2>Quotes and pricing</h2>
      <p>
        We do not publish standard prices on this website — every quote depends on your specific vehicle,
        location, destination and circumstances, and is given to you individually by phone, WhatsApp or
        email before any work begins. We will aim to make any additional costs clear before carrying out
        work; if a job turns out to need something not covered by an initial quote (for example, unexpected
        access difficulties), we will discuss this with you before proceeding wherever reasonably possible.
      </p>

      <h2>Payment</h2>
      <p>
        Payment method and timing are agreed directly with you at the time of booking. This website does
        not display or take payments online.
      </p>
      <p>
        <em>
          Note for the site owner: specific accepted payment methods (e.g. cash, card, bank transfer) and
          timing (e.g. on completion, invoiced) are not stated here as they could not be confirmed from the
          website — let us know if you&rsquo;d like this section made more specific.
        </em>
      </p>

      <h2>Cancellations</h2>
      <p>
        If you need to cancel a booked job, please let us know as soon as possible by phone or WhatsApp.
      </p>
      <p>
        <em>
          Note for the site owner: this website does not currently publish a cancellation policy or fee, so
          none is stated here. Any cancellation terms are agreed directly with you at the time of booking —
          confirm if you would like a standard policy added.
        </em>
      </p>

      <h2>Your responsibilities</h2>
      <p>When you request our services, please:</p>
      <ul>
        <li>Provide accurate information about your location, vehicle and situation, to help us respond appropriately.</li>
        <li>Ensure, so far as you reasonably can, that our driver can safely access your vehicle and that it is safe to approach.</li>
        <li>Remove or secure personal belongings and valuables from the vehicle where possible — we cannot be responsible for items left inside.</li>
        <li>Follow any reasonable safety instructions given by our team, particularly at the roadside or on a motorway.</li>
      </ul>

      <h2>Delays and circumstances outside our control</h2>
      <p>
        We will do our best to reach you and complete work promptly, but timing can be affected by matters
        outside our reasonable control, including traffic, weather, road closures, breakdowns of our own
        vehicles or equipment, or the actions of third parties (such as other emergency services at the
        scene). We will not be liable for delay or failure to perform caused by circumstances outside our
        reasonable control.
      </p>

      <h2>Liability</h2>
      <p>
        Nothing in these terms limits or excludes our liability for death or personal injury caused by our
        negligence, for fraud, or for any other liability that cannot be limited or excluded under UK law.
      </p>
      <p>Subject to that, we will take reasonable care when recovering, loading, transporting and handling your vehicle, but we are not liable for:</p>
      <ul>
        <li>Pre-existing damage, wear and tear, or mechanical faults not caused by us.</li>
        <li>Loss of, or damage to, personal belongings left in the vehicle.</li>
        <li>Indirect or consequential losses (such as loss of use of the vehicle, loss of earnings, or missed appointments), except where this cannot lawfully be excluded.</li>
      </ul>
      <p>
        <em>
          Note for the site owner: please confirm your public liability / goods-in-transit insurance
          arrangements so this section can reference them accurately — cover details are not assumed or
          invented here.
        </em>
      </p>

      <h2>Intellectual property</h2>
      <p>
        The content, design, logo and branding on this website belong to {business.name} or our licensors,
        unless otherwise stated. You may view and print pages for your own personal, non-commercial use,
        but you may not reproduce, copy or reuse any part of this website for other purposes without our
        permission.
      </p>

      <h2>Links to other websites</h2>
      <p>
        This website may link to third-party services (for example, WhatsApp or Google Maps). We are not
        responsible for the content or privacy practices of any third-party sites, and linking to them does
        not imply endorsement.
      </p>

      <h2>Privacy and cookies</h2>
      <p>
        Our use of personal information is described in our <Link href="/privacy-policy">Privacy Policy</Link>,
        and our use of cookies and similar technologies is described in our{" "}
        <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>

      <h2>Governing law and jurisdiction</h2>
      <p>
        These terms are governed by the laws of England and Wales. Any disputes relating to these terms or
        our services will be subject to the exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h2>Contact us</h2>
      <p>
        {business.name}
        <br />
        {business.addressFull}
        <br />
        Phone: <a href={business.tel}>{business.phoneDisplay}</a>
        <br />
        Email: <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>

      <h2>Changes to these terms</h2>
      <p>We may update these terms from time to time. The date at the top of this page shows when they were last updated.</p>
    </LegalPageLayout>
  );
}
