import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function TeamSection() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const companies: {
    category: string;
    name: string;
    role: string;
    accent: "sky" | "red" | "emerald" | "orange";
  }[] = [
    {
      category: t("team.company1.category"),
      name: t("team.company1.name"),
      role: t("team.company1.role"),
      accent: "sky",
    },
    {
      category: t("team.company2.category"),
      name: t("team.company2.name"),
      role: t("team.company2.role"),
      accent: "red",
    },
    {
      category: t("team.company3.category"),
      name: t("team.company3.name"),
      role: t("team.company3.role"),
      accent: "emerald",
    },
    {
      category: t("team.company4.category"),
      name: t("team.company4.name"),
      role: t("team.company4.role"),
      accent: "orange",
    },
  ];

  const accentClass: Record<
    (typeof companies)[number]["accent"],
    string
  > = {
    sky: "border-l-sky-500 bg-sky-50/70",
    red: "border-l-red-600 bg-red-50/70",
    emerald: "border-l-emerald-500 bg-emerald-50/70",
    orange: "border-l-orange-500 bg-orange-50/70",
  };

  return (
    <section
      id="team"
      ref={sectionRef}
      className="w-full bg-gradient-to-b from-sky-50/70 via-accent/15 to-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10 border-t border-accent/25"
    >
      <div className="max-w-6xl xl:max-w-7xl mx-auto text-center rounded-2xl bg-white/85 backdrop-blur-sm border border-accent/20 shadow-sm px-4 py-5 sm:px-5 sm:py-6 md:px-12 md:py-7 mb-10 sm:mb-12 md:mb-14">
        <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-[0.2em] block mb-2 sm:mb-2.5">
          {t("team.label")}
        </span>
        <h2 className="font-display font-bold text-dark leading-snug mb-4 sm:mb-5 text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          <span className="lg:hidden whitespace-pre-line block">
            {t("team.titleMobile")}
          </span>
          <span className="hidden lg:inline lg:whitespace-nowrap">
            {t("team.title")}
          </span>
        </h2>
        <p className="text-gray-secondary leading-relaxed whitespace-pre-line max-w-4xl mx-auto text-sm sm:text-base md:text-lg lg:hidden">
          {t("team.descMobile")}
        </p>
        <p className="text-gray-secondary text-base md:text-lg leading-relaxed whitespace-pre-line max-w-4xl mx-auto hidden lg:block">
          {t("team.desc")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {companies.map((company, idx) => (
          <div
            key={idx}
            className={`group relative rounded-xl border border-gray-200/90 border-l-[4px] sm:border-l-[5px] pl-4 pr-4 py-4 sm:pl-5 sm:pr-5 sm:py-5 md:pl-6 md:pr-6 md:py-6 hover:shadow-md transition-all duration-500 ${accentClass[company.accent]} ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: visible ? `${idx * 100}ms` : "0ms",
              transitionProperty: "opacity, transform, box-shadow",
              transitionDuration: "700ms, 700ms, 500ms",
            }}
          >
            <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wider block mb-2 sm:mb-3">
              {company.category}
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-dark mb-2 sm:mb-3 leading-snug">
              {company.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-secondary leading-relaxed">
              {company.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}