import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";

export default function CorrespondentPage() {
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
              src="https://readdy.ai/api/search-image?query=A%20cycling%20race%20spectator%20crowd%20cheering%20along%20the%20roadside%2C%20enthusiastic%20fans%20holding%20cameras%20and%20smartphones%2C%20warm%20golden%20afternoon%20lighting%2C%20road%20race%20atmosphere%2C%20Japanese%20cycling%20fans%2C%20energetic%20crowd%2C%20motion%20blur%2C%20warm%20amber%20tones%20with%20dark%20shadows%2C%20no%20blue%20or%20purple%20colors%2C%20documentary%20photography%20style&width=1920&height=800&seq=correspondent-hero&orientation=landscape"
              alt="Correspondent"
              className="w-full h-full object-cover object-center opacity-60"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-6">
            <span className="text-accent text-sm md:text-base font-medium uppercase tracking-[0.3em] mb-4">
              GACHINKO CYCLE TV
            </span>
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-display font-black mb-6">
              {t("correspondent.title")}
            </h1>
            <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              {t("correspondent.desc")}
            </p>
            <a
              href={t("correspondent.mailtoApply")}
              className="inline-flex items-center gap-2 bg-accent text-dark text-base font-bold px-8 py-4 rounded-lg hover:bg-accent-hover transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              {t("correspondent.cta")}
              <i className="ri-arrow-right-line" />
            </a>
          </div>
        </section>

        {/* What is Correspondent */}
        <section className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <span className="text-sm font-medium text-gray-muted uppercase tracking-[0.2em] block mb-3">
                {t("correspondent.about.label")}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
                {t("correspondent.about.title")}
              </h2>
              <p className="text-base md:text-lg text-gray-secondary leading-relaxed mb-6">
                {t("correspondent.about.desc1")}
              </p>
              <p className="text-base md:text-lg text-gray-secondary leading-relaxed">
                {t("correspondent.about.desc2")}
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=A%20person%20holding%20a%20professional%20video%20camera%20at%20a%20cycling%20race%20finish%20line%2C%20photographer%20or%20videographer%20working%20at%20sports%20event%2C%20warm%20golden%20lighting%2C%20race%20atmosphere%2C%20media%20correspondent%2C%20professional%20filming%2C%20warm%20amber%20tones%20with%20dark%20shadows%2C%20no%20blue%20or%20purple%20colors%2C%20documentary%20style%20photography&width=800&height=600&seq=correspondent-cam&orientation=landscape"
                  alt="Correspondent filming"
                  className="w-full h-[350px] md:h-[450px] object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section ref={sectionRef} className="w-full bg-off-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
              {t("correspondent.benefits.title")}
            </h2>
            <p className="text-base md:text-lg text-gray-secondary max-w-2xl mx-auto">
              {t("correspondent.benefits.desc")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: "ri-vip-crown-line",
                title: t("correspondent.benefits.1.title"),
                desc: t("correspondent.benefits.1.desc"),
              },
              {
                icon: "ri-camera-line",
                title: t("correspondent.benefits.2.title"),
                desc: t("correspondent.benefits.2.desc"),
              },
              {
                icon: "ri-community-line",
                title: t("correspondent.benefits.3.title"),
                desc: t("correspondent.benefits.3.desc"),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-white border border-gray-200 rounded-xl p-8 text-center hover:border-accent transition-all duration-500 ${
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

        {/* Apply Form */}
        <section id="apply" className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark mb-6">
              {t("correspondent.apply.title")}
            </h2>
            <p className="text-base md:text-lg text-gray-secondary leading-relaxed mb-4">
              {t("correspondent.apply.desc")}
            </p>
            <p className="text-base text-dark font-medium mb-10">
              <a
                href={`mailto:${t("correspondent.apply.email")}`}
                className="text-accent hover:text-dark underline underline-offset-4"
              >
                {t("correspondent.apply.email")}
              </a>
            </p>
            <a
              href={t("correspondent.mailtoApply")}
              className="inline-flex items-center gap-2 bg-accent text-dark text-base font-bold px-10 py-4 rounded-lg hover:bg-accent-hover transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              {t("correspondent.form.submit")}
              <i className="ri-send-plane-line" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}