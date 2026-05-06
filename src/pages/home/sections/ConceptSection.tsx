import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ConceptSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pillars: {
    label: string;
    title: string;
    desc: string;
    accent: "sky" | "amber" | "emerald" | "violet";
  }[] = [
    {
      label: t("concept.watch.label"),
      title: t("concept.watch.title"),
      desc: t("concept.watch.desc"),
      accent: "sky",
    },
    {
      label: t("concept.ride.label"),
      title: t("concept.ride.title"),
      desc: t("concept.ride.desc"),
      accent: "amber",
    },
    {
      label: t("concept.support.label"),
      title: t("concept.support.title"),
      desc: t("concept.support.desc"),
      accent: "emerald",
    },
    {
      label: t("concept.connect.label"),
      title: t("concept.connect.title"),
      desc: t("concept.connect.desc"),
      accent: "violet",
    },
  ];

  const pillarTone: Record<
    (typeof pillars)[number]["accent"],
    string
  > = {
    sky: "border-l-[4px] border-l-sky-500 bg-sky-50/85",
    amber: "border-l-[4px] border-l-amber-500 bg-amber-50/85",
    emerald: "border-l-[4px] border-l-emerald-500 bg-emerald-50/85",
    violet: "border-l-[4px] border-l-violet-500 bg-violet-50/85",
  };

  return (
    <section
      id="concept"
      ref={sectionRef}
      className="w-full bg-off-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10"
    >
      <div className="mb-16 md:mb-20">
        <span className="text-sm font-medium text-gray-muted uppercase tracking-[0.2em] block mb-4">
          {t("concept.label")} — ONE LOOP
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark leading-tight mb-6 sm:whitespace-nowrap">
          {t("concept.title")}
        </h2>
        <p className="text-gray-secondary text-base md:text-lg leading-relaxed max-w-3xl">
          {t("concept.desc")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className={`group relative rounded-xl border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-500 cursor-pointer pl-5 pr-5 py-6 md:pl-6 md:pr-6 md:py-7 ${pillarTone[pillar.accent]} ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: visible ? `${idx * 120}ms` : "0ms",
              transitionProperty: "opacity, transform, box-shadow",
              transitionDuration: "700ms, 700ms, 500ms",
            }}
          >
            <div className="flex items-start gap-4 md:gap-5">
              <span className="text-4xl md:text-5xl font-display font-black text-accent/35 group-hover:text-accent/55 transition-colors duration-500 shrink-0 w-[2.5rem] md:w-[3rem]">
                {pillar.label}
              </span>
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-bold text-dark mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-sm md:text-base text-gray-secondary leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
