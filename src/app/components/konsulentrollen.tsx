import { ImageWithFallback } from "./figma/ImageWithFallback";
import image25 from "../../imports/image-25.png";

type Level = {
  name: string;
  intro?: string;
  introParagraphs?: string[];
  points?: string[];
  capabilities?: string[];
  understanding?: string[];
  accent: string;
  years: string;
};

const levels: Level[] = [
  {
    name: "Kilimanjaro",
    introParagraphs: [
      "Du er i starten av både faglig utvikling og konsulentrollen. Du bygger grunnleggende forståelse for hvordan fag brukes i oppdrag, og hvordan verdi skapes sammen med andre.",
      "Du jobber tett med mer erfarne, og utvikler deg gjennom konkrete oppgaver i team.",
    ],
    accent: "#FF6426",
    years: "0–2 år",
    capabilities: [
      "gjennomføre avgrensede oppgaver med tydelige rammer og støtte",
      "bruke grunnleggende faglige metoder i praksis",
      "bidra i teamets leveranser og følge etablerte arbeidsformer",
      "ta imot, forstå og anvende tilbakemeldinger i eget arbeid",
      "beskrive hva oppdraget handler om og hvilken verdi som skapes",
      "samarbeide med andre fagpersoner i teamet",
      "planlegge og gjennomføre eget arbeid innenfor gitt scope",
    ],
    understanding: [
      "hvordan oppdrag struktureres og gjennomføres",
      "hva som forventes i konsulentrollen",
      "hvordan faglig kvalitet vurderes i praksis",
    ],
  },
  {
    name: "Mont Blanc",
    intro:
      "Du er blitt tryggere i faget og i rollen, og tar mer ansvar for egne oppgaver i oppdrag.",
    accent: "#8693A0",
    years: "3–4 år",
    points: [
      "jobber mer selvstendig og driver egne oppgaver fremover",
      "bruker faget aktivt i arbeid med kunde og team",
      "håndterer oppgaver med økende kompleksitet",
      "bidrar til fremdrift og samarbeid i teamet",
    ],
  },
  {
    name: "Denali",
    intro: "Du ser helheten i oppdraget og bidrar utover egne oppgaver.",
    accent: "#028377",
    years: "5–7 år",
    points: [
      "tar ansvar for sammenhenger og kvalitet i leveranser",
      "forstår kundens behov og tilpasser deg situasjonen",
      "bidrar til beslutninger og retning i oppdrag",
      "har et tydelig fokus på å skape verdi for kunden",
    ],
  },
  {
    name: "Cerro Torre",
    intro:
      "Du påvirker retning og utvikler både oppdrag, kunde og menneskene rundt deg.",
    accent: "#534DAC",
    years: "8–11 år",
    points: [
      "gir faglige og strategiske råd til kunde",
      "påvirker prioriteringer og valg i oppdrag",
      "veileder og utvikler andre i teamet",
      "bidrar aktivt til fagmiljø, deling og hvordan vi jobber i Variant",
    ],
  },
  {
    name: "K2",
    intro:
      "Du tar ansvar for helhet, retning og utvikling, både i oppdrag og i Variant som selskap.",
    accent: "#1A1D24",
    years: "12 år +",
    points: [
      "setter retning i komplekse situasjoner og bygger tillit hos kunde",
      "utvikler langsiktige relasjoner og nye muligheter",
      "bidrar til salg, nettverk og videre utvikling av kunder",
      "bygger fagmiljø, utvikler andre og er med på å forme Variant",
    ],
  },
];

export function Konsulentrollen() {
  return (
    <div className="space-y-12">
      <section className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl leading-[1.05] tracking-tight">
          Rollen som konsulent utvikler seg over tid
        </h1>
        <p className="mt-8 mb-8 text-[15px] leading-relaxed text-[#333333] max-w-2xl">
          Som konsulent i Variant utvikler du deg ikke bare i faget ditt, men i
          hvordan du jobber i oppdrag, samarbeider med andre og bidrar til å
          skape verdi. Fjellgruppene beskriver denne utviklingen og hva som
          forventes på ulike nivåer. Etter hvert som du utvikler deg, utvider
          du også hva du tar ansvar for, fra egen utvikling, til team, til
          kunde og videre.
        </p>
      </section>

      <div className="max-w-4xl">
        <ImageWithFallback
          src={image25}
          alt="Illustrasjon av fjellgruppene i RÅ kompetanserammeverk"
          className="w-full h-auto mb-12"
        />
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {levels.map((level) => (
            <article key={level.name} className="max-w-md">
              <span
                className="inline-block px-2 py-1 text-xs uppercase tracking-[0.18em] text-white rounded mb-4 w-fit"
                style={{ backgroundColor: level.accent }}
              >
                {level.years}
              </span>
              <h3 className="text-xl font-semibold text-[#333333] mb-4">
                {level.name}
              </h3>
              {level.intro && (
                <p className="text-[15px] leading-relaxed text-[#333333] mb-5">
                  {level.intro}
                </p>
              )}
              {level.introParagraphs?.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-[15px] leading-relaxed text-[#333333] mb-5"
                >
                  {paragraph}
                </p>
              ))}
              {level.capabilities && (
                <>
                  <p className="text-[15px] leading-relaxed text-[#333333] mb-2">
                    Du skal kunne:
                  </p>
                  <ul className="space-y-2.5 mb-5">
                    {level.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
                      >
                        {cap}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {level.understanding && (
                <>
                  <p className="text-[15px] leading-relaxed text-[#333333] mb-2">
                    Du utvikler forståelse for:
                  </p>
                  <ul className="space-y-2.5">
                    {level.understanding.map((und) => (
                      <li
                        key={und}
                        className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
                      >
                        {und}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {level.points && level.points.length > 0 && (
                <ul className="space-y-2.5">
                  {level.points.map((point) => (
                    <li
                      key={point}
                      className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
