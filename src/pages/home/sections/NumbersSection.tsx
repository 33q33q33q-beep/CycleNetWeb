import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function NumbersSection() {
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

  const stats = [
    { value: t("works.races"), label: t("works.races.label") },
    { value: t("works.subscribers"), label: t("works.subscribers.label") },
    { value: t("works.views"), label: t("works.views.label") },
    { value: t("works.accounts"), label: t("works.accounts.label") },
  ];

  const badges = [
    { value: t("works.since"), label: t("works.since.label") },
    { value: t("works.gcups"), label: t("works.gcups.label") },
  ];

  return (
    <section
      id="works"
      ref={sectionRef}
      className="w-full bg-dark-card py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10"
    >
      <div className="text-center mb-16 md:mb-20">
        <span className="text-sm font-medium text-gray-light uppercase tracking-[0.2em] block mb-3">
          {t("works.label")}
        </span>
        <h3 className="text-sm font-medium text-accent uppercase tracking-[0.3em] mb-6">
          {t("works.subtitle")}
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
          {t("works.title")}
        </h2>
      </div>

      {/* Big Numbers */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className={`text-center ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: visible ? `${idx * 100}ms` : "0ms",
              transitionProperty: "opacity, transform",
              transitionDuration: "700ms",
            }}
          >
            <div className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-accent mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-gray-light uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Badges */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: visible ? `${idx * 120 + 400}ms` : "0ms",
              transitionProperty: "opacity, transform",
              transitionDuration: "700ms",
            }}
          >
            <span className="text-base font-bold text-white">
              {badge.value}
            </span>
            <span className="text-sm text-gray-light">
              {badge.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}