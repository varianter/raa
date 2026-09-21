import { Link, useParams } from "react-router";
import { Fagledere } from "./fagledere";
import { Fjellgrupper } from "./fjellgrupper";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import refillImage640 from "../../imports/image-35-640.webp";
import refillImage1200 from "../../imports/image-35-1200.webp";
import refillImage1600 from "../../imports/image-35-1600.webp";

function RefillImage() {
  return (
    <div className="max-w-2xl mt-8">
      <ImageWithFallback
        src={refillImage1600}
        srcSet={`${refillImage640} 640w, ${refillImage1200} 1200w, ${refillImage1600} 1600w`}
        sizes="(min-width: 672px) 672px, 100vw"
        alt="Refill"
        className="w-full h-auto"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

type Structure = {
  key: string;
  title: string;
  cadence: string;
  accent: string;
  intro: string;
  points: string[];
  outro?: string[];
};

const structures: Structure[] = [
  {
    key: "faggrupper",
    title: "Faggrupper",
    cadence: "Februar–September",
    accent: "#FF6426",
    intro:
      "Faggrupper er små grupper som jobber med ett tema gjennom året. Du velger selv hva du vil delta i, basert på hva du vil lære mer om. Faggruppene",
    points: [
      "jobber med konkrete problemstillinger innen ett tema",
      "deler erfaringer fra oppdrag",
      "tester nye verktøy og arbeidsmåter",
      "utfordrer hvordan vi jobber i faget",
    ],
    outro: [
      "Hvordan faggruppene jobber varierer. Noen møtes jevnlig og jobber praktisk, andre organiserer workshops, foredrag eller mindre initiativer underveis.",
      "Hver faggruppe har en fagleder som setter retning og følger opp arbeidet gjennom året.",
    ],
  },
  {
    key: "refill",
    title: "Refill",
    cadence: "September",
    accent: "#028377",
    intro:
      "Refill er en felles arena der vi møtes på tvers av selskap, noen ganger nasjonalt og noen ganger på tvers av land.",
    points: [],
    outro: [
      "Her løfter vi fag, deler erfaringer fra oppdrag og tar oss tid til å se tilbake på det vi har fått til og hva vi skal videre.",
      "På Refill står du på scenen og tester ideer foran andre, eller går i dybden på fag gjennom foredrag og workshops. Innholdet spenner fra lyntaler og podkast til samtaler og debatter, og mye av det tar utgangspunkt i det vi faktisk jobber med i oppdrag.",
      "Samtidig er det en arena for å møte folk du vanligvis ikke jobber med, bygge relasjoner og kombinere fag med det sosiale. Med mat og drikke, mingling, spilling, karaoke og annet gøy!",
    ],
  },
  {
    key: "fjellgrupper",
    title: "Fjellgrupper",
    cadence: "September–Februar",
    accent: "#534DAC",
    intro:
      "I fjellgruppene utvikler du deg i rollen som konsulent. Gruppene settes sammen på tvers av byer og gjennomføres på ulike måter. De første nivåene har felles opplegg, mens de mer erfarne formes i større grad lokalt og individuelt.",
    points: [],
  },
];

export function IPraksis() {
  const { arena } = useParams();
  const current = structures.find((s) => s.key === arena) ?? structures[0];

  return (
    <div className="space-y-8">
      <section className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl leading-[1.05] tracking-tight">
          Slik utvikler du deg i praksis
        </h1>
        <p className="mt-8 text-[15px] leading-relaxed text-[#333333] max-w-2xl">
          Utvikling skjer gjennom både egen innsats og felles læringsarenaer.
          Her finner du aktivitetene og strukturene som støtter læring,
          refleksjon og utvikling gjennom karrieren i Variant.
        </p>
      </section>

      <div className="border-t border-[#333333]/15 pt-12">
        <section className="max-w-3xl pb-12 border-b border-[#333333]/15">
          <h2 className="text-xl font-semibold text-[#333333] mb-4">
            Individuell utvikling
          </h2>
          <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-5 font-semibold">
            Den viktigste læringen skjer ofte i hverdagen. Gjennom oppdrag,
            samarbeid, tilbakemeldinger og refleksjon bygger du erfaring og
            utvikler deg over tid.
          </p>
          <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl">
            RÅ gir retning og læringsarenaer, men utviklingen er din egen. Du
            har ansvar for å følge opp egen læring, søke tilbakemeldinger og
            aktivt bruke erfaringene du gjør til å utvikle deg videre.
          </p>
        </section>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-[#333333] mb-4">
          Felles læringsarenaer gjennom året
        </h2>
        <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-5">
          Dette er arenaene vi bruker for å utvikle oss sammen. Faggruppene
          bygger faglig kompetanse gjennom året og samles i Refill for læring,
          erfaringsutveksling og feiring. Etter Refill får utvikling av
          konsulentrollen ofte ekstra fokus gjennom fjellgruppene. Sammen gir
          arenaene retning og sørger for at vi setter av tid til læring og
          refleksjon.
        </p>

        <div className="flex flex-wrap gap-2">
          {structures.map((s) => {
            const isActive = s.key === current.key;
            return (
              <Link
                key={s.key}
                to={`/i-praksis/${s.key}`}
                aria-current={isActive ? "page" : undefined}
                className="px-4 py-2 text-[15px] rounded-full border transition-colors"
                style={{
                  backgroundColor: isActive ? s.accent : "transparent",
                  borderColor: isActive ? s.accent : "rgba(0,0,0,0.15)",
                  color: isActive ? "#ffffff" : "#333333",
                }}
              >
                {s.title}
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        {current.key !== "fjellgrupper" && (
          <span
            className="inline-block px-2 py-1 text-xs uppercase tracking-[0.18em] text-white rounded mb-4"
            style={{ backgroundColor: current.accent }}
          >
            {current.cadence}
          </span>
        )}
        <h2 className="text-xl font-semibold text-[#333333] mb-4">
          {current.title}
        </h2>
        <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-5">
          {current.intro}
        </p>
        <ul className="space-y-2.5 max-w-2xl">
          {current.points.map((p) => (
            <li
              key={p}
              className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
            >
              {p}
            </li>
          ))}
        </ul>
        {current.outro?.map((paragraph) => (
          <p
            key={paragraph}
            className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mt-5"
          >
            {paragraph}
          </p>
        ))}

        {current.key === "faggrupper" && <Fagledere />}
        {current.key === "fjellgrupper" && <Fjellgrupper />}
        {current.key === "refill" && <RefillImage />}
      </section>
    </div>
  );
}
