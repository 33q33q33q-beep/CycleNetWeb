import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type RaceTone = "amber" | "emerald" | "sky" | "violet";

const raceToneClass: Record<
  RaceTone,
  { card: string; iconWrap: string; icon: string }
> = {
  amber: {
    card: "border border-amber-200/80 bg-white border-l-[3px] border-l-amber-500",
    iconWrap:
      "border border-amber-200/90 bg-transparent text-amber-800",
    icon: "text-amber-600",
  },
  emerald: {
    card: "border border-emerald-200/80 bg-white border-l-[3px] border-l-emerald-500",
    iconWrap:
      "border border-emerald-200/90 bg-transparent text-emerald-800",
    icon: "text-emerald-600",
  },
  sky: {
    card: "border border-sky-200/80 bg-white border-l-[3px] border-l-sky-500",
    iconWrap: "border border-sky-200/90 bg-transparent text-sky-800",
    icon: "text-sky-600",
  },
  violet: {
    card: "border border-violet-200/80 bg-white border-l-[3px] border-l-violet-500",
    iconWrap:
      "border border-violet-200/90 bg-transparent text-violet-800",
    icon: "text-violet-600",
  },
};

export default function PlatformSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [logoSrc, setLogoSrc] = useState("/gctv-logo.png");

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

  const raceTypes: {
    title: string;
    desc: string;
    icon: string;
    tone: RaceTone;
  }[] = [
    {
      title: t("platform.road.title"),
      desc: t("platform.road.desc"),
      icon: "ri-road-map-line",
      tone: "amber",
    },
    {
      title: t("platform.hillclimb.title"),
      desc: t("platform.hillclimb.desc"),
      icon: "ri-landscape-line",
      tone: "emerald",
    },
    {
      title: t("platform.criterium.title"),
      desc: t("platform.criterium.desc"),
      icon: "ri-building-line",
      tone: "sky",
    },
    {
      title: t("platform.stage.title"),
      desc: t("platform.stage.desc"),
      icon: "ri-calendar-event-line",
      tone: "violet",
    },
  ];

  return (
    <section
      id="platform"
      ref={sectionRef}
      className="w-full bg-off-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10"
    >
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div
          className={`lg:w-[45%] transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-gray-muted uppercase tracking-[0.2em] block mb-3">
            {t("platform.label")}
          </span>
          <h3 className="text-sm font-medium text-accent uppercase tracking-[0.3em] mb-5">
            {t("platform.subtitle")}
          </h3>

          <div className="flex flex-col sm:flex-row sm:items-start gap-5 md:gap-6 mb-6">
            <h2 className="flex-1 text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark leading-tight whitespace-pre-line">
              {t("platform.title")}
            </h2>
            <div className="shrink-0 flex justify-center sm:justify-end sm:pt-1">
              <img
                src={logoSrc}
                alt={t("platform.gctvLogoAlt")}
                className="w-[7.5rem] h-[7.5rem] md:w-[8.5rem] md:h-[8.5rem] object-contain drop-shadow-sm"
                onError={() => setLogoSrc("/gctv-logo.svg")}
              />
            </div>
          </div>

          <p className="text-gray-secondary text-base md:text-lg leading-relaxed">
            {t("platform.desc")}
          </p>
        </div>

        <div
          className={`lg:w-[55%] transition-all duration-1000 delay-200 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
            {raceTypes.map((race, idx) => {
              const tone = raceToneClass[race.tone];
              return (
                <div
                  key={idx}
                  className={`rounded-lg py-3 px-3 md:py-3 md:px-3.5 hover:shadow-sm transition-all duration-500 flex flex-col ${
                    tone.card
                  } ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: visible ? `${idx * 100}ms` : "0ms",
                    transitionProperty: "opacity, transform, box-shadow",
                    transitionDuration: "500ms",
                  }}
                >
                  <div className="flex items-start gap-2.5">
                    <div
                      className={`w-8 h-8 shrink-0 rounded-md flex items-center justify-center ${tone.iconWrap}`}
                    >
                      <i className={`${race.icon} text-base ${tone.icon}`} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base md:text-lg font-bold text-dark leading-snug">
                        {race.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-secondary leading-snug mt-1">
                        {race.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
