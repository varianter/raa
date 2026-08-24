import { ImageWithFallback } from "./figma/ImageWithFallback";
import image22 from "../../imports/image-34.png";

export function Dimensions() {
  return (
    <section className="max-w-3xl">
      <div className="mb-8">
        <span className="text-xs uppercase tracking-[0.18em] text-[#333333]/55">
          Rammeverket
        </span>
        <h2 className="mt-3 text-3xl md:text-4xl tracking-tight leading-[1.15]">
          To dimensjoner i utviklingen
        </h2>
        <p className="mt-5 text-[15px] leading-relaxed text-[#333333]">
          RÅ består av to dimensjoner som henger tett sammen. Sammen gir de en
          felles ramme for hvordan du utvikler deg over tid.
        </p>
      </div>

      <div className="mb-8">
        <ImageWithFallback
          src={image22}
          alt="Illustrasjon av de to dimensjonene i utviklingen"
          className="w-full h-auto"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <article>
          <h3 className="text-xl font-semibold text-[#333333] mb-3">
            Faglig retning
          </h3>
          <p className="text-[15px] leading-relaxed text-[#333333]">
            I den ene dimensjonen jobber du med kompetansebygging innen enten
            utvikling, design eller produkt, prosess, prosjektledelse med
            utgangspunkt i fagprofilene våre.
          </p>
        </article>
        <article>
          <h3 className="text-xl font-semibold text-[#333333] mb-3">
            Rollen som konsulent
          </h3>
          <p className="text-[15px] leading-relaxed text-[#333333]">
            I den andre dimensjonen jobber du med rollen som konsulent, hvordan
            du utvikler evne til å ta ansvar, forstå verdi og påvirke retning.
            Dette tar utgangspunkt i fjellgruppe-beskrivelsene.
          </p>
        </article>
      </div>
    </section>
  );
}
