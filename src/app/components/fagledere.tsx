import imgAnders from "../../imports/Frame3129/4359b4ce319e0d5aa2685e8055e1fa28db9f11c8.png";
import imgAneMarthe from "../../imports/Frame3129/3679bdbb696c46843e5d975f66790f48338254fd.png";
import imgAnita from "../../imports/Frame3129/73951f189cdaaa4024103cc4f7e756cf4150f821.png";
import imgArja from "../../imports/Frame3129/623343f3fd7daa1cb98be10f4b8ebdf1ca83dafa.png";
import imgHenrik from "../../imports/Frame3129/591b5af61e66d6ce7012a2fc3b25c95135c926e5.png";
import imgIdun from "../../imports/Frame3129/75b47a335d13eb0595a803a15bfa7f1ff8ac5a87.png";
import imgJacob from "../../imports/Frame3129/81373ab3f8cd440c6537e64bb98c2dc5336e40e8.png";
import imgJonas from "../../imports/Frame3129/251ec01d290fd79af0ae7b9f416ba0729aa74cee.png";
import imgKenAre from "../../imports/Frame3129/be7affabe91104fa1e9400df5d3c354e6fadc283.png";
import imgKjetil from "../../imports/Frame3129/256ee98ca2f603480f99b51647e7cac6547c9387.png";
import imgMarius from "../../imports/Frame3129/2cb63929cd29ea3c2063a0e12273b7ffe0a4cb06.png";
import imgNathalie from "../../imports/Frame3129/4efa0750d65e3b1520f4916fcc892cd8b345a91c.png";
import imgOlePetter from "../../imports/Frame3129/fe6e94a7edeaa6a61a5ada7db820a643bf69d58f.png";
import imgRobin from "../../imports/Frame3129/346313d6bedeb457a0da6175fa32569ef25c5e37.png";
import imgSamuel from "../../imports/Frame3129/f6e105a644dad8fa5efde9dbc6affb60a6f8eec3.png";
import imgSigurd from "../../imports/Frame3129/5136a207a353231ca33098f03c39a48bdf7d8ac5.png";
import imgMartine from "../../imports/Frame3129/8947e2eb1ad963f8a2a0c28043d6a5e0c63178ce.png";
import imgVera from "../../imports/Frame3129/9fc9f9b33e5800430cf00ed7a8b84ec60787ce70.png";
import imgYoeri from "../../imports/Frame3129/c8946114f69ce44e330a3c0beb0c2ac613f7e0c6.png";

type Fagleder = {
  firstName: string;
  lastName: string;
  group: string;
  image?: string;
  placeholder?: boolean;
};

const fagledere: Fagleder[] = [
  { firstName: "Marius", lastName: "Krakeli", group: "Klar tale", image: imgMarius },
  { firstName: "Ken Are", lastName: "Meisler", group: "Kubernetes", image: imgKenAre },
  { firstName: "Martine", lastName: "Lindstrøm", group: "AI Design-Lab", image: imgMartine },
  { firstName: "Robin", lastName: "Hovind", group: "Arkitektur og software craftmanship", image: imgRobin },
  { firstName: "Er dette", lastName: "deg?", group: "Agentic AI & Productivity", placeholder: true },
  { firstName: "Arja", lastName: "Sivapiragasam", group: "Gamedev", image: imgArja },
  { firstName: "Anders", lastName: "Njøs Slinde", group: "Go", image: imgAnders },
  { firstName: "Idun", lastName: "Ramstad", group: "Inkluderende design og UU (Iduun)", image: imgIdun },
  { firstName: "Anita", lastName: "Steinstad", group: "Systemisk design / systemtenkning", image: imgAnita },
  { firstName: "Er dette", lastName: "deg?", group: "AI Innovation", placeholder: true },
  { firstName: "Ole Petter", lastName: "Klæstad", group: "AI for Tech & UX", image: imgOlePetter },
  { firstName: "Vera Haye", lastName: "Bjerga", group: "Praktisk tjenestedesign for prosjektledere", image: imgVera },
  { firstName: "Henrik", lastName: "Østgaard", group: "Funksjonell programmering", image: imgHenrik },
  { firstName: "Jacob", lastName: "Berglund", group: "Design Engineering", image: imgJacob },
  { firstName: "Jonas", lastName: "Lillevold", group: "Designledelse", image: imgJonas },
  { firstName: "Kjetil", lastName: "Møkkelgjerd", group: "Egenprodukt", image: imgKjetil },
  { firstName: "Nathalie", lastName: "Hillinge", group: "Strategic Storytelling", image: imgNathalie },
  { firstName: "Yoeri", lastName: "Otten", group: "Rustaceans", image: imgYoeri },
  { firstName: "Ane Marthe", lastName: "Ness", group: "Variant AI-lab", image: imgAneMarthe },
  { firstName: "Samuel", lastName: "Palm", group: "Business Design", image: imgSamuel },
  { firstName: "Sigurd", lastName: "Gravning", group: "Teamledelse", image: imgSigurd },
];

export function Fagledere() {
  return (
    <div className="mt-10">
      <div className="flex items-center gap-3 mb-6">
        <span aria-hidden="true">♥</span>
        <h3 className="text-xl font-semibold text-[#333333] tracking-[0.08em]">
          Faggrupper og Fagledere 2026
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {fagledere.map((f) => (
          <FaglederCard key={`${f.group}`} fagleder={f} />
        ))}
      </div>
    </div>
  );
}

function FaglederCard({ fagleder }: { fagleder: Fagleder }) {
  const { firstName, lastName, group, image, placeholder } = fagleder;
  const lastWords = lastName.trim().split(/\s+/);
  const lastDisplay = placeholder
    ? lastName
    : `${lastWords[lastWords.length - 1].charAt(0)}.`;
  return (
    <article className="bg-[#FBFAF7] rounded-md overflow-hidden flex flex-col aspect-[4/5] relative">
      <div className="flex-1 relative bg-[#a6a6a6]">
        {image && (
          <img
            src={image}
            alt={`${firstName} ${lastName}`}
            className="absolute inset-0 size-full object-cover"
          />
        )}
      </div>
      <div className="px-3 py-3">
        <div className="space-y-1 mb-2">
          <span
            className="inline-block leading-tight px-1.5 -mx-0.5"
            style={{ backgroundColor: "#BEE0FF" }}
          >
            <span
              className={`font-semibold text-[15px] text-black ${placeholder ? "italic" : ""}`}
            >
              {firstName}
            </span>
          </span>
          <br />
          <span
            className="inline-block leading-tight px-1.5 -mx-0.5"
            style={{ backgroundColor: "#BEE0FF" }}
          >
            <span
              className={`font-semibold text-[15px] text-black ${placeholder ? "italic" : ""}`}
            >
              {lastDisplay}
            </span>
          </span>
        </div>
        <p className="text-[12px] leading-snug text-black/80 border-b border-black/40 pb-1">
          Fagleder {group}
        </p>
      </div>
    </article>
  );
}
