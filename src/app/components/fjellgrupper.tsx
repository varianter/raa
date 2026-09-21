import { ImageWithFallback } from "./figma/ImageWithFallback";
import fjellImage640 from "../../imports/image-36-640.webp";
import fjellImage1200 from "../../imports/image-36-1200.webp";
import fjellImage1600 from "../../imports/image-36-1600.webp";

type Level = {
  name: string;
  timing?: string;
  intro: string;
  points: string[];
  outro?: string[];
  examples?: string[];
};

const levels: Level[] = [
  {
    name: "Kilimanjaro",
    timing: "August",
    intro:
      "Startskudd i august er starten på tiden din i Variant.",
    points: [
      "blir kjent med andre nye på tvers av selskap",
      "jobber med kundecase i team",
      "prøver deg i rollen som konsulent og fagperson",
      "bygger trygghet, relasjoner og forståelse for hvordan vi jobber",
    ],
  },
  {
    name: "Mont Blanc",
    timing: "Januar",
    intro: "Her flyttes fokuset til hvordan du fungerer i team og leveranser.",
    points: [
      "jobber med samarbeid, kommunikasjon og teamdynamikk",
      "deler erfaringer fra egne oppdrag",
      "trener på å ta ansvar i leveranser",
      "får innspill på utfordringer du står i",
    ],
  },
  {
    name: "Denali",
    timing: "Januar",
    intro: "Her handler det mer om ansvar, helhet og retning i oppdrag.",
    points: [
      "utvikler forretningsforståelse i praksis",
      "navigerer i kundekontekst og interessenter",
      "ser sammenhenger på tvers av team og leveranser",
      "lærer av andre på samme nivå",
    ],
  },
  {
    name: "Cerro Torre og K2",
    timing: "September–Januar",
    intro:
      "På de mest erfarne nivåene er utviklingen mer individuelt tilpasset. Du utvikler deg videre gjennom ansvar i oppdrag, faglig retning og bidrag til selskapet.",
    points: [],
    outro: [],
    examples: [
      "individuell utviklingsplan og målrettet oppfølging",
      "deltakelse i lokale lederprogram",
      "workshops og faglige bidrag på Variantdager",
      "kurs eller videreutdanning innen teamutvikling, forretningsutvikling eller ledelse",
    ],
  },
];

export function Fjellgrupper() {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 max-w-2xl">
        {levels.map((level) => (
          <article key={level.name}>
            {level.timing && (
              <span className="inline-block px-2 py-1 text-xs uppercase tracking-[0.18em] text-white rounded mb-3 w-fit bg-[#534DAC]">
                {level.timing}
              </span>
            )}
            <h4 className="text-xl font-semibold text-[#333333] mb-2">
              {level.name}
            </h4>
            <p className="text-[15px] leading-relaxed text-[#333333] mb-3">
              {level.intro}
            </p>
            {level.points.length > 0 && (
              <ul className="space-y-1.5">
                {level.points.map((p) => (
                  <li
                    key={p}
                    className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            )}
            {level.outro?.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[15px] leading-relaxed text-[#333333] mt-3"
              >
                {paragraph}
              </p>
            ))}
            {level.examples && (
              <>
                <p className="mt-3 text-[15px] leading-relaxed text-[#333333]">
                  Dette kan for eksempel være:
                </p>
                <ul className="mt-1.5 space-y-1.5">
                  {level.examples.map((ex) => (
                    <li
                      key={ex}
                      className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </article>
        ))}
      </div>

      <div className="max-w-2xl mt-8">
        <ImageWithFallback
          src={fjellImage1600}
          srcSet={`${fjellImage640} 640w, ${fjellImage1200} 1200w, ${fjellImage1600} 1600w`}
          sizes="(min-width: 672px) 672px, 100vw"
          alt="Fjellgrupper"
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
}
