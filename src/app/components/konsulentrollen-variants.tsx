import { Link, useParams } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { slugify } from "../lib/slug";
import image26 from "../../imports/image-26.png";

type Level = {
  name: string;
  intro?: string;
  introParagraphs?: string[];
  capabilities?: string[];
  understanding?: string[];
  accent: string;
  years: string;
};

const allLevels: Level[] = [
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
      "Du jobber selvstendig med oppgaver i oppdrag og bruker faget aktivt i samarbeid med team og kunde. Du håndterer mer åpne problemstillinger og tar ansvar for kvalitet i eget arbeid.",
    accent: "#8693A0",
    years: "3–4 år",
    capabilities: [
      "drive egne oppgaver fra start til ferdig leveranse",
      "velge og anvende faglige metoder basert på kontekst",
      "samarbeide tett med utviklere, designere og andre roller",
      "tilpasse leveranser til tekniske og forretningsmessige rammer",
      "bidra til fremdrift og løse hindringer i eget arbeid",
      "gi og motta faglig tilbakemelding på en konkret måte",
      "kommunisere løsninger og vurderinger til team og kunde",
    ],
    understanding: [
      "hvordan ulike fag bidrar til helheten i et produkt eller tjeneste",
      "hvordan prioriteringer påvirker leveranser",
      "hvordan kvalitet og fremdrift balanseres i praksis",
    ],
  },
  {
    name: "Denali",
    intro: "Du tar ansvar utover egne oppgaver og bidrar aktivt til hvordan teamet lykkes. Du ser sammenhenger i oppdraget og kobler faglige valg til verdi for kunde.",
    accent: "#028377",
    years: "5–7 år",
    capabilities: [
      "drive deler av leveransen fremover på vegne av teamet",
      "prioritere oppgaver basert på mål, verdi og kapasitet",
      "identifisere risiko og foreslå tiltak i leveransen",
      "fasilitere samarbeid og bidra til gode arbeidsprosesser",
      "oversette faglige vurderinger til konsekvenser for kunde",
      "bidra til at teamet jobber mer effektivt og målrettet",
      "veilede mindre erfarne i arbeid og beslutninger",
    ],
    understanding: [
      "hvordan oppdrag henger sammen fra behov til levert verdi",
      "hvordan team påvirker resultat og kvalitet",
      "hvordan beslutninger tas i komplekse situasjoner",
    ],
  },
  {
    name: "Cerro Torre",
    introParagraphs: [
      "Du påvirker retning i oppdrag og hos kunde. Du tar ansvar for hvordan arbeid struktureres, hvilke valg som tas, og hvordan teamet jobber for å nå mål.",
      "Utviklingen skjer i stor grad gjennom oppdrag, lokal oppfølging og egne initiativ.",
    ],
    accent: "#534DAC",
    years: "8–11 år",
    capabilities: [
      "definere retning for deler av eller hele oppdrag",
      "ta beslutninger i situasjoner med høy grad av usikkerhet",
      "koble faglige valg til forretningsmål og målbar effekt",
      "påvirke kunde, interessenter og beslutningstakere",
      "strukturere arbeid slik at teamet kan levere effektivt",
      "håndtere komplekse interessentbilder og avveininger",
      "utvikle andre gjennom veiledning, sparring og tilbakemelding",
    ],
    understanding: [
      "hvordan oppdrag skaper langsiktig verdi for kunde",
      "hvordan organisasjoner tar beslutninger",
      "hvordan fag brukes strategisk i større sammenhenger",
    ],
  },
  {
    name: "K2",
    introParagraphs: [
      "Du former hvordan vi jobber, både i oppdrag og i Variant. Du tar ansvar utover enkeltoppdrag og bidrar til retning, fag og utvikling av organisasjoner og miljøer.",
      "Utviklingen er i stor grad individuell og lokalt forankret.",
    ],
    accent: "#1A1D24",
    years: "12 år +",
    capabilities: [
      "sette retning for oppdrag, kunder og faglige satsninger",
      "identifisere og utvikle nye muligheter for verdi",
      "påvirke strategiske beslutninger hos kunde",
      "bygge og utvikle sterke team og fagmiljøer",
      "utvikle praksis, metoder og måter å jobbe på",
      "være en tydelig faglig og profesjonell rollemodell",
      "bidra til kompetanseutvikling på tvers av Variant",
    ],
    understanding: [
      "hvordan marked, organisasjon og fag utvikler seg over tid",
      "hvordan man skaper varig endring hos kunde",
      "hvordan man bygger bærekraftige fagmiljøer",
    ],
  },
];

function FjellnivåerTabs() {
  const { level: levelSlug } = useParams();
  const active = Math.max(
    0,
    allLevels.findIndex((l) => slugify(l.name) === levelSlug),
  );
  const current = allLevels[active];

  return (
    <section>
      <div className="flex flex-wrap gap-2 mb-12">
        {allLevels.map((level, i) => {
          const isActive = i === active;
          return (
            <Link
              key={level.name}
              to={`/konsulentrollen/${slugify(level.name)}`}
              aria-current={isActive ? "page" : undefined}
              className="px-4 py-2 text-[15px] rounded-full border transition-colors text-left"
              style={{
                backgroundColor: isActive ? level.accent : "transparent",
                borderColor: isActive ? level.accent : "rgba(0,0,0,0.15)",
                color: isActive ? "#ffffff" : "#333333",
              }}
            >
              <span className="font-semibold">{level.name}</span>
              <span
                className="ml-2 text-[13px]"
                style={{ opacity: isActive ? 0.85 : 0.6 }}
              >
                · {level.years}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <div>
          <h3 className="text-xl font-semibold text-[#333333] mb-4">
            {current.name}
          </h3>
          {current.intro && (
            <p className="text-[15px] leading-relaxed text-[#333333] mb-5">
              {current.intro}
            </p>
          )}
          {current.introParagraphs?.map((paragraph, idx) => (
            <p
              key={idx}
              className="text-[15px] leading-relaxed text-[#333333] mb-5"
            >
              {paragraph}
            </p>
          ))}

          {current.capabilities && (
            <>
              <p className="text-[15px] leading-relaxed text-[#333333] mb-3">
                Du skal kunne:
              </p>
              <ol className="space-y-3">
                {current.capabilities.map((cap, idx) => (
                  <li key={cap} className="flex gap-3">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[13px] text-white"
                      style={{ backgroundColor: current.accent }}
                    >
                      {idx + 1}
                    </span>
                    <span className="text-[15px] leading-relaxed text-[#333333] pt-0.5">
                      {cap}
                    </span>
                  </li>
                ))}
              </ol>
            </>
          )}
        </div>

        <div>
          <div className="text-xl font-semibold mb-4 invisible" aria-hidden="true">
            Placeholder
          </div>
          {current.understanding && (
            <>
              <p className="text-xs uppercase tracking-[0.18em] text-[#333333]/55 mb-3">
                Du utvikler forståelse for
              </p>
              <div className="flex flex-wrap gap-2">
                {current.understanding.map((und) => (
                  <span
                    key={und}
                    className="inline-block px-2.5 py-1 rounded-full text-[13px]"
                    style={{
                      backgroundColor: `${current.accent}15`,
                      color: "#333333",
                      border: `1px solid ${current.accent}30`,
                    }}
                  >
                    {und}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export function KonsulentrollenVariants() {
  return (
    <div className="space-y-16">
      <section className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl leading-[1.05] tracking-tight mb-4">
          Konsulentrollen utvikler seg over tid
        </h1>
        <p className="text-[15px] leading-relaxed text-[#333333] mb-5">
          Som konsulent i Variant utvikler du deg ikke bare i faget ditt, men i
          hvordan du jobber i oppdrag, samarbeider med andre og bidrar til å
          skape verdi.
        </p>
        <p className="text-[15px] leading-relaxed text-[#333333] mb-5">
          Fjellnivåene beskriver denne utviklingen. De viser hva som forventes
          på ulike nivåer, og hvordan ansvaret ditt gradvis utvides. Du går fra
          å lære og bidra i team, til å ta ansvar for leveranser, påvirke
          retning og etter hvert forme hvordan vi jobber med kunder og fag.
        </p>
        <p className="text-[15px] leading-relaxed text-[#333333]">
          Utviklingen skjer gjennom oppdrag, i samarbeid med andre, og gjennom
          målrettet oppfølging og aktiviteter i Variant. Dette er ikke en
          fasit, men en retning for hvordan du kan utvikle deg over tid.
        </p>
      </section>

      <div className="mb-12 w-full md:w-[65%]">
        <ImageWithFallback
          src={image26}
          alt="Illustrasjon av fjellgruppene i RÅ kompetanserammeverk"
          className="w-full h-auto"
        />
      </div>

      <FjellnivåerTabs />
    </div>
  );
}
