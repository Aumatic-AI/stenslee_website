import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import { LEGAL } from "@/lib/legal";

const TITLE = "Terms of Service — Stenslee";
const DESCRIPTION = "The terms that apply when a tattoo studio and its team use Stenslee.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/terms" },
  openGraph: { type: "website", url: "/terms", siteName: "Stenslee", title: TITLE, description: DESCRIPTION },
};

const mail = <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>;

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "Agreement to these Terms",
    body: (
      <>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) are an agreement between you and{" "}
          <strong>{LEGAL.company}</strong>{" "}(&ldquo;Stenslee&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). They apply
          to the Stenslee website, dashboard and WhatsApp features (together, the &ldquo;Service&rdquo;).
        </p>
        <p>
          &ldquo;You&rdquo; means the tattoo studio or business that creates a Stenslee account (the
          &ldquo;Studio&rdquo;) and each admin or designer the Studio adds (a &ldquo;Team member&rdquo;). If you
          create an account for a business, you confirm that you are authorised to accept these Terms for it.
        </p>
        <p>
          By creating an account or using the Service, you agree to these Terms and to our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>. You must be at least 18 years old to use the Service. If you do
          not agree, do not use the Service.
        </p>
      </>
    ),
  },
  {
    id: "service",
    title: "The Service",
    body: (
      <>
        <p>Stenslee helps tattoo studios to:</p>
        <ul>
          <li>keep a list of clients and the history of their tattoo sessions;</li>
          <li>create tattoo designs with AI, from a description, reference images or an existing tattoo;</li>
          <li>preview a design on a photo of the client&rsquo;s body;</li>
          <li>store designs in a shared studio library; and</li>
          <li>send WhatsApp messages to clients from the Studio&rsquo;s own WhatsApp Business account.</li>
        </ul>
        <p>
          We are always improving Stenslee, so features may be added, changed or removed over time. Some
          features may be labelled as early or beta and may not work perfectly.
        </p>
      </>
    ),
  },
  {
    id: "accounts",
    title: "Accounts and access",
    body: (
      <>
        <ul>
          <li>Give accurate information when you sign up and keep it up to date.</li>
          <li>
            You sign in with a one-time code sent to your mobile number on WhatsApp. Keep your phone and WhatsApp
            account secure and never share your codes.
          </li>
          <li>
            Each login is for one person. An account can be signed in on one device at a time, and signing in on
            a new device signs out the old one.
          </li>
          <li>
            Studio admins decide who joins their Studio and what they can do, and should remove people who no
            longer work with the Studio.
          </li>
          <li>
            The Studio is responsible for everything done through its account and its Team members&rsquo;
            accounts.
          </li>
          <li>Tell us straight away at {mail}{" "}if you think someone has accessed your account without permission.</li>
        </ul>
      </>
    ),
  },
  {
    id: "plans",
    title: "Plans, AI credits and fees",
    body: (
      <>
        <ul>
          <li>
            <strong>Starter plan.</strong>{" "}Stenslee is currently offered free of charge on the Starter plan,
            which includes a set number of AI credits and limits on things such as the number of designers,
            storage and monthly usage.
          </li>
          <li>
            <strong>AI credits.</strong>{" "}Generating images uses credits. Credits have no cash value, cannot be
            transferred or refunded, and are not refilled automatically unless your plan says so. Your credit
            balance is shown in the dashboard.
          </li>
          <li>
            <strong>Upgrades.</strong>{" "}To get more credits or higher limits, contact us. Any paid plan will be
            agreed with you before it starts.
          </li>
          <li>
            <strong>Future pricing.</strong>{" "}If we introduce paid plans, we will tell you the price and terms in
            advance. You will never be charged without agreeing first. Prices exclude applicable taxes.
          </li>
          <li>
            <strong>WhatsApp charges.</strong>{" "}Meta may charge for messages sent from your WhatsApp Business
            account. Those charges are billed by Meta under Meta&rsquo;s terms and are your responsibility.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "your-data",
    title: "Your data and your clients",
    body: (
      <>
        <p>
          <strong>You own your content.</strong>{" "}Everything you add to Stenslee, including client details,
          photos, designs, notes and library files (&ldquo;Your Content&rdquo;), remains yours. You give us a
          limited permission to host, copy, process, transmit and display Your Content only as needed to
          provide, maintain and secure the Service for you, as described in our{" "}
          <Link href="/privacy-policy">Privacy Policy</Link>. We do not sell Your Content.
        </p>
        <p>
          <strong>You are responsible for your clients&rsquo; data.</strong>{" "}For client details and photos you
          add, the Studio is the Data Fiduciary under India&rsquo;s Digital Personal Data Protection Act, 2023,
          and we process that data on your behalf. You must:
        </p>
        <ul>
          <li>tell your clients how you use their data, and have their consent, before adding their details or photos;</li>
          <li>get each client&rsquo;s permission before photographing them or uploading photos of their body;</li>
          <li>
            not add personal data of anyone under 18 unless the law allows it and you have verifiable consent
            from their parent or lawful guardian; and
          </li>
          <li>keep client details accurate, and act on clients&rsquo; requests to correct or delete their data.</li>
        </ul>
      </>
    ),
  },
  {
    id: "whatsapp",
    title: "WhatsApp messaging",
    body: (
      <>
        <p>
          Studio messages are sent from your own WhatsApp Business account, which you connect through Meta.
          When you use this feature, you must:
        </p>
        <ul>
          <li>
            follow the WhatsApp Business Terms of Service, the WhatsApp Business Messaging Policy and any other
            Meta policies that apply;
          </li>
          <li>message only clients who have agreed to receive messages from you, and stop when they ask you to;</li>
          <li>not send spam, misleading or unlawful messages.</li>
        </ul>
        <p>
          Message templates must be approved by Meta before you can send them. Meta may reject templates, limit
          how many messages you can send, or restrict your WhatsApp account. We are not responsible for
          Meta&rsquo;s decisions, availability or charges.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    title: "AI designs and previews",
    body: (
      <>
        <ul>
          <li>
            <strong>Results can be wrong.</strong>{" "}Designs and previews are created by AI. They can be
            inaccurate or unexpected, and similar results may be created for other users.
          </li>
          <li>
            <strong>Previews are illustrations.</strong>{" "}A preview shows how a design might look. The real tattoo
            depends on the artist, the client&rsquo;s skin, placement and healing, and may look different.
          </li>
          <li>
            <strong>Your artists decide.</strong>{" "}Review every design before tattooing. You are responsible for
            the designs you use and the work you do. Stenslee does not give medical, health or skin advice.
          </li>
          <li>
            <strong>Your inputs.</strong>{" "}Only upload images you have the right to use, and photos of people who
            have given you permission.
          </li>
          <li>
            <strong>Ownership.</strong>{" "}As between you and us, you own the designs you create with Stenslee, to
            the extent the law allows. Because AI can produce similar results for others, we cannot promise
            that a design is unique or protected by copyright.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "references",
    title: "Reference images",
    body: (
      <p>
        Reference images found through search, including from Pinterest, belong to their creators. They are
        shown for inspiration. You are responsible for making sure you do not copy another artist&rsquo;s work
        without permission.
      </p>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You must not use the Service to:</p>
        <ul>
          <li>break any law or anyone&rsquo;s rights, including privacy and intellectual property rights;</li>
          <li>upload or create content that is illegal, sexually exploits anyone, promotes violence or hatred, or harasses others;</li>
          <li>add people&rsquo;s data or photos without their permission;</li>
          <li>send spam or unwanted messages;</li>
          <li>share your login with others, or get around plan limits, credits or security measures;</li>
          <li>copy, scrape, resell or reverse engineer the Service, except as the law allows;</li>
          <li>upload malware or interfere with the Service or other users; or</li>
          <li>use the Service to build a competing product.</li>
        </ul>
      </>
    ),
  },
  {
    id: "our-ip",
    title: "Our intellectual property",
    body: (
      <p>
        Stenslee, including its software, design, logo and brand, belongs to us and our licensors. While you
        follow these Terms, we give you a limited, non-exclusive, non-transferable right to use the Service for
        your Studio&rsquo;s business. If you send us feedback or suggestions, we may use them without any
        obligation to you.
      </p>
    ),
  },
  {
    id: "third-party",
    title: "Third-party services",
    body: (
      <p>
        The Service relies on third parties, including Meta (WhatsApp), AI model providers, Pinterest and our
        hosting providers. Their own terms apply to your use of their services, and we are not responsible for
        them. If a third party changes or stops its service, some features of Stenslee may change or stop
        working.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Availability and changes",
    body: (
      <p>
        We work to keep Stenslee running smoothly, but we cannot promise it will always be available or free of
        errors. We may need to pause the Service for maintenance or updates. If we make a change that
        significantly reduces what you can do with the Service, we will tell you in advance where reasonably
        possible.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Suspension and termination",
    body: (
      <>
        <ul>
          <li>
            <strong>You can stop at any time.</strong>{" "}To close your Studio account, email {mail}{" "}from your
            Studio&rsquo;s contact email.
          </li>
          <li>
            <strong>We may suspend or close accounts</strong>{" "}that break these Terms, put others or the Service
            at risk, or where the law requires it. Where reasonable, we will warn you first and give you a chance
            to fix the problem.
          </li>
          <li>
            <strong>What happens after.</strong>{" "}Access to the account ends, and we delete its data as described
            in our <Link href="/privacy-policy#retention">Privacy Policy</Link>. Before closing, you can ask us for a copy of
            your client list and we will provide it where reasonably possible.
          </li>
        </ul>
        <p>
          Sections that by their nature should continue after the account closes, including ownership,
          disclaimers, limitation of liability, indemnity and governing law, continue to apply.
        </p>
      </>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    body: (
      <p>
        The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the fullest extent the law
        allows, we make no warranties of any kind, whether express or implied, including that the Service will
        meet your needs or be uninterrupted or error-free. We do not guarantee any business results, such as
        the number of clients who return or the bookings you receive.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <>
        <p>To the fullest extent the law allows:</p>
        <ul>
          <li>
            we are not liable for any indirect, incidental, special or consequential loss, or for loss of
            profits, revenue, business, goodwill or data; and
          </li>
          <li>
            our total liability for all claims relating to the Service is limited to the amount you paid us for
            the Service in the 12 months before the claim arose, or ₹5,000 if you have not paid us anything.
          </li>
        </ul>
        <p>Nothing in these Terms limits liability that cannot be limited under applicable law.</p>
      </>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: (
      <p>
        You agree to compensate and protect Stenslee from claims, losses and costs (including reasonable legal
        fees) that arise from Your Content, your use of client data or photos without the required consent,
        messages you send through WhatsApp, or your breach of these Terms or the law.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law and disputes",
    body: (
      <p>
        These Terms are governed by the laws of India. If a dispute arises, please contact us first at {mail}{" "}
        and we will try to resolve it informally within 30 days. If it cannot be resolved, the courts at{" "}
        {LEGAL.courtsCity}, India will have exclusive jurisdiction.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    body: (
      <p>
        We may update these Terms from time to time. We will change the &ldquo;Last updated&rdquo; date above
        and, for significant changes, tell Studios by email or in the dashboard before the changes take effect.
        If you keep using the Service after the changes take effect, you accept the updated Terms.
      </p>
    ),
  },
  {
    id: "general",
    title: "General",
    body: (
      <ul>
        <li>These Terms and the Privacy Policy are the whole agreement between you and us about the Service.</li>
        <li>If any part of these Terms cannot be enforced, the rest still applies.</li>
        <li>If we do not enforce a right straight away, we have not given it up.</li>
        <li>
          You may not transfer your account or these Terms without our written consent. We may transfer them as
          part of a merger, acquisition or sale of assets.
        </li>
        <li>We are not responsible for delays or failures caused by events outside our reasonable control.</li>
        <li>We may send you notices by email or in the dashboard.</li>
      </ul>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <>
        <p>Questions about these Terms? Get in touch:</p>
        <dl className="legal-contact">
          <dt>Company</dt>
          <dd>{LEGAL.company}</dd>
          <dt>Email</dt>
          <dd>{mail}</dd>
          <dt>Address</dt>
          <dd>{LEGAL.address}</dd>
          <dt>Grievance Officer</dt>
          <dd>{LEGAL.grievanceOfficer}</dd>
        </dl>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro={
        <p>
          These terms explain the rules for using Stenslee, what you can expect from us, and what we expect from
          you. Please read them carefully.
        </p>
      }
      summary={[
        "Stenslee is a tool for tattoo studios. Use it for your business and follow the law.",
        "Your Studio owns its data, including client details and photos. You're responsible for having your clients' permission.",
        "AI designs and previews are suggestions. Your artists review every design before tattooing.",
        "WhatsApp messages go out from your own WhatsApp Business account and must follow WhatsApp's rules.",
        "Stenslee is free on the Starter plan today. You'll never be charged without agreeing first.",
        "You can stop using Stenslee and close your account at any time.",
      ]}
      sections={sections}
    />
  );
}
