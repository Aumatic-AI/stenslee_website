import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LEGAL } from "@/lib/legal";

export interface LegalSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface LegalPageProps {
  title: string;
  intro: ReactNode;
  summary: ReactNode[];
  sections: LegalSection[];
}

// Shared layout for the legal documents: header, short summary, table of contents and numbered sections.
export default function LegalPage({ title, intro, summary, sections }: LegalPageProps) {
  const toc = (
    <ol>
      {sections.map((s, i) => (
        <li key={s.id}>
          <a href={`#${s.id}`}>
            <span className="legal-toc-num">{i + 1}</span>
            {s.title}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <Nav linkBase="/" />
      <main className="legal">
        <div className="legal-wrap">
          <header className="legal-head">
            <h1 className="display legal-title">{title}</h1>
            <p className="legal-meta">Last updated {LEGAL.lastUpdated}</p>
            <div className="legal-intro">{intro}</div>
          </header>

          <aside className="legal-summary" aria-label="Summary">
            <p className="legal-summary-title">The short version</p>
            <ul>
              {summary.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="legal-summary-note">This summary is here to help you read. The full text below is what applies.</p>
          </aside>

          <details className="legal-toc-mobile">
            <summary>On this page</summary>
            {toc}
          </details>

          <div className="legal-grid">
            <nav className="legal-toc" aria-label="On this page">
              <p className="legal-toc-title">On this page</p>
              {toc}
            </nav>
            <article className="legal-body">
              {sections.map((s, i) => (
                <section key={s.id} id={s.id} className="legal-section">
                  <h2>
                    <span className="legal-num">{i + 1}.</span>
                    {s.title}
                  </h2>
                  {s.body}
                </section>
              ))}
            </article>
          </div>
        </div>
      </main>
      <Footer linkBase="/" />
    </>
  );
}
