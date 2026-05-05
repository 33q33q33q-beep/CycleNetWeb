import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function MascotSection() {
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

  return (
    <section
      ref={sectionRef}
      className="w-full bg-off-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10"
    >
      <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-center">
        <div
          className={`lg:w-[50%] transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-gray-muted uppercase tracking-[0.2em] block mb-3">
            {t("mascot.label")}
          </span>
          <h3 className="text-sm font-medium text-accent uppercase tracking-[0.3em] mb-6">
            {t("mascot.subtitle")}
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark leading-tight mb-6 whitespace-pre-line">
            {t("mascot.title")}
          </h2>
          <p className="text-gray-secondary text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            {t("mascot.desc")}
          </p>
        </div>

        <div
          className={`lg:w-[50%] transition-all duration-1000 delay-200 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src="https://storage.readdy-site.link/project_files/4afc52e3-610c-4324-8fa8-529f351bda22/d56fac29-ff2b-4c0c-85d6-a355c1e2e33d_-2026-05-04-19.32.10.png?v=6eee1a787af5a95486960b9ea2f88a13"
              alt="Gachi-Neko mascot character"
              className="w-full h-[350px] md:h-[450px] object-contain object-center bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}