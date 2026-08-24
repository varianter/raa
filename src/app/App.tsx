import { useState } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Dimensions } from "./components/dimensions";
import { Mechanisms } from "./components/mechanisms";
import { KonsulentrollenVariants } from "./components/konsulentrollen-variants";
import { FagligUtvikling } from "./components/faglig-utvikling";
import { IPraksis } from "./components/i-praksis";

export default function App() {
  const [activePage, setActivePage] = useState("Oversikt");

  return (
    <div className="min-h-screen bg-white text-[#333333]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:pl-16 md:pr-8 py-10">
        <Header activePage={activePage} onPageChange={setActivePage} />
        <main className="mt-16">
          {activePage === "Oversikt" && (
            <div className="space-y-12">
              <Hero />
              <Dimensions />
              <Mechanisms />
            </div>
          )}
          {activePage === "Konsulentrollen" && <KonsulentrollenVariants />}
          {activePage === "Faglig utvikling" && <FagligUtvikling />}
          {activePage === "I praksis" && <IPraksis />}
        </main>
        <footer className="mt-32 text-sm text-[#333333]/60 text-right">
          <span>© {new Date().getFullYear()} Variant</span>
        </footer>
      </div>
    </div>
  );
}
