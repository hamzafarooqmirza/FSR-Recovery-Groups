import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/LegalPage";
import { CookieSettingsLink } from "@/components/CookieConsent";
import { business } from "@/data/business";

const title = "Cookie Policy";
const description = "Which cookies and browser storage technologies FSR Recovery Group's website uses, and how to manage your choices.";
const path = "/cookie-policy";
const lastUpdated = "14 September 2026";

export const metadata: Metadata = {
  title: { absolute: `${title} | ${business.name}` },
  description,
  alternates: { canonical: path },
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout path={path} eyebrow="Legal" title={title} lastUpdated={lastUpdated}>
      <h2>What are cookies and similar technologies?</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. Websites can also use
        similar technologies, such as browser &ldquo;local storage&rdquo;, to remember information. This
        policy explains exactly which of these technologies this website uses, and why — we have audited
        the site&rsquo;s code to make sure this list reflects what is actually here, not a generic template.
      </p>

      <h2>Technologies this website uses</h2>

      <h3>Strictly necessary — cookie consent preference</h3>
      <ul>
        <li><strong>What it does:</strong> remembers the choice you make in our cookie banner (for example, &ldquo;Accept All&rdquo; or &ldquo;Reject Non-Essential&rdquo;), so we don&rsquo;t ask you again on every visit and so your choice is respected.</li>
        <li><strong>Technology:</strong> browser local storage (not a traditional cookie).</li>
        <li><strong>Provider:</strong> {business.name} (first-party — stored only in your own browser, never sent to our servers).</li>
        <li><strong>Duration:</strong> until you clear your browser&rsquo;s site data, or change your choice using &ldquo;Cookie Settings&rdquo; in the footer.</li>
        <li><strong>Consent required:</strong> no — this is strictly necessary to operate the cookie banner itself and is exempt from consent requirements under UK PECR.</li>
      </ul>

      <h3>Non-essential — Embedded Maps (Google)</h3>
      <ul>
        <li><strong>What it does:</strong> if enabled, displays an interactive Google Map showing our location, on the homepage and the Areas page.</li>
        <li><strong>Technology:</strong> third-party embedded iframe.</li>
        <li><strong>Provider:</strong> Google.</li>
        <li><strong>Duration:</strong> set by Google, not controlled by us — see Google&rsquo;s own policies for current details, as these can change without notice to us.</li>
        <li><strong>Consent required:</strong> yes. This map does not load, and no related cookies are set, until you accept the &ldquo;Embedded Maps&rdquo; category. If you choose not to enable it, a plain link to view our location on Google Maps is shown instead — that link does not set any cookies through this website.</li>
      </ul>

      <h2>Other third-party resources</h2>
      <p>
        This website loads its icon set (Font Awesome) from a third-party content delivery network
        (cdnjs.cloudflare.com), and its fonts (Poppins and Inter) are provided by Google Fonts, but are
        downloaded and hosted on our own server when the site is built — not loaded live from Google Fonts&rsquo;
        servers when you visit. Based on our review, neither of these sets cookies on your device; as with
        any resource file, your browser does contact the icon CDN in the ordinary course of loading the
        page, in the same way it would for any image or stylesheet, but this is not used by us for tracking
        or profiling.
      </p>

      <h2>What this website does not use</h2>
      <p>This website does not currently use:</p>
      <ul>
        <li>Analytics cookies or services (for example, Google Analytics)</li>
        <li>Advertising or marketing cookies</li>
        <li>Social media tracking pixels</li>
        <li>Any cookie-based tracking beyond what is described above</li>
      </ul>
      <p>
        If this changes in future, we will update this policy and our cookie banner accordingly, and will
        ask for your consent before any new non-essential technology is used.
      </p>

      <h2>Managing your preferences</h2>
      <ul>
        <li>When you first visit, use &ldquo;Accept All&rdquo;, &ldquo;Reject Non-Essential&rdquo; or &ldquo;Manage Preferences&rdquo; in our cookie banner.</li>
        <li>
          Afterwards, click{" "}
          <CookieSettingsLink className="font-semibold text-red underline decoration-red/40 underline-offset-2 hover:text-red-dark" />{" "}
          (also available in the footer of every page) to reopen your preferences and change your choices at any time.
        </li>
        <li>You can also clear cookies and site data using your browser&rsquo;s own settings, which will reset your choice and show the banner again on your next visit.</li>
      </ul>

      <h2>Contact us</h2>
      <p>
        If you have questions about this Cookie Policy, contact us:
        <br />
        {business.name}
        <br />
        {business.addressFull}
        <br />
        Phone: <a href={business.tel}>{business.phoneDisplay}</a>
        <br />
        Email: <a href={`mailto:${business.email}`}>{business.email}</a>
      </p>
    </LegalPageLayout>
  );
}
