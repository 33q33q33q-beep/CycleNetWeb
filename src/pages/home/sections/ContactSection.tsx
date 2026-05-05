import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function ContactSection() {
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

  const links: {
    label: string;
    to: string;
    icon: string;
    accent: "sky" | "amber" | "red" | "emerald";
  }[] = [
    {
      label: t("contact.link.jbcf"),
      to: "/jbcf",
      icon: "ri-road-map-line",
      accent: "sky",
    },
    {
      label: t("contact.link.sponsor"),
      to: "/sponsor",
      icon: "ri-award-line",
      accent: "amber",
    },
    {
      label: t("contact.link.live"),
      to: "/live",
      icon: "ri-video-on-line",
      accent: "red",
    },
    {
      label: t("contact.link.about"),
      to: "/about",
      icon: "ri-building-line",
      accent: "emerald",
    },
  ];

  const accentCard: Record<(typeof links)[number]["accent"], string> = {
    sky: "border-l-sky-500 bg-sky-50/80",
    amber: "border-l-amber-500 bg-amber-50/80",
    red: "border-l-red-600 bg-red-50/80",
    emerald: "border-l-emerald-500 bg-emerald-50/80",
  };

  const accentIcon: Record<(typeof links)[number]["accent"], string> = {
    sky:
      "border-sky-200/90 bg-white text-sky-700 group-hover:border-sky-400",
    amber:
      "border-amber-200/90 bg-white text-amber-700 group-hover:border-amber-400",
    red: "border-red-200/90 bg-white text-red-700 group-hover:border-red-400",
    emerald:
      "border-emerald-200/90 bg-white text-emerald-700 group-hover:border-emerald-400",
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10"
    >
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark leading-tight mb-4">
          {t("contact.title")}
        </h2>
        <p className="text-2xl md:text-3xl font-display font-bold text-accent mb-4">
          {t("contact.subtitle")}
        </p>
        <p className="text-gray-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
          {t("contact.desc")}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Link Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className={`group flex items-center gap-3 sm:gap-4 rounded-xl border border-gray-200/90 border-l-[4px] sm:border-l-[5px] py-4 px-4 sm:px-5 shadow-sm hover:shadow-md transition-all duration-300 ${accentCard[link.accent]}`}
            >
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg border transition-all duration-300 shrink-0 ${accentIcon[link.accent]}`}
              >
                <i className={`${link.icon} text-xl sm:text-2xl`} />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-base md:text-lg font-bold text-dark block truncate">
                  {link.label}
                </span>
              </div>
              <i className="ri-arrow-right-line text-xl text-gray-muted group-hover:text-accent transition-colors duration-300 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}