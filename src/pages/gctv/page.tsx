import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

export default function GCTVPage() {
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

  return (
    <div className="w-full">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-dark">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20cycling%20race%20broadcasting%20control%20room%20with%20multiple%20camera%20monitors%20showing%20live%20road%20race%20footage%2C%20modern%20video%20production%20studio%2C%20warm%20ambient%20lighting%2C%20sports%20media%20environment%2C%20cinematic%20composition%20with%20amber%20highlights%20and%20dark%20shadows%2C%20no%20blue%20or%20purple%20colors%2C%20dramatic%20atmosphere&width=1920&height=800&seq=gctv-hero&orientation=landscape"
              alt="GCTV"
              className="w-full h-full object-cover object-center opacity-60"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-6">
            <span className="text-accent text-sm md:text-base font-medium uppercase tracking-[0.3em] mb-4">
              GACHINKO CYCLE TV
            </span>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-display font-black mb-6">
              {t("gctv.title")}
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              {t("gctv.desc")}
            </p>
            <a
              href="https://www.youtube.com/@GachinkoCycleTV"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white text-base font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              <i className="ri-youtube-line text-xl" />
              {t("gctv.cta")}
            </a>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full bg-dark-card py-16 md:py-20 px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl md:text-5xl font-display font-black text-accent mb-2">
                30,100
              </div>
              <div className="text-sm text-gray-light">{t("gctv.stat.subscribers")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-black text-accent mb-2">
                6.1M+
              </div>
              <div className="text-sm text-gray-light">{t("gctv.stat.views")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-black text-accent mb-2">
                20+
              </div>
              <div className="text-sm text-gray-light">{t("gctv.stat.races")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-black text-accent mb-2">
                4
              </div>
              <div className="text-sm text-gray-light">{t("gctv.stat.platforms")}</div>
            </div>
          </div>
        </section>

        {/* Content Types */}
        <section ref={sectionRef} className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
              {t("gctv.content.title")}
            </h2>
            <p className="text-base md:text-lg text-gray-secondary max-w-2xl mx-auto">
              {t("gctv.content.desc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "ri-live-line",
                title: t("gctv.content.live.title"),
                desc: t("gctv.content.live.desc"),
              },
              {
                icon: "ri-movie-line",
                title: t("gctv.content.highlight.title"),
                desc: t("gctv.content.highlight.desc"),
              },
              {
                icon: "ri-article-line",
                title: t("gctv.content.doc.title"),
                desc: t("gctv.content.doc.desc"),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-off-white border border-gray-200 rounded-xl p-8 text-center hover:border-accent transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: visible ? `${idx * 120}ms` : "0ms",
                  transitionProperty: "opacity, transform, border-color",
                  transitionDuration: "700ms, 700ms, 500ms",
                }}
              >
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-dark rounded-xl">
                  <i className={`${item.icon} text-2xl text-accent`} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-gray-secondary leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}