import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function BtoBSection() {
  const { t } = useTranslation();
  const btobRef = useRef<HTMLDivElement>(null);
  const btocRef = useRef<HTMLDivElement>(null);
  const [btobVisible, setBtobVisible] = useState(false);
  const [btocVisible, setBtocVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBtobVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (btobRef.current) observer.observe(btobRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBtocVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (btocRef.current) observer.observe(btocRef.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      label: t("btob.step1.label"),
      title: t("btob.step1.title"),
      desc: t("btob.step1.desc"),
    },
    {
      label: t("btob.step2.label"),
      title: t("btob.step2.title"),
      desc: t("btob.step2.desc"),
    },
    {
      label: t("btob.step3.label"),
      title: t("btob.step3.title"),
      desc: t("btob.step3.desc"),
    },
    {
      label: t("btob.step4.label"),
      title: t("btob.step4.title"),
      desc: t("btob.step4.desc"),
    },
  ];

  const targets: {
    title: string;
    desc: string;
    icon: string;
    tone: "amber" | "emerald" | "violet";
  }[] = [
    {
      title: t("btob.manufacturers.title"),
      desc: t("btob.manufacturers.desc"),
      icon: "ri-tools-line",
      tone: "amber",
    },
    {
      title: t("btob.cities.title"),
      desc: t("btob.cities.desc"),
      icon: "ri-building-2-line",
      tone: "emerald",
    },
    {
      title: t("btob.companies.title"),
      desc: t("btob.companies.desc"),
      icon: "ri-briefcase-line",
      tone: "violet",
    },
  ];

  const targetTone: Record<
    (typeof targets)[number]["tone"],
    { card: string; iconBg: string; icon: string }
  > = {
    amber: {
      card: "border-amber-200/90 bg-amber-50/90 border-l-[4px] border-l-amber-500",
      iconBg: "bg-amber-100 text-amber-800",
      icon: "text-amber-700",
    },
    emerald: {
      card: "border-emerald-200/90 bg-emerald-50/90 border-l-[4px] border-l-emerald-500",
      iconBg: "bg-emerald-100 text-emerald-800",
      icon: "text-emerald-700",
    },
    violet: {
      card: "border-violet-200/90 bg-violet-50/90 border-l-[4px] border-l-violet-500",
      iconBg: "bg-violet-100 text-violet-800",
      icon: "text-violet-700",
    },
  };

  const correspondentMail =
    "mailto:info@cycle-net.jp?subject=" +
    encodeURIComponent("GCTV 特派員応募");

  const communityMail = "mailto:info@cycle-net.jp";

  const btocFanTone: Record<
    "sky" | "amber" | "emerald" | "violet",
    string
  > = {
    sky: "border-l-[4px] border-l-sky-500 bg-sky-50/85",
    amber: "border-l-[4px] border-l-amber-500 bg-amber-50/85",
    emerald: "border-l-[4px] border-l-emerald-500 bg-emerald-50/85",
    violet: "border-l-[4px] border-l-violet-500 bg-violet-50/85",
  };

  const btocFanPillars: {
    label: string;
    title: string;
    desc: string;
    tone: keyof typeof btocFanTone;
  }[] = [
    {
      label: t("btoc.fan01.label"),
      title: t("btoc.fan01.title"),
      desc: t("btoc.fan01.desc"),
      tone: "sky",
    },
    {
      label: t("btoc.fan02.label"),
      title: t("btoc.fan02.title"),
      desc: t("btoc.fan02.desc"),
      tone: "amber",
    },
    {
      label: t("btoc.fan03.label"),
      title: t("btoc.fan03.title"),
      desc: t("btoc.fan03.desc"),
      tone: "emerald",
    },
    {
      label: t("btoc.fan04.label"),
      title: t("btoc.fan04.title"),
      desc: t("btoc.fan04.desc"),
      tone: "violet",
    },
  ];

  return (
    <section id="solutions" className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10">
      {/* BtoB Section */}
      <div id="solutions-btob" ref={btobRef} className="mb-16 md:mb-24 lg:mb-32">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-sm font-medium text-gray-muted uppercase tracking-[0.2em] block mb-3">
            {t("btob.label")}
          </span>
          <h3 className="text-sm font-medium text-accent uppercase tracking-[0.3em] mb-6">
            {t("btob.subtitle")}
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-display font-bold text-dark leading-snug mb-6 max-w-5xl mx-auto tracking-tight">
            {t("btob.title")}
          </h2>
          <p className="text-base md:text-lg text-gray-secondary leading-relaxed max-w-2xl mx-auto">
            {t("btob.desc")}
          </p>
        </div>

        {/* Value Chain Steps */}
        <div className="mb-16 md:mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative bg-dark-card rounded-xl p-6 md:p-8 text-white ${
                  btobVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: btobVisible ? `${idx * 120}ms` : "0ms",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "700ms",
                }}
              >
                <span className="text-sm font-medium text-accent uppercase tracking-wider block mb-3">
                  {step.label}
                </span>
                <h4 className="text-lg md:text-xl font-bold mb-2">
                  {step.title}
                </h4>
                <p className="text-base text-gray-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audiences */}
        <h3 className="text-center text-lg md:text-xl font-display font-bold text-dark mb-6 md:mb-8 tracking-tight">
          {t("btob.targetsHeading")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {targets.map((target, idx) => {
            const tone = targetTone[target.tone];
            return (
              <div
                key={idx}
                className={`group rounded-xl border p-5 md:p-6 hover:shadow-md transition-all duration-500 ${tone.card} ${
                  btobVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: btobVisible ? `${idx * 150 + 400}ms` : "0ms",
                  transitionProperty: "opacity, transform, box-shadow",
                  transitionDuration: "700ms, 700ms, 500ms",
                }}
              >
                <div
                  className={`w-11 h-11 flex items-center justify-center mb-4 rounded-lg ${tone.iconBg}`}
                >
                  <i className={`${target.icon} text-xl ${tone.icon}`} />
                </div>
                <h4 className="text-base md:text-lg font-bold text-dark mb-2 whitespace-pre-line leading-snug">
                  {target.title}
                </h4>
                <p className="text-sm text-gray-secondary leading-relaxed whitespace-pre-line">
                  {target.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* BtoC Section */}
      <div id="solutions-btoc" ref={btocRef}>
        <div className="text-center mb-12 md:mb-16">
          <span className="text-sm font-medium text-gray-muted uppercase tracking-[0.2em] block mb-3">
            {t("btoc.label")}
          </span>
          <h3 className="text-sm font-medium text-accent uppercase tracking-[0.3em] mb-6">
            {t("btoc.subtitle")}
          </h3>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold text-dark leading-tight mb-5 max-w-3xl mx-auto">
            {t("btoc.title")}
          </h2>
          <p className="text-lg md:text-xl font-semibold text-dark mb-4 max-w-3xl mx-auto leading-snug">
            {t("btoc.leadShort")}
          </p>
          <p className="text-base md:text-lg text-gray-secondary leading-relaxed max-w-3xl mx-auto whitespace-pre-line">
            {t("btoc.leadLong")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {btocFanPillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`group rounded-xl border border-gray-200/90 shadow-sm hover:shadow-md transition-all duration-500 pl-5 pr-5 py-6 md:pl-6 md:pr-6 md:py-7 ${btocFanTone[pillar.tone]} ${
                btocVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: btocVisible ? `${idx * 120}ms` : "0ms",
                transitionProperty: "opacity, transform, box-shadow",
                transitionDuration: "700ms, 700ms, 500ms",
              }}
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl md:text-5xl font-display font-black text-accent/35 shrink-0 w-[2.5rem] md:w-[3rem]">
                  {pillar.label}
                </span>
                <div className="min-w-0">
                  <h4 className="text-lg md:text-xl font-bold text-dark mb-2 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-secondary leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-5">
          <Link
            to="/gctv"
            className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-bold text-dark hover:bg-accent hover:border-accent transition-colors"
          >
            <i className="ri-youtube-line text-lg" />
            {t("btoc.gctv.link")}
          </Link>
          <a
            href={correspondentMail}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-bold text-dark hover:border-accent transition-colors"
          >
            <i className="ri-mail-send-line text-lg text-accent" />
            {t("btoc.correspondent.applyLink")}
          </a>
          <a
            href={communityMail}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-bold text-dark hover:border-accent transition-colors"
          >
            <i className="ri-calendar-event-line text-lg text-accent" />
            {t("btoc.events.link")}
          </a>
          <Link
            to="/coming-soon"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2.5 text-sm font-bold text-dark hover:border-accent transition-colors"
          >
            <i className="ri-group-line text-lg text-accent" />
            {t("btoc.community.link")}
          </Link>
        </div>
      </div>
    </section>
  );
}