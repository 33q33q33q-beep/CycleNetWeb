import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const EXPOSURE_IMAGES = [
  "https://www.cycle-net.jp/images/sponsored/spd05.jpg",
  "https://www.cycle-net.jp/images/sponsored/spd06.jpg",
  "https://www.cycle-net.jp/images/sponsored/spd07.jpg",
  "https://www.cycle-net.jp/images/sponsored/spd08.jpg",
  "https://www.cycle-net.jp/images/sponsored/spd09.jpg",
  "https://www.cycle-net.jp/images/sponsored/spd10.jpg",
] as const;

const GCTV_IMAGES = [
  "https://www.cycle-net.jp/images/sponsored/spdg01.jpg",
  "https://www.cycle-net.jp/images/sponsored/spdg02.jpg",
  "https://www.cycle-net.jp/images/sponsored/spdg03.jpg",
  "https://www.cycle-net.jp/images/sponsored/spdg04.jpg",
  "https://www.cycle-net.jp/images/sponsored/spdg05.jpg",
  "https://www.cycle-net.jp/images/sponsored/spdg06.jpg",
  "https://www.cycle-net.jp/images/sponsored/spdg07.jpg",
  "https://www.cycle-net.jp/images/sponsored/spdg08.jpg",
  "https://www.cycle-net.jp/images/sponsored/spdg09.jpg",
] as const;

export default function SponsorPage() {
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

  const exposures = EXPOSURE_IMAGES.map((img, idx) => {
    const n = idx + 1;
    return {
      img,
      title: t(`sponsorPage.exp${n}.title`),
      desc: t(`sponsorPage.exp${n}.desc`),
    };
  });

  const gctvExposures = GCTV_IMAGES.map((img, idx) => {
    const n = idx + 1;
    return {
      img,
      title: t(`sponsorPage.g${n}.title`),
      desc: t(`sponsorPage.g${n}.desc`),
    };
  });

  const benefits = [1, 2, 3, 4].map((n) => ({
    title: t(`sponsorPage.b${n}.title`),
    desc: t(`sponsorPage.b${n}.desc`),
  }));

  const mediaStats = [
    "sponsorPage.media.stat1",
    "sponsorPage.media.stat2",
    "sponsorPage.media.stat3",
    "sponsorPage.media.stat4",
    "sponsorPage.media.stat5",
  ] as const;

  return (
    <div className="w-full">
      <Navbar />
      <main className="pt-16 md:pt-[4.75rem]">
        <section className="relative w-full overflow-hidden">
          <div className="w-full">
            <img
              src="https://www.cycle-net.jp/images/sponsored/main2026.jpg"
              alt={t("sponsorPage.hero.alt")}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full bg-off-white py-10 text-center px-6">
            <h1 className="text-2xl md:text-3xl font-display font-black text-dark mb-4">
              {t("sponsorPage.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-secondary mb-2">
              {t("sponsorPage.hero.sub")}
            </p>
            <a
              href="mailto:info@cycle-net.jp"
              className="inline-flex items-center gap-2 bg-accent text-dark text-base font-bold px-10 py-4 rounded-lg hover:bg-accent-hover transition-colors duration-300 cursor-pointer whitespace-nowrap mt-4"
            >
              {t("sponsorPage.hero.cta")}
            </a>
          </div>
        </section>

        <section className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-10 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-dark mb-6 max-w-4xl mx-auto leading-snug">
            {t("sponsorPage.recruit.before")}
            <span className="text-accent mx-1">{t("sponsorPage.recruit.year")}</span>
            {t("sponsorPage.recruit.after")}
          </h2>
        </section>

        <section className="w-full bg-off-white py-16 md:py-24 px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark text-center mb-4">
              {t("sponsorPage.gallery.h2.before")}
              <span className="text-accent">{t("sponsorPage.gallery.h2.year")}</span>
            </h2>
            <p className="text-lg text-gray-secondary text-center mb-12">
              {t("sponsorPage.gallery.sub")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {exposures.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                  <div className="w-full h-[200px] overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-base font-bold text-dark">{item.title}</p>
                    <p className="text-sm text-accent">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-bold text-dark mb-6 leading-snug max-w-3xl mx-auto">
              <span className="text-accent">{t("sponsorPage.guide.title")}</span>
            </h2>
            <p className="text-base text-gray-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
              {t("sponsorPage.guide.body")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
              <div className="bg-off-white rounded-lg p-3">
                <img src="https://www.cycle-net.jp/images/guidebook/gb01.jpg" alt={t("sponsorPage.guide.alt1")} className="w-full h-[120px] object-cover rounded" />
                <p className="text-xs text-gray-muted mt-2">{t("sponsorPage.guide.cap1")}</p>
              </div>
              <div className="bg-off-white rounded-lg p-3">
                <img src="https://www.cycle-net.jp/images/guidebook/gb02.jpg" alt={t("sponsorPage.guide.alt2")} className="w-full h-[120px] object-cover rounded" />
                <p className="text-xs text-gray-muted mt-2">{t("sponsorPage.guide.cap2")}</p>
              </div>
              <div className="bg-off-white rounded-lg p-3">
                <img src="https://www.cycle-net.jp/images/guidebook/gb03.jpg" alt={t("sponsorPage.guide.alt3")} className="w-full h-[120px] object-cover rounded" />
                <p className="text-xs text-gray-muted mt-2">{t("sponsorPage.guide.cap3")}</p>
              </div>
              <div className="bg-off-white rounded-lg p-3">
                <img src="https://www.cycle-net.jp/images/guidebook/gb04.jpg" alt={t("sponsorPage.guide.alt4")} className="w-full h-[120px] object-cover rounded" />
                <p className="text-xs text-gray-muted mt-2">{t("sponsorPage.guide.cap4")}</p>
              </div>
            </div>
            <a
              href="mailto:info@cycle-net.jp"
              className="inline-flex items-center gap-2 bg-accent text-dark text-base font-bold px-8 py-4 rounded-lg hover:bg-accent-hover transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              {t("sponsorPage.guide.cta")}
            </a>
          </div>
        </section>

        <section className="w-full bg-off-white py-16 md:py-24 px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark text-center mb-4">
              {t("sponsorPage.media.h2l1")}
              <br />
              <span className="text-accent">{t("sponsorPage.media.h2brand")}</span>
            </h2>
            <div className="bg-white rounded-xl p-6 md:p-8 mb-10 max-w-3xl mx-auto">
              <ul className="space-y-3 text-base text-gray-secondary">
                {[
                  "ri-youtube-line",
                  "ri-live-line",
                  "ri-eye-line",
                  "ri-tv-line",
                  "ri-article-line",
                ].map((icon, idx) => (
                  <li key={mediaStats[idx]} className="flex items-start gap-2">
                    <i className={`${icon} text-accent mt-1 shrink-0`} />
                    {t(mediaStats[idx])}
                  </li>
                ))}
              </ul>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-dark text-center mb-8">
              {t("sponsorPage.media.expoTitle")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gctvExposures.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                  <div className="w-full h-[180px] overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-sm font-bold text-dark">{item.title}</p>
                    <p className="text-xs text-accent mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section ref={sectionRef} className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark text-center mb-4">
              {t("sponsorPage.benefits.h2.before")}
              <span className="text-accent">{t("sponsorPage.benefits.h2.accent")}</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-dark text-center mb-12">
              {t("sponsorPage.benefits.h3.market")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-off-white border border-gray-200 rounded-xl p-6 md:p-8 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  } transition-all duration-700`}
                  style={{ transitionDelay: visible ? `${idx * 120}ms` : "0ms" }}
                >
                  <h4 className="text-lg font-bold text-dark mb-3">{item.title}</h4>
                  <p className="text-base text-gray-secondary leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-dark text-center mb-12">
              {t("sponsorPage.moti.h3")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {(["m1", "m2", "m3", "m4"] as const).map((key) => (
                <div key={key} className="bg-off-white border border-gray-200 rounded-xl p-6 md:p-8">
                  <h4 className="text-lg font-bold text-dark mb-3">{t(`sponsorPage.${key}.title`)}</h4>
                  <p className="text-base text-gray-secondary leading-relaxed">{t(`sponsorPage.${key}.body`)}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-dark text-center mb-12">
              {t("sponsorPage.rights.h3")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {([1, 2, 3, 4] as const).map((n) => (
                <div key={n} className="bg-off-white border border-gray-200 rounded-xl p-6 text-center">
                  <h4 className="text-base font-bold text-dark mb-2">{t(`sponsorPage.r${n}.title`)}</h4>
                  <p className="text-sm text-gray-secondary">{t(`sponsorPage.r${n}.desc`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-off-white py-12 md:py-16 lg:py-24 px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">{t("sponsorPage.bottom.title")}</h2>
          <p className="text-base text-gray-secondary mb-8 max-w-xl mx-auto">{t("sponsorPage.bottom.desc")}</p>
          <a
            href="mailto:info@cycle-net.jp"
            className="inline-flex items-center gap-2 bg-accent text-dark text-base font-bold px-10 py-4 rounded-lg hover:bg-accent-hover transition-colors duration-300 cursor-pointer whitespace-nowrap"
          >
            {t("sponsorPage.bottom.cta")}
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
