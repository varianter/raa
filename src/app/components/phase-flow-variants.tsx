import { useEffect, useLayoutEffect, useRef, useState } from "react";

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

// Variant 1: Radar Chart
export function PhaseFlowRadar({ discipline }: { discipline: Discipline }) {
  const centerPhase = discipline.phases[0]; // Bygge grunnmur
  const outerPhases = discipline.phases.slice(1);

  return (
    <div>
      {discipline.intro && (
        <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-5">
          {discipline.intro}
        </p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Radar Chart Visualization */}
        <div className="relative aspect-square max-w-md mx-auto">
          {/* Center circle - Bygge grunnmur */}
          <div
            className="absolute inset-[35%] rounded-full flex items-center justify-center z-10"
            style={{ backgroundColor: `${discipline.accent}20` }}
          >
            <div className="text-center px-4">
              <h3 className="text-xl font-semibold text-[#333333] mb-2">
                {centerPhase.name}
              </h3>
              <p className="text-xs text-[#333333]/60">Kjernen</p>
            </div>
          </div>

          {/* Outer sections */}
          {outerPhases.map((phase, i) => {
            const angle = (i * 360) / outerPhases.length - 90;
            const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
            const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={phase.name}
                className="absolute w-32 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div
                  className="w-4 h-4 rounded-full mx-auto mb-2"
                  style={{ backgroundColor: discipline.accent }}
                />
                <h4 className="text-sm font-semibold text-[#333333] text-center mb-1">
                  {phase.name}
                </h4>
              </div>
            );
          })}

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {outerPhases.map((_, i) => {
              const angle = (i * 360) / outerPhases.length - 90;
              const x = 50 + 40 * Math.cos((angle * Math.PI) / 180);
              const y = 50 + 40 * Math.sin((angle * Math.PI) / 180);
              return (
                <line
                  key={i}
                  x1="50%"
                  y1="50%"
                  x2={`${x}%`}
                  y2={`${y}%`}
                  stroke={discipline.accent}
                  strokeWidth="1"
                  opacity="0.3"
                />
              );
            })}
          </svg>
        </div>

        {/* Details list */}
        <div className="space-y-6">
          <div className="pb-6 border-b border-[#333333]/10">
            <h3 className="text-xl font-semibold text-[#333333] mb-3">
              {centerPhase.name}
            </h3>
            <ul className="space-y-2">
              {centerPhase.points.map((point) => (
                <li
                  key={point}
                  className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {outerPhases.map((phase) => (
            <div key={phase.name} className="pb-6 border-b border-[#333333]/10 last:border-0">
              <h3 className="text-xl font-semibold text-[#333333] mb-3">
                {phase.name}
              </h3>
              <ul className="space-y-2">
                {phase.points.map((point) => (
                  <li
                    key={point}
                    className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Variant 2: Concentric Circles (redesigned for readability)
export function PhaseFlowCircles({ discipline }: { discipline: Discipline }) {
  const phases = discipline.phases;
  const n = phases.length;

  return (
    <div>
      {discipline.intro && (
        <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-5">
          {discipline.intro}
        </p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Concentric rings — outermost = bredest fundament, innerst = kjerne reversed visually */}
        <div className="relative aspect-square max-w-md mx-auto w-full">
          {[...phases].reverse().map((phase) => {
            const i = phases.indexOf(phase);
            // i=0 is core (innermost). Outer rings get progressively bigger.
            const reverseIndex = n - 1 - i;
            const size = 100 - reverseIndex * (90 / n);
            const tint = 0.06 + reverseIndex * 0.04;
            const isCore = i === 0;
            return (
              <div
                key={phase.name}
                className="absolute rounded-full"
                style={{
                  inset: `${(100 - size) / 2}%`,
                  backgroundColor: `${discipline.accent}${Math.round(tint * 255)
                    .toString(16)
                    .padStart(2, "0")}`,
                  border: `1px solid ${discipline.accent}40`,
                }}
              >
                {/* label sits on top edge of each ring band, no white box */}
                {!isCore && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 px-3"
                    style={{ top: 0 }}
                  >
                    <span
                      className="text-xs uppercase tracking-[0.18em] whitespace-nowrap"
                      style={{ color: discipline.accent }}
                    >
                      {phase.name}
                    </span>
                  </div>
                )}
                {isCore && (
                  <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                    <div>
                      <p
                        className="text-xs uppercase tracking-[0.18em] mb-1"
                        style={{ color: discipline.accent }}
                      >
                        Kjerne
                      </p>
                      <h3 className="text-xl font-semibold text-[#333333]">
                        {phase.name}
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Details */}
        <div className="space-y-6">
          {discipline.phases.map((phase, i) => (
            <div key={phase.name} className="pb-6 border-b border-[#333333]/10 last:border-0">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                  style={{ backgroundColor: discipline.accent }}
                >
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold text-[#333333]">
                  {phase.name}
                </h3>
              </div>
              <ul className="space-y-2">
                {phase.points.map((point) => (
                  <li
                    key={point}
                    className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Variant: Faner — velg nivå, vis innhold under
export function PhaseFlowTabs({ discipline }: { discipline: Discipline }) {
  const phases = discipline.phases;
  const [active, setActive] = useState(0);
  const current = phases[active];
  return (
    <div>
      {discipline.intro && (
        <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-5">
          {discipline.intro}
        </p>
      )}
      <div className="flex flex-wrap gap-2 mb-6">
        {phases.map((phase, i) => {
          const isActive = i === active;
          return (
            <button
              key={phase.name}
              onClick={() => setActive(i)}
              className="px-4 py-2 text-[15px] rounded-full border transition-colors text-left"
              style={{
                backgroundColor: isActive ? discipline.accent : "transparent",
                borderColor: isActive ? discipline.accent : "rgba(0,0,0,0.15)",
                color: isActive ? "#ffffff" : "#333333",
              }}
            >
              <span className="font-semibold">{phase.name}</span>
              {phase.years && (
                <span
                  className="ml-2 text-[13px]"
                  style={{
                    opacity: isActive ? 0.85 : 0.6,
                  }}
                >
                  · {phase.years}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-x-12 gap-y-3">
        <div>
          <span
            className="text-xs uppercase tracking-[0.18em]"
            style={{ color: discipline.accent }}
          >
            {current.label ?? (active === 0 ? "Start · Kjerne" : `Etappe ${active + 1}`)}
          </span>
          <h3 className="mt-2 text-xl font-semibold text-[#333333]">
            {current.name}
          </h3>
          {current.years && (
            <p className="text-[15px] leading-relaxed text-[#333333]/70 mt-1">
              {current.years} erfaring
            </p>
          )}
        </div>
        <div>
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
          {current.practice && (
            <p className="text-[15px] leading-relaxed text-[#333333] mt-4">
              <span className="font-semibold">Dette betyr i praksis at du: </span>
              {current.practice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// Variant: List look — venstre: label/nummer/tittel, høyre: punkter + practice
export function PhaseFlowList({ discipline }: { discipline: Discipline }) {
  const phases = discipline.phases;
  return (
    <div>
      {discipline.intro && (
        <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-5">
          {discipline.intro}
        </p>
      )}
      <div className="space-y-10">
        {phases.map((phase, i) => (
          <article
            key={phase.name}
            className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-x-12 gap-y-3 pb-10"
            style={{
              borderBottom:
                i < phases.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
            }}
          >
            <div>
              <span
                className="text-xs uppercase tracking-[0.18em]"
                style={{ color: discipline.accent }}
              >
                {phase.label ?? (i === 0 ? "Start · Kjerne" : `Etappe ${i + 1}`)}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-[#333333]">
                {phase.name}
              </h3>
            </div>
            <div>
              <ul className="space-y-2">
                {phase.points.map((p) => (
                  <li
                    key={p}
                    className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              {phase.practice && (
                <p className="text-[15px] leading-relaxed text-[#333333] mt-4">
                  <span className="font-semibold">Dette betyr i praksis at du: </span>
                  {phase.practice}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

// Variant 4: Winding Journey Path — vertical scroll, curved SVG path linking milestones
export function PhaseFlowJourney({ discipline }: { discipline: Discipline }) {
  const phases = discipline.phases;
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      const c = containerRef.current;
      if (!c) return;
      const cb = c.getBoundingClientRect();
      const pts = dotRefs.current.map((d) => {
        if (!d) return { x: 0, y: 0 };
        const r = d.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - cb.left,
          y: r.top + r.height / 2 - cb.top,
        };
      });
      setPoints(pts);
      setSize({ w: cb.width, h: cb.height });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [phases.length]);

  // also remeasure after fonts/layout settle
  useEffect(() => {
    const t = setTimeout(() => {
      const c = containerRef.current;
      if (!c) return;
      const cb = c.getBoundingClientRect();
      const pts = dotRefs.current.map((d) => {
        if (!d) return { x: 0, y: 0 };
        const r = d.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - cb.left,
          y: r.top + r.height / 2 - cb.top,
        };
      });
      setPoints(pts);
      setSize({ w: cb.width, h: cb.height });
    }, 50);
    return () => clearTimeout(t);
  }, [phases]);

  const pathD = points.length
    ? points
        .map((p, i) => {
          if (i === 0) return `M ${p.x} ${p.y}`;
          const prev = points[i - 1];
          const midY = (prev.y + p.y) / 2;
          return `C ${prev.x} ${midY}, ${p.x} ${midY}, ${p.x} ${p.y}`;
        })
        .join(" ")
    : "";

  return (
    <div>
      {discipline.intro && (
        <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-5">
          {discipline.intro}
        </p>
      )}

      <div ref={containerRef} className="relative max-w-3xl mx-auto py-2">
        {size.w > 0 && (
          <svg
            className="absolute inset-0 pointer-events-none"
            width={size.w}
            height={size.h}
            viewBox={`0 0 ${size.w} ${size.h}`}
          >
            <path
              d={pathD}
              stroke={discipline.accent}
              strokeWidth="1.5"
              strokeDasharray="2 4"
              strokeLinecap="round"
              fill="none"
              opacity="0.3"
            />
          </svg>
        )}

        <div className="relative space-y-4">
          {phases.map((phase, i) => {
            const isLeft = i % 2 === 0;
            const isCore = i === 0;
            return (
              <div
                key={phase.name}
                className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
              >
                <div className="w-full md:w-[48%] relative">
                  {/* milestone dot — placed on inner edge so path stays in center gap */}
                  <div
                    ref={(el) => {
                      dotRefs.current[i] = el;
                    }}
                    className={`absolute top-6 ${
                      isLeft ? "-right-3 md:-right-5" : "-left-3 md:-left-5"
                    } w-6 h-6 rounded-full border-4 border-white shadow-sm`}
                    style={{ backgroundColor: discipline.accent }}
                  />
                  <div
                    className="rounded-2xl p-5"
                    style={{
                      backgroundColor: `${discipline.accent}10`,
                      border: `1px solid ${discipline.accent}30`,
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="text-xs uppercase tracking-[0.18em]"
                        style={{ color: discipline.accent }}
                      >
                        {phase.label ?? (isCore ? "Start · Kjerne" : `Etappe ${i + 1}`)}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#333333] mb-3">
                      {phase.name}
                    </h3>
                    <ul className="space-y-2">
                      {phase.points.map((point) => (
                        <li
                          key={point}
                          className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
                          style={{ color: "#333333" }}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                    {phase.practice && (
                      <div
                        className="mt-4 pt-4 text-[15px] leading-relaxed text-[#333333]"
                        style={{ borderTop: `1px solid ${discipline.accent}30` }}
                      >
                        <span className="font-semibold">Dette betyr i praksis at du: </span>
                        {phase.practice}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Variant 3: Foundation Pyramid
export function PhaseFlowPyramid({ discipline }: { discipline: Discipline }) {
  const reversed = [...discipline.phases].reverse();

  return (
    <div>
      {discipline.intro && (
        <p className="text-[15px] leading-relaxed text-[#333333] max-w-2xl mb-5">
          {discipline.intro}
        </p>
      )}

      <div className="max-w-4xl mx-auto">
        {reversed.map((phase, i) => {
          const isFoundation = i === reversed.length - 1;
          const width = 40 + i * 15;

          return (
            <div key={phase.name} className="mb-4">
              <div
                className="mx-auto p-6 rounded-lg"
                style={{
                  width: `${width}%`,
                  backgroundColor: isFoundation
                    ? `${discipline.accent}30`
                    : `${discipline.accent}15`,
                  borderLeft: `4px solid ${discipline.accent}`,
                }}
              >
                <div className="flex items-start gap-3">
                  {isFoundation && (
                    <div
                      className="px-2 py-1 text-xs uppercase tracking-[0.18em] text-white rounded whitespace-nowrap"
                      style={{ backgroundColor: discipline.accent }}
                    >
                      Kjerne
                    </div>
                  )}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#333333] mb-3">
                      {phase.name}
                    </h3>
                    <ul className="space-y-2">
                      {phase.points.map((point) => (
                        <li
                          key={point}
                          className="text-[15px] leading-relaxed text-[#333333] pl-3 relative before:content-['•'] before:absolute before:left-0"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
