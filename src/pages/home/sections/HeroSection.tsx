import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t } = useTranslation();
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    const timer = setTimeout(() => {
      el.style.transition = "opacity 1s ease-out, transform 1s ease-out";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const scrollDown = () => {
    const el = document.getElementById("concept");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/5XTYa3tvh04?autoplay=1&mute=1&loop=1&playlist=5XTYa3tvh04&controls=0&rel=0&playsinline=1&start=0"
          title="GachinkoCycleTV"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] pointer-events-none"
          style={{ border: "none" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80" />

      <div className="relative z-10 w-full h-full flex flex-col justify-between px-4 md:px-6 lg:px-10 py-6 md:py-10 lg:py-12">
        <div className="flex-1 flex flex-col justify-start pt-16 md:pt-24">
          <div ref={titleRef} className="max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-white/60 text-sm md:text-base font-medium uppercase tracking-[0.3em]">
                JBCF OFFICIAL INFORMATION SOURCE / SINCE 2022 / TOKYO
              </span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black tracking-tight leading-[0.95] mb-8">
              {t("hero.catchcopy")}
            </h1>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#solutions-btob"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("solutions-btob");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 bg-accent text-dark text-base md:text-lg font-bold px-8 py-4 rounded-lg hover:bg-accent-hover transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                {t("hero.cta.btob")}
                <i className="ri-arrow-right-line" />
              </a>
              <a
                href="#solutions-btoc"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("solutions-btoc");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 border-2 border-white/40 text-white text-base md:text-lg font-bold px-8 py-4 rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                {t("hero.cta.media")}
                <i className="ri-arrow-right-line" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-5xl">
          <p className="text-white/60 text-sm md:text-base whitespace-pre-line leading-relaxed">
            {t("hero.desc")}
          </p>
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-4 right-4 md:bottom-8 md:right-8 lg:bottom-12 lg:right-12 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full border-2 border-accent flex items-center justify-center cursor-pointer hover:bg-accent hover:border-accent transition-all duration-500 group z-10"
      >
        <i className="ri-arrow-down-line text-accent text-lg md:text-xl lg:text-2xl group-hover:text-dark transition-colors duration-500" />
      </button>
    </section>
  );
}
