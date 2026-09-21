import { Route, Routes } from "react-router";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Dimensions } from "./components/dimensions";
import { Mechanisms } from "./components/mechanisms";
import { KonsulentrollenVariants } from "./components/konsulentrollen-variants";
import { FagligUtvikling } from "./components/faglig-utvikling";
import { IPraksis } from "./components/i-praksis";

function Oversikt() {
  return (
    <div className="space-y-12">
      <Hero />
      <Dimensions />
      <Mechanisms />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:pl-16 md:pr-8 py-10">
        <Header />
        <main className="mt-16">
          <Routes>
            <Route path="/" element={<Oversikt />} />
            <Route path="/konsulentrollen" element={<KonsulentrollenVariants />} />
            <Route path="/konsulentrollen/:level" element={<KonsulentrollenVariants />} />
            <Route path="/faglig" element={<FagligUtvikling />} />
            <Route path="/faglig/:fag" element={<FagligUtvikling />} />
            <Route path="/faglig/:fag/:fase" element={<FagligUtvikling />} />
            <Route path="/i-praksis" element={<IPraksis />} />
            <Route path="/i-praksis/:arena" element={<IPraksis />} />
            <Route path="*" element={<Oversikt />} />
          </Routes>
        </main>
        <footer className="mt-32 text-sm text-[#333333]/60 text-right">
          <span>© {new Date().getFullYear()} Variant</span>
        </footer>
      </div>
    </div>
  );
}
