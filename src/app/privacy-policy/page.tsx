import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import { LEGAL } from "@/lib/legal";
import { DASHBOARD_URL } from "@/lib/site";

const TITLE = "Privacy Policy — Stenslee";
const DESCRIPTION =
  "How Stenslee collects, uses, shares and protects personal data, and the rights you have over it.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/privacy-policy" },
  openGraph: { type: "website", url: "/privacy-policy", siteName: "Stenslee", title: TITLE, description: DESCRIPTION },
};

const dashboardHost = DASHBOARD_URL.replace(/^https?:\/\//, "");
const mail = <a href={`mailto:${LEGAL.email}`}>{LEGAL.email}</a>;

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          Stenslee is operated by <strong>{LEGAL.company}</strong>, {LEGAL.address} (&ldquo;Stenslee&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;). Stenslee is software for tattoo studios. It helps studios manage
          their clients, create tattoo designs with AI, preview designs on the body, and message clients on
          WhatsApp.
        </p>
        <p>
          This policy applies to our website, the Stenslee dashboard at {dashboardHost}, and the WhatsApp
          features we provide. In this policy:
        </p>
        <ul>
          <li><strong>Studio</strong>{" "}means a business that uses Stenslee.</li>
          <li><strong>Team member</strong>{" "}means an admin or designer a Studio adds to its account.</li>
          <li><strong>Client</strong>{" "}means a Studio&rsquo;s customer whose details the Studio adds to Stenslee.</li>
          <li><strong>Client Data</strong>{" "}means personal data about Clients that a Studio adds.</li>
        </ul>
      </>
    ),
  },
  {
    id: "our-role",
    title: "Our role: Studio data and Client Data",
    body: (
      <>
        <p>We handle personal data in two different roles:</p>
        <ul>
          <li>
            <strong>Studio and team member data.</strong>{" "}We decide how and why this data is processed. Under
            India&rsquo;s Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;), we are the Data
            Fiduciary for it, and this policy explains how we handle it.
          </li>
          <li>
            <strong>Client Data.</strong>{" "}The Studio decides which Clients to add and why. The Studio is the Data
            Fiduciary and we are its Data Processor: we process Client Data only on the Studio&rsquo;s behalf and
            only to provide Stenslee to that Studio.
          </li>
        </ul>
        <div className="legal-note">
          <p>
            <strong>If you are a Client of a Studio,</strong>{" "}the Studio is responsible for your data and its own
            privacy notice applies. Please contact the Studio first. You can also write to us and we will help
            the Studio respond (see <a href="#your-rights">Your rights</a>).
          </p>
        </div>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <h3>About Studios and team members</h3>
        <ul>
          <li><strong>Studio details:</strong>{" "}studio name and contact email, given when you sign up.</li>
          <li>
            <strong>Team member details:</strong>{" "}name, mobile number with country code, role (admin or
            designer) and, if added, a profile photo.
          </li>
          <li>
            <strong>Sign-in information:</strong>{" "}we send one-time login codes to your mobile number on
            WhatsApp. We record when you last signed in and which session is active, because each account can
            be signed in on one device at a time.
          </li>
          <li>
            <strong>WhatsApp connection details:</strong>{" "}if an admin connects the Studio&rsquo;s WhatsApp
            Business account, Meta gives us the account and phone number identifiers, the display phone number,
            and an access token that lets Stenslee send messages for the Studio. We store the token encrypted.
          </li>
          <li>
            <strong>Usage information:</strong>{" "}which features are used (for example, designs generated or
            reference searches made), the AI credit balance and plan limits.
          </li>
          <li>
            <strong>Messages to us:</strong>{" "}if you contact us, for example for support or to upgrade your plan,
            we keep that conversation.
          </li>
        </ul>

        <h3>Client Data that Studios add</h3>
        <ul>
          <li>
            <strong>Client details:</strong>{" "}name and mobile number. Before a Client is added, we confirm the
            number by sending the Client a one-time code on WhatsApp.
          </li>
          <li>
            <strong>Photos:</strong>{" "}reference images, photos of the part of the body where a tattoo will go,
            and photos of existing tattoos for cover-ups or reworks.
          </li>
          <li>
            <strong>Design information:</strong>{" "}descriptions, styles, colours, placement notes, refinement
            instructions, generated designs and previews, and the history of each design session, including
            which team member handled it.
          </li>
          <li>
            <strong>WhatsApp message records:</strong>{" "}for each message a Studio sends, the template used, the
            recipient number and the delivery status (sent, delivered, read or failed). We do not store the
            content of Clients&rsquo; replies or the Studio&rsquo;s WhatsApp chat history.
          </li>
        </ul>

        <h3>About website visitors</h3>
        <p>
          Our website does not use analytics, advertising pixels or cookies, and it has no forms. Like any
          website, our hosting provider processes technical data such as your IP address and browser type to
          deliver pages and keep them secure.
        </p>

        <h3>What we don&rsquo;t collect</h3>
        <p>
          We do not collect payment card details (Stenslee does not take payments today), government
          identity numbers or your precise location. The camera is used only when a team member chooses to
          take a photo inside Stenslee.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use information",
    body: (
      <>
        <p>We use personal data only for the purposes below:</p>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Purpose</th>
                <th>Data used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Create and run your Studio account</td>
                <td>Studio details, team member details</td>
              </tr>
              <tr>
                <td>Sign you in securely</td>
                <td>Mobile number, one-time codes, session details</td>
              </tr>
              <tr>
                <td>Manage clients and verify their numbers</td>
                <td>Client name and mobile number, verification codes</td>
              </tr>
              <tr>
                <td>Create tattoo designs and previews</td>
                <td>Descriptions, styles, instructions, photos and reference images</td>
              </tr>
              <tr>
                <td>Send WhatsApp messages for your Studio</td>
                <td>WhatsApp connection details, Client names and numbers, message templates</td>
              </tr>
              <tr>
                <td>Run plans, AI credits and limits</td>
                <td>Usage information</td>
              </tr>
              <tr>
                <td>Provide support and service messages</td>
                <td>Contact details, messages to us</td>
              </tr>
              <tr>
                <td>Keep Stenslee secure and prevent misuse</td>
                <td>Sign-in information, usage information, technical logs</td>
              </tr>
              <tr>
                <td>Meet legal obligations</td>
                <td>Any data the law requires us to keep or disclose</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>We do not sell personal data</strong>, use it for advertising or build marketing profiles. We
          do not use Client Data or photos to train AI models.
        </p>
        <p>
          We process Studio and team member data to provide the service you sign up for, with the consent you
          give when you create an account. You can withdraw consent at any time by closing your account (see{" "}
          <a href="#delete-data">Deleting your data</a>). Withdrawing consent does not affect processing that
          happened before. Studios are responsible for having a lawful basis, normally consent, to add their
          Clients and Clients&rsquo; photos and to message them.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    title: "AI features",
    body: (
      <>
        <p>
          To create designs and previews, Stenslee sends the content needed for each request to AI providers:
          the description, style and other instructions, and the images involved. Depending on the feature,
          this can include reference images, the chosen design and, for previews and reworks, the photo of the
          body area or existing tattoo.
        </p>
        <ul>
          <li>Image generation runs through KIE.ai, which provides access to image models from OpenAI and Google.</li>
          <li>&ldquo;Enhance with AI&rdquo; sends only the description text and style to OpenAI.</li>
        </ul>
        <p>
          These providers process the content to return results to us, under their own terms. We do not use
          this content to train AI models. AI results can be inaccurate. See our{" "}
          <Link href="/terms#ai">Terms of Service</Link>{" "}for how designs and previews should be used.
        </p>
      </>
    ),
  },
  {
    id: "whatsapp",
    title: "WhatsApp",
    body: (
      <>
        <p>Stenslee uses the WhatsApp Business Platform provided by Meta:</p>
        <ul>
          <li>
            <strong>Login and verification codes</strong>{" "}are sent from Stenslee&rsquo;s WhatsApp number to the
            team member&rsquo;s or Client&rsquo;s mobile number.
          </li>
          <li>
            <strong>Studio messages</strong>{" "}are sent from the Studio&rsquo;s own WhatsApp Business account once
            an admin connects it. The Studio chooses the message templates and the recipients.
          </li>
          <li>
            <strong>Connecting WhatsApp</strong>{" "}opens Meta&rsquo;s sign-in window inside the dashboard. That
            sign-in is handled by Meta under Meta&rsquo;s own policies.
          </li>
        </ul>
        <p>
          Meta processes phone numbers and message content to deliver messages, under the WhatsApp Business
          terms and Meta&rsquo;s privacy policy. Replies from Clients go to the Studio&rsquo;s WhatsApp. Stenslee
          only receives delivery status updates and does not store replies or chat history.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How we share information",
    body: (
      <>
        <p>We share personal data only as described here.</p>
        <ul>
          <li>
            <strong>Within a Studio.</strong>{" "}Admins can see all of their Studio&rsquo;s Clients and design
            sessions. Designers see the sessions they handled. Studios cannot see each other&rsquo;s data.
          </li>
          <li>
            <strong>Service providers.</strong>{" "}We use the providers below to run Stenslee. They may use the data
            only to provide their services to us.
          </li>
        </ul>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Provider</th>
                <th>What they do</th>
                <th>Data involved</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Supabase</td>
                <td>Database, sign-in and file storage</td>
                <td>Studio, team member and Client Data</td>
              </tr>
              <tr>
                <td>Vercel</td>
                <td>Hosting for the Stenslee dashboard</td>
                <td>Data passing through the dashboard, technical logs</td>
              </tr>
              <tr>
                <td>Meta (WhatsApp Business Platform)</td>
                <td>Delivers login codes and Studio messages; sign-in for connecting WhatsApp</td>
                <td>Mobile numbers, codes, message templates and their details, WhatsApp account details</td>
              </tr>
              <tr>
                <td>KIE.ai (OpenAI and Google image models)</td>
                <td>Creates tattoo designs and previews</td>
                <td>Instructions and images for each design request</td>
              </tr>
              <tr>
                <td>OpenAI</td>
                <td>Improves design descriptions</td>
                <td>Description text and style</td>
              </tr>
              <tr>
                <td>Pinterest</td>
                <td>Reference image search</td>
                <td>The search words you type; result images load from Pinterest</td>
              </tr>
              <tr>
                <td>Google Fonts and Fontsource</td>
                <td>Fonts for text tattoo designs</td>
                <td>Your device&rsquo;s IP address when fonts load</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul>
          <li>
            <strong>Authorised Stenslee staff.</strong>{" "}A small number of our team can access Studio accounts,
            team member and Client records, and design sessions to provide support, manage plans and credits,
            and keep Stenslee secure.
          </li>
          <li>
            <strong>Legal reasons.</strong>{" "}We may disclose data to comply with the law, a court order or a
            valid request from a government authority, or to protect the rights, safety and property of
            Stenslee, our users or others.
          </li>
          <li>
            <strong>Business changes.</strong>{" "}If Stenslee is part of a merger, acquisition or sale of assets,
            data may be transferred under the protections of this policy. We will tell you before that happens.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "transfers",
    title: "Where data is processed",
    body: (
      <p>
        Our service providers may store or process data in countries outside India, including the United
        States. We use providers that protect data with security measures and contractual commitments
        consistent with this policy. We will not transfer personal data to any country or territory that the
        Government of India restricts under the DPDP Act.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep data",
    body: (
      <>
        <div className="legal-table-wrap">
          <table className="legal-table">
            <thead>
              <tr>
                <th>Data</th>
                <th>How long we keep it</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Studio and team member data</td>
                <td>
                  While the Studio&rsquo;s account is active. When a team member is removed, their name, number
                  and photo stay linked to the sessions they handled so the Studio&rsquo;s records stay accurate,
                  until the Studio account is deleted or the Studio asks us to remove them.
                </td>
              </tr>
              <tr>
                <td>Client records</td>
                <td>Until the Studio deletes them, asks us to delete them, or closes its account.</td>
              </tr>
              <tr>
                <td>Design sessions, photos and library files</td>
                <td>
                  Until the Studio deletes them. Deleted items move to Recently Deleted and are permanently
                  removed after the Studio&rsquo;s retention period (30 days on the Starter plan), unless
                  restored first.
                </td>
              </tr>
              <tr>
                <td>Verification codes and unfinished sign-ups</td>
                <td>Codes expire after 10 minutes. We delete codes and unfinished sign-up details within 30 days.</td>
              </tr>
              <tr>
                <td>WhatsApp message records</td>
                <td>While the Studio&rsquo;s account is active.</td>
              </tr>
              <tr>
                <td>Technical logs</td>
                <td>For a limited period, for security and troubleshooting.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          When a Studio account is closed, we delete or anonymise its account data and Client Data within 90
          days, unless we must keep some of it to comply with the law, resolve disputes or enforce our
          agreements.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "How we protect data",
    body: (
      <>
        <ul>
          <li>Data travelling between your device and Stenslee is encrypted in transit (HTTPS).</li>
          <li>Our database provider encrypts stored data at rest.</li>
          <li>WhatsApp access tokens are additionally encrypted with AES-256.</li>
          <li>
            Each Studio&rsquo;s data is kept separate by database access rules, and designers only see the
            sessions they handled.
          </li>
          <li>
            Team members sign in with one-time codes instead of passwords, and each account can be signed in on
            one device at a time.
          </li>
          <li>Access by Stenslee staff is limited to people who need it to do their job.</li>
        </ul>
        <p>
          No system is completely secure. If a personal data breach affects you, we will inform you and the
          Data Protection Board of India as the law requires.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Subject to applicable law, you have the right to:</p>
        <ul>
          <li>get a summary of the personal data we hold about you and how we process it;</li>
          <li>correct, complete or update your personal data;</li>
          <li>have your personal data erased;</li>
          <li>withdraw your consent;</li>
          <li>nominate another person to exercise these rights if you die or become unable to do so; and</li>
          <li>have your grievances addressed.</li>
        </ul>
        <p>
          Team members can update their name and photo in Settings, and Studio admins can manage team members
          and Client details in the dashboard. For anything else, email {mail}{" "}and tell us the mobile number or
          email linked to your account. We may need to verify your identity before acting on a request. We
          respond within 30 days.
        </p>
        <p>
          <strong>If you are a Client of a Studio,</strong>{" "}please contact the Studio first, because it controls
          your data. You can also write to us and we will pass your request to the Studio and help it respond.
        </p>
      </>
    ),
  },
  {
    id: "delete-data",
    title: "Deleting your data",
    body: (
      <>
        <p>You can delete data from Stenslee in these ways:</p>
        <ul>
          <li>
            <strong>Close a Studio account:</strong>{" "}an admin emails {mail}{" "}from the Studio&rsquo;s contact email
            asking us to close the account. We confirm the request and delete the data as described in{" "}
            <a href="#retention">How long we keep data</a>.
          </li>
          <li>
            <strong>Remove a team member:</strong>{" "}a Studio admin can remove a team member under Designers. To
            have their details erased completely, email us.
          </li>
          <li>
            <strong>Delete Client information:</strong>{" "}Studios can delete design sessions in the dashboard. To
            delete a Client record, the Studio can email us. Clients can contact their Studio or email us.
          </li>
          <li>
            <strong>Disconnect WhatsApp and Facebook data:</strong>{" "}an admin can disconnect WhatsApp in Stenslee
            under WhatsApp, which removes the connection details we store. You can also remove Stenslee from
            your Facebook account under Settings &amp; privacy &rarr; Business integrations. To delete any other
            data we received through Meta, email {mail}{" "}with the subject &ldquo;Data deletion request&rdquo;.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and browser storage",
    body: (
      <>
        <ul>
          <li><strong>Website:</strong>{" "}we do not use cookies or tracking.</li>
          <li>
            <strong>Dashboard:</strong>{" "}we use one essential cookie to keep you signed in. It is required for
            the dashboard to work and is not used for tracking.
          </li>
          <li>
            <strong>Browser storage:</strong>{" "}the dashboard saves the design session you are working on in your
            browser&rsquo;s local storage so you don&rsquo;t lose your work. This can include the Client&rsquo;s
            name and mobile number. It stays on that device until the browser data is cleared, so we recommend
            team members use their own devices and clear browser data on shared ones.
          </li>
          <li>
            <strong>Meta:</strong>{" "}when an admin connects WhatsApp, Meta&rsquo;s sign-in script loads and may set
            its own cookies under Meta&rsquo;s cookie policy.
          </li>
        </ul>
        <p>We do not use advertising or analytics cookies.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Stenslee is a tool for businesses. Team members must be at least 18 years old. Studios must not add
        personal data of anyone under 18 unless the law allows it and they have verifiable consent from the
        child&rsquo;s parent or lawful guardian. If we learn that a child&rsquo;s data was added without that
        consent, we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy as Stenslee changes or the law requires. We will change the &ldquo;Last
        updated&rdquo; date above and, for significant changes, tell Studios by email or in the dashboard before
        the changes take effect.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us and Grievance Officer",
    body: (
      <>
        <p>For questions, requests or complaints about your personal data, contact our Grievance Officer:</p>
        <dl className="legal-contact">
          <dt>Grievance Officer</dt>
          <dd>{LEGAL.grievanceOfficer}</dd>
          <dt>Email</dt>
          <dd>{mail}</dd>
          <dt>Address</dt>
          <dd>{LEGAL.company}, {LEGAL.address}</dd>
        </dl>
        <p>
          We will acknowledge your message and aim to resolve it within 30 days. If you are not satisfied with
          our response, you may complain to the Data Protection Board of India under the DPDP Act.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro={
        <p>
          This policy explains what personal data Stenslee collects, why we collect it, who we share it with,
          and the choices and rights you have.
        </p>
      }
      summary={[
        "We collect only what we need to run Stenslee: Studio and team member details, and the Client details and photos Studios choose to add.",
        "Studios own their Client Data. We process it on their behalf and only to provide Stenslee.",
        "We don't sell personal data or use it for advertising.",
        "Photos and design notes are sent to AI providers only to create designs and previews, never to train AI models.",
        "WhatsApp messages are delivered by Meta. We don't store Clients' replies or chat history.",
        "Our website uses no analytics or advertising cookies.",
        "You can ask us to access, correct or delete your data at any time.",
      ]}
      sections={sections}
    />
  );
}
