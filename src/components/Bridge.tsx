import Image from "next/image";
import bandImage from "../../public/images/band-studio.jpg";

// The brief's bridge line between the problems and the features, set as a
// full-bleed photo band.
export default function Bridge() {
  return (
    <section className="band" aria-label="Stenslee fixes both leaks">
      <div className="band-media" aria-hidden="true">
        <Image src={bandImage} alt="" fill sizes="100vw" placeholder="blur" />
      </div>
      <div className="manifesto" data-stagger>
        <p className="manifesto-line">Your chairs shouldn&apos;t</p>
        <p className="manifesto-line">depend on luck</p>
        <p className="manifesto-line">or walk-ins.</p>
        <p className="manifesto-line">
          Stenslee fixes <em>both leaks.</em>
        </p>
      </div>
    </section>
  );
}
