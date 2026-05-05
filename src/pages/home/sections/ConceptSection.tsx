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

  const pillars = [
    {
      label: t("concept.watch.label"),
      title: t("concept.watch.title"),
      desc: t("concept.watch.desc"),
    },
    {
      label: t("concept.ride.label"),
      title: t("concept.ride.title"),
      desc: t("concept.ride.desc"),
    },
    {
      label: t("concept.support.label"),
      title: t("concept.support.title"),
      desc: t("concept.support.desc"),
    },
    {
      label: t("concept.connect.label"),
      title: t("concept.connect.title"),
      desc: t("concept.connect.desc"),
    },
  ];

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className={`group relative bg-white border border-gray-200 rounded-xl p-8 md:p-10 hover:border-accent transition-all duration-500 cursor-pointer ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: visible ? `${idx * 120}ms` : "0ms",
              transitionProperty: "opacity, transform, border-color",
              transitionDuration: "700ms, 700ms, 500ms",
            }}
          >
            <div className="flex items-start gap-6">
              <span className="text-5xl md:text-6xl font-display font-black text-accent/20 group-hover:text-accent/40 transition-colors duration-500">
                {pillar.label}
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-dark mb-3">
                  {pillar.title}
                </h3>
                <p className="text-base text-gray-secondary leading-relaxed">
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
