import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  jbcfRoadSeriesSchedule2026,
  type JbcfScheduleItem,
} from "@/data/jbcfRoadSeriesSchedule2026";

function scheduleAccent(item: JbcfScheduleItem): string {
  const s = item.series.toUpperCase();
  if (s.includes("JPT"))
    return "border-l-[3px] border-l-amber-500 bg-amber-500/5";
  if (s.includes("JCT"))
    return "border-l-[3px] border-l-emerald-500 bg-emerald-500/5";
  if (s.startsWith("E"))
    return "border-l-[3px] border-l-sky-500 bg-sky-500/5";
  return "border-l-[3px] border-l-gray-500 bg-white/5";
}

function tagClass(item: JbcfScheduleItem): string {
  const s = item.series.toUpperCase();
  if (s.includes("JPT")) return "bg-amber-500/20 text-amber-200 border border-amber-500/40";
  if (s.includes("JCT"))
    return "bg-emerald-500/20 text-emerald-100 border border-emerald-500/40";
  if (s.startsWith("E"))
    return "bg-sky-500/20 text-sky-100 border border-sky-500/40";
  return "bg-white/10 text-gray-200 border border-white/20";
}

export default function JbcfRoadSeriesSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="jbcf-road-series"
      ref={sectionRef}
      className="w-full bg-dark py-10 md:py-14 lg:py-16 px-4 md:px-6 lg:px-10"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-8 md:mb-10">
          <span className="text-sm font-medium text-gray-light uppercase tracking-[0.2em] block mb-2">
            {t("jbcfRoadSeries.label")}
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-white leading-tight mb-3">
            {t("jbcfRoadSeries.title")}
          </h2>
          <p className="text-accent font-display font-semibold text-base md:text-lg tracking-wide">
            {t("jbcfRoadSeries.season")}
          </p>
          <p className="text-gray-light text-xs md:text-sm mt-3 max-w-2xl mx-auto leading-relaxed">
            {t("jbcfRoadSeries.note")}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-white/90 uppercase tracking-wider mb-4">
            {t("jbcfRoadSeries.scheduleHeading")}
          </h3>
          <ul className="space-y-2.5">
            {jbcfRoadSeriesSchedule2026.map((item, idx) => (
              <li
                key={`${item.series}-${item.date}-${idx}`}
                className={`rounded-lg pl-3 pr-3 py-3 md:py-3.5 flex flex-col gap-2 md:flex-row md:items-center md:gap-4 ${scheduleAccent(
                  item
                )}`}
              >
                <div className="flex flex-wrap items-center gap-2 md:w-[min(100%,280px)] shrink-0">
                  <span
                    className={`inline-block text-xs font-bold px-2.5 py-1 rounded-md ${tagClass(
                      item
                    )}`}
                  >
                    {item.series}
                  </span>
                  <span className="text-sm text-gray-300">{item.date}</span>
                </div>
                <p className="text-sm md:text-base text-white/95 flex-1 leading-snug">
                  {item.title}
                </p>
                <div className="shrink-0 md:text-right">
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-white transition-colors"
                    >
                      <i className="ri-youtube-fill text-lg" />
                      YouTube LIVE
                    </a>
                  ) : item.pending ? (
                    <span className="text-xs font-medium text-amber-400/95">
                      ※調整中
                    </span>
                  ) : (
                    <span className="text-xs text-gray-500">
                      {t("jbcfRoadSeries.linkLater")}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
