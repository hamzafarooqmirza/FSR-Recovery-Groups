import type { Metadata } from "next";
import Link from "next/link";
import { LegalPageLayout } from "@/components/LegalPage";
import { business } from "@/data/business";

const title = "Privacy Policy";
const description = "How FSR Recovery Group collects, uses and protects your personal information.";
const path = "/privacy-policy";
const lastUpdated = "14 September 2026";

export const metadata: Metadata = {
  title: { absolute: `${title} | ${business.name}` },
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout path={path} eyebrow="Legal" title={title} lastUpdated={lastUpdated}>
      <h2>Who we are</h2>
      <p>
        {business.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) provides vehicle breakdown
        recovery, roadside assistance, jumpstart, winch-out, accident recovery, tyre-change, refuelling
        and vehicle transporting services from our base at {business.addressFull}. This policy explains
        how we handle personal information in connection with this website (fsrrecoverygroups.co.uk) and
        when you contact us by phone, WhatsApp or email.
      </p>
      <p>We are the data controller for the personal information described in this policy.</p>

      <h2>Information we collect</h2>
      <p>
        This website does not have user accounts, a checkout, or a database, and it does not automatically
        collect personal information through any form on the site.
      </p>

      <h3>The &ldquo;Get a Free Quote&rdquo; form</h3>
      <p>
        The details you type into the quote form on this website (for example, your name, vehicle
        make/model, location, destination or any additional details) are used only to prepare a pre-filled
        WhatsApp message. That information is <strong>not sent to or stored by this website</strong> — it
        is only transmitted to WhatsApp, and only if and when you press the button to open WhatsApp and
        send the message. If you close the page without pressing that button, nothing is sent anywhere.
      </p>
      <p>
        If you do send that message, or you contact us directly by phone, WhatsApp or email using the
        details on this site, we then receive whatever information you choose to share with us (for
        example, your name, contact number, vehicle details and location) through that channel, so that we
        can respond to your enquiry and, where you go ahead, provide our services.
      </p>

      <h3>Phone, WhatsApp and email enquiries</h3>
      <ul>
        <li><strong>Phone:</strong> if you call us, we receive your phone number (via caller ID) and anything you tell us during the call, such as your name, location and vehicle details.</li>
        <li><strong>WhatsApp:</strong> if you message us on WhatsApp, we receive your WhatsApp phone number, any profile information you have made visible, and the content of your messages. WhatsApp is provided by Meta/WhatsApp; your use of WhatsApp is also governed by WhatsApp&rsquo;s own privacy policy.</li>
        <li><strong>Email:</strong> if you email us, we receive your email address, any name you provide and the content of your message.</li>
      </ul>

      <h3>Website and technical information</h3>
      <p>
        This website is a static informational website — it does not use analytics, advertising or
        tracking cookies. As with any website, the servers that host this site may keep ordinary technical
        logs (such as IP address, browser type and access times) as part of running and securing the site;
        we do not separately collect, analyse or combine this information ourselves. See our{" "}
        <Link href="/cookie-policy">Cookie Policy</Link> for the specific cookies and browser storage this
        website uses.
      </p>
      <p>
        <em>
          Note for the site owner: please confirm your hosting/deployment provider so this section can name
          it specifically — it is not stated here because it cannot be confirmed from the website content
          itself.
        </em>
      </p>

      <h2>Why we process your information, and our lawful basis</h2>
      <p>Under UK GDPR, we rely on the following lawful bases:</p>
      <ul>
        <li><strong>Responding to your enquiry</strong> and providing information or a quote — legitimate interests (responding to an enquiry you have initiated), and performance of a contract once you go ahead with a booking.</li>
        <li><strong>Arranging and carrying out recovery, breakdown, roadside assistance or towing services</strong> you have requested — performance of a contract, or steps taken at your request before entering into one.</li>
        <li><strong>Keeping basic records</strong> of enquiries and jobs for our own administration and customer service — legitimate interests.</li>
        <li><strong>Complying with our legal obligations</strong> (for example, accounting or tax records) — legal obligation.</li>
      </ul>
      <p>
        We do not use your personal information for marketing, and this website does not use marketing or
        advertising cookies.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To understand and respond to your enquiry.</li>
        <li>To confirm your location, vehicle details and requirements so we can arrange the right assistance.</li>
        <li>To communicate with you about your enquiry or job, using the channel you contacted us on.</li>
        <li>To keep basic business records.</li>
      </ul>

      <h2>Sharing your information</h2>
      <p>We do not sell your personal information. We may share limited information with:</p>
      <ul>
        <li>WhatsApp/Meta, when you choose to contact us via WhatsApp — governed by WhatsApp&rsquo;s own privacy policy.</li>
        <li>Our professional advisers (for example, our accountant), where necessary.</li>
        <li>Any authority we are legally required to share information with (for example, HMRC, or the police in connection with an accident recovery).</li>
      </ul>
      <p>
        <em>
          Note for the site owner: please confirm whether any subcontracted recovery drivers, insurance/
          referral networks, or third-party software (e.g. accounting tools) also receive customer contact
          details, so this section can list them accurately. Nothing beyond the above is assumed.
        </em>
      </p>

      <h2>International transfers</h2>
      <p>
        We do not knowingly transfer personal information outside the UK ourselves. Where you contact us
        via WhatsApp, Meta may process and store data outside the UK as part of operating WhatsApp; this is
        described in WhatsApp&rsquo;s own privacy policy, not controlled by us.
      </p>

      <h2>How long we keep your information</h2>
      <p>
        We keep enquiry and customer information for as long as reasonably necessary to deal with your
        enquiry or provide the service, and afterwards for as long as needed to meet our legal, accounting
        or insurance obligations (financial records are generally required to be kept for around 6 years
        under UK tax rules).
      </p>
      <p>
        <em>
          Note for the site owner: a specific retention schedule for different record types has not been
          set, so only this general position is stated. Please confirm if you would like more specific
          retention periods added.
        </em>
      </p>

      <h2>How we protect your information</h2>
      <p>
        We take reasonable steps to protect the personal information we hold, including limiting who has
        access to enquiry and customer details.
      </p>
      <p>
        <em>
          Note for the site owner: if there are specific security measures you would like listed (for
          example, device passcodes, encrypted storage), let us know and this section can be made more
          specific — none are invented here.
        </em>
      </p>

      <h2>Your rights</h2>
      <p>Under UK GDPR, you have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you.</li>
        <li>Ask us to correct inaccurate information.</li>
        <li>Ask us to delete your information, in certain circumstances.</li>
        <li>Ask us to restrict how we use your information, in certain circumstances.</li>
        <li>Object to our processing of your information, in certain circumstances.</li>
        <li>Ask for your information to be provided to you or transferred to another organisation (data portability), in certain circumstances.</li>
        <li>Withdraw consent at any time, where we rely on consent — this does not affect the lawfulness of processing before you withdrew it.</li>
      </ul>
      <p>To exercise any of these rights, contact us using the details below.</p>

      <h2>Complaints</h2>
      <p>
        If you are unhappy with how we have handled your personal information, please contact us first so
        we can try to put it right. You also have the right to complain to the UK&rsquo;s data protection
        regulator, the Information Commissioner&rsquo;s Office (ICO): <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">ico.org.uk</a>, telephone 0303 123 1113.
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

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date at the top of this page shows when it was
        last updated.
      </p>
    </LegalPageLayout>
  );
}
