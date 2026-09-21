import { useState } from "react";
import { Link, useParams } from "react-router";
import { PhaseFlowTabs } from "./phase-flow-variants";

type Phase = {
  name: string;
  points: string[];
  label?: string;
  practice?: string;
  years?: string;
};

type Discipline = {
  key: string;
  title: string;
  accent: string;
  intro: string;
  phases: Phase[];
};

const disciplines: Discipline[] = [
  {
    key: "utvikling",
    title: "Utvikling",
    accent: "#534DAC",
    intro:
      "Utvikling handler om å bygge robuste, gode løsninger og forstå hvordan teknologi skaper verdi. Du vokser fra å lære faget i bredden til å forme arkitektur, retning og fagmiljø.",
    phases: [
      {
        name: "Bygge grunnmur",
        label: "Start · Fundament",
        years: "0–2 år",
        points: [
          "lærer faget i bredden",
          "bygger forståelse for kode og verktøy",
          "prøver, feiler og lærer av andre",
        ],
        practice: "leverer enkle, men fungerende kodeoppgaver i et team",
      },
      {
        name: "Jobbe i team",
        label: "Etappe 2 · Kjerne",
        years: "3–4 år",
        points: [
          "leverer egne oppgaver i et team",
          "tar i bruk gode praksiser",
          "samarbeider og søker tilbakemeldinger",
        ],
        practice: "tar ansvar for egne oppgaver og bidrar aktivt til teamets leveranser",
      },
      {
        name: "Ta eierskap",
        label: "Etappe 3 · Kjerne",
        years: "5–7 år",
        points: [
          "tar ansvar for kvalitet og leveranse",
          "ser sammenhenger på tvers av kode",
          "veileder og hjelper andre i gang",
        ],
        practice: "eier tekniske spor og tar beslutninger på tvers av systemet",
      },
      {
        name: "Utvide perspektiv",
        label: "Etappe 4 · Spissing",
        years: "8–11 år",
        points: [
          "former arkitektur og tekniske valg",
          "forstår kundens behov og kontekst",
          "kobler teknologi til verdi",
        ],
        practice: "påvirker teknisk retning og kobler løsninger til forretningsverdi",
      },
      {
        name: "Utvikle fag og andre",
        label: "Etappe 5 · Spissing",
        years: "12+ år",
        points: [
          "setter retning i fagmiljøet",
          "bygger andre opp gjennom mentoring",
          "deler kunnskap utad og innad",
        ],
        practice: "former både fag, mennesker og hvordan teknologi skaper verdi",
      },
    ],
  },
  {
    key: "design",
    title: "Design",
    accent: "#028377",
    intro: "",
    phases: [
      {
        name: "Bygge grunnmur",
        label: "Start · Fundament",
        years: "0–2 år",
        points: [
          "lager skisser, wireframes og enkle prototyper",
          "bruker designmetode bevisst i eget arbeid",
          "gjennomfører enkle brukerintervjuer og tester",
          "tar i bruk eksisterende designsystem i løsninger",
        ],
        practice: "leverer enkle, men fungerende designbidrag i et team",
      },
      {
        name: "Jobbe i team",
        label: "Etappe 2 · Kjerne",
        years: "3–4 år",
        points: [
          "designer flyter og skjermer som brukes i produkt",
          "tester og itererer løsninger med brukere",
          "tilpasser design til teknisk og forretningsmessig kontekst",
          "bruker enkle KI-verktøy i utforsking og prototyping",
        ],
        practice: "tar ansvar for deler av designet i et produktteam",
      },
      {
        name: "Ta eierskap",
        label: "Etappe 3 · Kjerne",
        years: "5–7 år",
        points: [
          "driver et designspor fra problem til levert løsning",
          "tar beslutninger og begrunner dem tydelig",
          "prioriterer hva som skal designes nå og hva som kan vente",
          "bruker KI aktivt i innsikt, utforsking og prototyping",
        ],
        practice: "eier designarbeidet for et område eller en leveranse",
      },
      {
        name: "Utvide perspektiv",
        label: "Etappe 4 · Spissing",
        years: "8–11 år",
        points: [
          "kobler designvalg til forretningsmål og verdi",
          "påvirker hva som skal bygges og hvorfor",
          "ser sammenhenger på tvers av produkter, flater og tjenester",
          "vurderer hvor KI gir verdi i løsning og brukeropplevelse",
        ],
        practice: "påvirker retning for produkt og beslutninger utover eget team",
      },
      {
        name: "Utvikle fag og andre",
        label: "Etappe 5 · Spissing",
        years: "12+ år",
        points: [
          "utvikler hvordan design brukes i kundens organisasjon",
          "veileder og løfter andre designere i arbeidshverdagen",
          "former retning for fag og praksis i Variant",
          "utforsker og setter retning for bruk av KI i design",
        ],
        practice: "former både fag, mennesker og hvordan design skaper verdi",
      },
    ],
  },
  {
    key: "ppp",
    title: "Produkt-, prosess- og prosjektledelse",
    accent: "#FF6426",
    intro:
      "Ledelse i fag handler om å skape retning, fremdrift og verdi sammen med team og kunde. Du utvikler deg fra å bidra i prosesser til å forme produktstrategi, prosjekter og mennesker.",
    phases: [
      {
        name: "Bygge grunnmur",
        label: "Start · Fundament",
        years: "0–2 år",
        points: [
          "lærer rollene og metodene",
          "blir trygg i fasilitering og oppfølging",
          "forstår hvordan team jobber sammen",
        ],
        practice: "støtter prosesser og bidrar til fremdrift i et team",
      },
      {
        name: "Jobbe i team",
        label: "Etappe 2 · Kjerne",
        years: "3–4 år",
        points: [
          "driver prosesser i et team",
          "støtter fremdrift og samarbeid",
          "skaper struktur i hverdagen",
        ],
        practice: "tar ansvar for daglige prosesser og sørger for fremdrift",
      },
      {
        name: "Ta eierskap",
        label: "Etappe 3 · Kjerne",
        years: "5–7 år",
        points: [
          "leder egne prosjekter eller produktspor",
          "tar ansvar for leveranser og forventninger",
          "balanserer kunde, team og fag",
        ],
        practice: "eier leveranser og tar beslutninger for prosjekt eller produkt",
      },
      {
        name: "Utvide perspektiv",
        label: "Etappe 4 · Spissing",
        years: "8–11 år",
        points: [
          "former produkt- og leveransestrategi",
          "kobler arbeidet til forretningsverdi",
          "ser helhet og prioriterer",
        ],
        practice: "påvirker produktretning og strategiske valg utover eget team",
      },
      {
        name: "Utvikle fag og andre",
        label: "Etappe 5 · Spissing",
        years: "12+ år",
        points: [
          "utvikler andre i rollen",
          "former hvordan vi jobber i Variant",
          "bygger fagmiljø og deling",
        ],
        practice: "former både fag, mennesker og hvordan vi skaper verdi",
      },
    ],
  },
];


export function FagligUtvikling() {
  const { fag, fase } = useParams();
  const current = disciplines.find((d) => d.key === fag) ?? disciplines[0];

  return (
    <div className="space-y-12">
      <section className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl leading-[1.05] tracking-tight">
          Faglig utvikling
        </h1>
        <p className="mt-8 mb-8 text-[15px] leading-relaxed text-[#333333] max-w-2xl">
          Faglig utvikling handler om hvordan du bygger kompetanse i faget ditt
          over tid. Utviklingen skjer ikke i faste steg, men gjennom erfaring,
          refleksjon og arbeid i praksis.
        </p>
      </section>

      <section>
        <span className="text-xs uppercase tracking-[0.18em] text-[#333333]/55">
          Tre fagretninger
        </span>
        <h2 className="mt-3 text-xl font-semibold text-[#333333] mb-4">
          Fagprofilene beskriver utviklingen i hvert fag
        </h2>
        <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-5">
          Fagprofilene beskriver hva det innebærer å utvikle seg innen hvert
          fagområde. Velg et fag for å se hvilke ferdigheter og forventninger
          som henger sammen med ulik erfaring, og hva som er særlig viktig
          akkurat nå.
        </p>

        <div className="flex flex-wrap gap-2">
          {disciplines.map((d) => {
            const isActive = d.key === current.key;
            return (
              <Link
                key={d.key}
                to={`/faglig/${d.key}`}
                aria-current={isActive ? "page" : undefined}
                className="px-4 py-2 text-[15px] rounded-full border transition-colors"
                style={{
                  backgroundColor: isActive ? d.accent : "transparent",
                  borderColor: isActive ? d.accent : "rgba(0,0,0,0.15)",
                  color: isActive ? "#ffffff" : "#333333",
                }}
              >
                {d.title}
              </Link>
            );
          })}
        </div>
      </section>

      {current.key === "design" && (
        <>
          <section>
            <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-6">
              Design i Variant bygger på et felles fundament. Alle designere
              skal være trygge på digital tjenesteutvikling og systemer, og på innsikt,
              visualisering og brukerinvolvering. Noen går videre og utvikler
              spisskompetanse innen tjenestedesign og strategisk design.
            </p>
            <DesignTOC accent={current.accent} />
          </section>

          <section>
            <PartHeader
              number="01"
              label="Felles satsing"
              title="KI i designfaget"
              description="Dette gjelder alle designere i Variant, uavhengig av nivå og dypdykk."
              accent={current.accent}
            />
            <DesignFocusNow accent={current.accent} />
          </section>

          <section>
            <PartHeader
              number="02"
              label="Ditt nivå"
              title="Fra ny til erfaren"
              description="Du tilhører ett av disse nivåene. Velg fanen som passer din erfaring for å se hva som forventes og hva du kan strekke deg etter."
              accent={current.accent}
            />
            <PhaseFlowTabs discipline={current} basePath={`/faglig/${current.key}`} activeSlug={fase} />
          </section>

          <section>
            <PartHeader
              number="03"
              label="Ditt dypdykk"
              title="Velg retning"
              description="På toppen av fundamentet velger du én retning du vil utvikle deg ekstra i."
              accent={current.accent}
            />
            <DesignDisciplines accent={current.accent} />
          </section>
        </>
      )}

      {current.key === "utvikling" && (
        <>
          <section>
            <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-6">
              Utvikling i Variant bygger på å forstå både bredde og dybde i faget.
              Alle utviklere skal være trygge på å bygge robuste løsninger,
              samarbeide i team og koble teknologi til verdi.
            </p>
            <UtviklingTOC accent={current.accent} />
          </section>

          <section>
            <PartHeader
              number="01"
              label="Ditt nivå"
              title="Fra ny til erfaren"
              description="Du tilhører ett av disse nivåene. Velg fanen som passer din erfaring for å se hva som forventes og hva du kan strekke deg etter."
              accent={current.accent}
            />
            <PhaseFlowTabs discipline={current} basePath={`/faglig/${current.key}`} activeSlug={fase} />
          </section>
        </>
      )}

      {current.key === "ppp" && (
        <>
          <section>
            <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-6">
              Produkt-, prosess- og prosjektledelse i Variant handler om å skape
              retning, fremdrift og verdi. Alle i denne rollen skal være trygge på
              å drive prosesser, lede leveranser og koble arbeid til
              forretningsverdi.
            </p>
            <PPPTOC accent={current.accent} />
          </section>

          <section>
            <PartHeader
              number="01"
              label="Ditt nivå"
              title="Fra ny til erfaren"
              description="Du tilhører ett av disse nivåene. Velg fanen som passer din erfaring for å se hva som forventes og hva du kan strekke deg etter."
              accent={current.accent}
            />
            <PhaseFlowTabs discipline={current} basePath={`/faglig/${current.key}`} activeSlug={fase} />
          </section>
        </>
      )}
    </div>
  );
}

function DesignFocusNow({ accent }: { accent: string }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-[#333333] mb-3">
        KI i designfaget
      </h3>
      <p className="text-[15px] font-semibold text-[#333333] max-w-2xl mb-2">
        KI er en del av designfaget nå, ikke noe ved siden av. Her er det alle
        må ha som mål å lære og trene på i år:
      </p>
      <ul className="space-y-2 max-w-2xl mb-6">
        {[
          "bruke KI verktøy aktivt i designarbeidet",
          "vite når KI gir verdi og når det ikke gjør det",
          "kontinuerlig teste nye verktøy og arbeidsmåter i praksis",
        ].map((p) => (
          <li
            key={p}
            className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
          >
            {p}
          </li>
        ))}
      </ul>
      <p className="text-[15px] font-semibold text-[#333333] max-w-2xl mb-2 mt-6">
        Samtidig påvirker KI hva vi designer:
      </p>
      <ul className="space-y-2 max-w-2xl mb-6">
        {[
          "hvordan produkter fungerer når KI er en del av opplevelsen",
          "hvordan tjenester utvikles og henger sammen",
          "hvordan organisasjoner jobber og tar beslutninger",
        ].map((p) => (
          <li
            key={p}
            className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
          >
            {p}
          </li>
        ))}
      </ul>
      <p className="text-[15px] font-semibold text-[#333333] max-w-2xl mb-2">
        For flere innebærer dette å gå dypere i:
      </p>
      <ul className="space-y-2 max-w-2xl">
        {[
          "å utvikle KI-tjenester",
          "å utvikle nye forretningsmodeller",
        ].map((p) => (
          <li
            key={p}
            className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
          >
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

type Direction = {
  key: string;
  title: string;
  tagline: string;
  points: string[];
  tags: string[];
};

const directions: Direction[] = [
  {
    key: "ux",
    title: "UX",
    tagline: "Former konkrete brukeropplevelser.",
    points: [
      "designer flyt, struktur og interaksjon i produkter",
      "tester og forbedrer løsninger med brukere",
      "jobber tett med utviklere for å få design ut i produksjon",
    ],
    tags: [
      "brukersentrert designprosess",
      "Figma & Miro",
      "prototyping",
      "brukertesting",
      "brukerreiser",
      "interaksjonsdesign",
      "UX-skriving",
      "tilgjengelighet (UU)",
      "atferdsdesign",
      "designsystem",
      "kodeforståelse",
      "smidig utvikling",
      "designlead i produkttrio",
      "etikk og inkluderende design",
      "typografi, grid og layout",
      "definere utfordringer og mulighetsrom",
    ],
  },
  {
    key: "system",
    title: "System",
    tagline: "Bygger struktur og skalerbarhet.",
    points: [
      "utvikler og bruker designsystemer og komponenter",
      "sikrer konsistens på tvers av produkter",
      "tenker i mønstre, struktur og gjenbruk",
    ],
    tags: [
      "komponentbibliotek",
      "design tokens",
      "dokumentasjon",
      "mønsterbiblioteker",
      "designgovernance",
      "versjonering",
    ],
  },
  {
    key: "tjeneste",
    title: "Tjeneste",
    tagline: "Ser helheten rundt produktet.",
    points: [
      "designer sammenhengende opplevelser på tvers av flater og kanaler",
      "kobler produkt til organisasjon og prosesser",
      "identifiserer brudd i tjenesten og forbedrer dem",
    ],
    tags: [
      "tjenestereiser",
      "service blueprint",
      "systemorientert design",
      "gigamapping",
      "den triple diamanten",
      "fasilitering",
      "kvalitativ og kvantitativ innsikt",
      "design sprint",
      "futures studies",
      "økosystemkartlegging",
      "kulturbygging",
      "psykologisk trygghet",
      "handlingsplan",
      "tredelt bunnlinje",
    ],
  },
  {
    key: "strategi",
    title: "Strategi",
    tagline: "Påvirker retning og prioritering.",
    points: [
      "kobler design til forretningsmål og verdi",
      "påvirker hva som skal bygges og hvorfor",
      "bruker design som verktøy i beslutninger",
    ],
    tags: [
      "økosystemkartlegging",
      "scenariobasert designprosess",
      "fremtidsscenarioer",
      "forecasting",
      "backcasting",
      "produkt- og tjenestestrategi",
      "forretningsutvikling",
      "innovasjonsprosesser",
      "designdrevet strategiutvikling",
      "tredelt bunnlinje",
      "CDO for hire",
      "mentor for ledere",
    ],
  },
];

function DirectionsHeader() {
  return (
    <>
      <h2 className="mt-3 text-xl font-semibold text-[#333333] mb-4">
        Velg hvordan du går dypere i faget
      </h2>
      <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-5">
        Alle designere bygger det samme fundamentet og jobber bredt i starten.
        Over tid går mange dypere i hvordan de skaper verdi. Dette er ikke
        roller, men retninger du kan utvikle deg i.
      </p>
    </>
  );
}

function Tag({ children, accent }: { children: React.ReactNode; accent: string }) {
  return (
    <span
      className="inline-block px-2.5 py-1 rounded-full text-[13px]"
      style={{
        backgroundColor: `${accent}15`,
        color: "#333333",
        border: `1px solid ${accent}30`,
      }}
    >
      {children}
    </span>
  );
}

// Variant A: 2×2 kortgrid
function DirectionsCards({ accent }: { accent: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
      {directions.map((d) => (
        <article key={d.key}>
          <div
            className="w-8 h-1 mb-4 rounded"
            style={{ backgroundColor: accent }}
            aria-hidden="true"
          />
          <h3 className="text-xl font-semibold text-[#333333] mb-2">{d.title}</h3>
          <p className="text-[15px] leading-relaxed text-[#333333] mb-4">{d.tagline}</p>
          <ul className="space-y-2 mb-4">
            {d.points.map((p) => (
              <li
                key={p}
                className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
              >
                {p}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {d.tags.map((t) => (
              <Tag key={t} accent={accent}>
                {t}
              </Tag>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

// Variant B: Faner / segmentert med detaljer under
function DirectionsTabs({ accent }: { accent: string }) {
  const [active, setActive] = useState(directions[0].key);
  const current = directions.find((d) => d.key === active)!;
  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        {directions.map((d) => {
          const isActive = d.key === active;
          return (
            <button
              key={d.key}
              onClick={() => setActive(d.key)}
              className="px-4 py-2 text-[15px] rounded-full border transition-colors"
              style={{
                backgroundColor: isActive ? accent : "transparent",
                borderColor: isActive ? accent : "rgba(0,0,0,0.15)",
                color: isActive ? "#ffffff" : "#333333",
              }}
            >
              {d.title}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
        <div>
          <h3 className="text-xl font-semibold text-[#333333] mb-2">{current.title}</h3>
          <p className="text-[15px] leading-relaxed text-[#333333] mb-4">{current.tagline}</p>
          <ul className="space-y-2">
            {current.points.map((p) => (
              <li
                key={p}
                className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-[#333333]/55 mb-3">
            Ferdigheter du kan utvikle
          </p>
          <div className="flex flex-wrap gap-2">
            {current.tags.map((t) => (
              <Tag key={t} accent={accent}>
                {t}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Variant C: Liste med stor typografi og inline tags
function DirectionsList({ accent }: { accent: string }) {
  return (
    <div className="space-y-10">
      {directions.map((d, i) => (
        <article
          key={d.key}
          className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-12 gap-y-3 pb-10"
          style={{
            borderBottom:
              i < directions.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
          }}
        >
          <div>
            <span
              className="text-xs uppercase tracking-[0.18em]"
              style={{ color: accent }}
            >
              0{i + 1} · Retning
            </span>
            <h3 className="mt-2 text-xl font-semibold text-[#333333]">{d.title}</h3>
            <p className="text-[15px] leading-relaxed text-[#333333] mt-1">{d.tagline}</p>
          </div>
          <div>
            <ul className="space-y-2 mb-4">
              {d.points.map((p) => (
                <li
                  key={p}
                  className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
                >
                  {p}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {d.tags.map((t) => (
                <Tag key={t} accent={accent}>
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

// Variant D: Kompakt accordion
function DirectionsAccordion({ accent }: { accent: string }) {
  const [open, setOpen] = useState<string | null>(directions[0].key);
  return (
    <div className="space-y-2">
      {directions.map((d) => {
        const isOpen = open === d.key;
        return (
          <div
            key={d.key}
            className="rounded-xl"
            style={{
              backgroundColor: isOpen ? `${accent}10` : "transparent",
              border: `1px solid ${isOpen ? `${accent}40` : "rgba(0,0,0,0.1)"}`,
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : d.key)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
            >
              <div className="flex items-baseline gap-3">
                <h3 className="text-xl font-semibold text-[#333333]">{d.title}</h3>
                <span className="text-[15px] text-[#333333]/70">{d.tagline}</span>
              </div>
              <span
                className="text-xs uppercase tracking-[0.18em]"
                style={{ color: accent }}
              >
                {isOpen ? "Lukk" : "Åpne"}
              </span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <ul className="space-y-2">
                  {d.points.map((p) => (
                    <li
                      key={p}
                      className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#333333]/55 mb-3">
                    Ferdigheter
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {d.tags.map((t) => (
                      <Tag key={t} accent={accent}>
                        {t}
                      </Tag>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function DesignDisciplines({ accent }: { accent: string }) {
  return (
    <section>
      <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-6">
        Alle designere bygger det samme fundamentet og jobber bredt i starten.
        Over tid går mange dypere i hvordan de skaper verdi. Dette er ikke
        roller, men retninger du kan utvikle deg i.
      </p>
      <DirectionsTabs accent={accent} />
    </section>
  );
}

function PartHeader({
  number,
  label,
  title,
  description,
  accent,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
  accent: string;
}) {
  return (
    <header className="border-t pt-6 mb-6" style={{ borderColor: `${accent}30` }}>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-xs uppercase tracking-[0.18em] text-[#333333]/55">
          {label}
        </span>
      </div>
      <h2 className="text-xl font-semibold text-[#333333] mb-2">{title}</h2>
      <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl">
        {description}
      </p>
    </header>
  );
}

function DesignTOC({ accent }: { accent: string }) {
  const parts = [
    { n: "01", label: "Felles satsing", title: "KI i designfaget" },
    { n: "02", label: "Ditt nivå", title: "Fra ny til erfaren" },
    { n: "03", label: "Ditt dypdykk", title: "Velg retning" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {parts.map((p) => (
        <div
          key={p.n}
          className="border-l-2 pl-4"
          style={{
            borderColor: `${accent}40`,
          }}
        >
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs uppercase tracking-[0.18em] text-[#333333]/55">
              {p.label}
            </span>
          </div>
          <p className="text-[15px] leading-relaxed font-semibold text-[#333333]">
            {p.title}
          </p>
        </div>
      ))}
    </div>
  );
}

function UtviklingTOC({ accent }: { accent: string }) {
  const parts = [
    { n: "01", label: "Ditt nivå", title: "Fra ny til erfaren" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {parts.map((p) => (
        <div
          key={p.n}
          className="border-l-2 pl-4"
          style={{
            borderColor: `${accent}40`,
          }}
        >
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs uppercase tracking-[0.18em] text-[#333333]/55">
              {p.label}
            </span>
          </div>
          <p className="text-[15px] leading-relaxed font-semibold text-[#333333]">
            {p.title}
          </p>
        </div>
      ))}
    </div>
  );
}

function PPPTOC({ accent }: { accent: string }) {
  const parts = [
    { n: "01", label: "Ditt nivå", title: "Fra ny til erfaren" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {parts.map((p) => (
        <div
          key={p.n}
          className="border-l-2 pl-4"
          style={{
            borderColor: `${accent}40`,
          }}
        >
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-xs uppercase tracking-[0.18em] text-[#333333]/55">
              {p.label}
            </span>
          </div>
          <p className="text-[15px] leading-relaxed font-semibold text-[#333333]">
            {p.title}
          </p>
        </div>
      ))}
    </div>
  );
}
