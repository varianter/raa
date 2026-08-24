import { ImageWithFallback } from "./figma/ImageWithFallback";
import icon1 from "../../imports/image-30.png";
import icon2 from "../../imports/image-31.png";
import icon3 from "../../imports/image-32.png";

type Mechanism = {
  title: string;
  body: string;
  icon: string;
};

const mechanisms: Mechanism[] = [
  {
    title: "Faggrupper",
    icon: icon1,
    body:
      "Alle ansatte deltar i en faggruppe for faglig fordypning, erfaringsdeling og utvikling på tvers av kontorer.",
  },
  {
    title: "Refill",
    icon: icon2,
    body:
      "Årlig fagkonferanse for læring, feiring, refleksjon og erfaringsutveksling.",
  },
  {
    title: "Fjellgrupper",
    icon: icon3,
    body:
      "Alle ansatte deltar i tverrfaglige fjellgrupper som utvikler evnen til å samarbeide, ta ansvar, skape verdi og retning i oppdrag.",
  },
];

export function Mechanisms() {
  return (
    <section className="max-w-3xl">
      <div className="mb-10">
        <span className="text-xs uppercase tracking-[0.18em] text-[#333333]/55">
          I praksis
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl tracking-tight leading-[1.15]">
          Aktiviteter og læringsarenaer
        </h2>
        <p className="mt-5 mb-5 text-[15px] leading-relaxed text-[#333333]">
          Læring skjer hver dag i oppdrag og samarbeid med andre. Du har ansvar
          for egen læring og utvikling gjennom hele karrieren. Den viktigste
          læringen skjer ofte i oppdrag, samarbeid og refleksjon over egen
          praksis.
        </p>
        <p className="text-[15px] leading-relaxed text-[#333333]">
          I tillegg har vi noen felles læringsarenaer som gir retning,
          inspirasjon og mulighet til å lære sammen.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-10 sm:gap-y-0">
        {mechanisms.map((m) => (
          <article key={m.title} className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-3 flex-shrink-0">
              <ImageWithFallback
                src={m.icon}
                alt={m.title}
                className="w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-[#333333] mb-1.5 uppercase tracking-[0.1em]">
              {m.title}
            </h3>
            <p className="text-[15px] leading-relaxed text-[#333333]">
              {m.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
