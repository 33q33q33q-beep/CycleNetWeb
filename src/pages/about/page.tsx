import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { useTranslation } from "react-i18next";

function CvLines({ translationKey }: { translationKey: string }) {
  const { t } = useTranslation();
  const lines = t(translationKey).split("\n").filter(Boolean);
  return (
    <>
      {lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </>
  );
}

function CvLinesBoldFirst({ translationKey }: { translationKey: string }) {
  const { t } = useTranslation();
  const lines = t(translationKey).split("\n").filter(Boolean);
  if (lines.length === 0) return null;
  return (
    <>
      <p className="text-dark font-medium mb-1">{lines[0]}</p>
      {lines.slice(1).map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </>
  );
}

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <Navbar />
      <main className="pt-16 md:pt-[4.75rem]">
        <section className="relative w-full min-h-0 py-12 md:py-14 lg:py-16 overflow-hidden bg-off-white flex items-center justify-center">
          <div className="text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-dark mb-6">
              {t("aboutPage.hero.titleBefore")}
              <span className="text-accent">{t("aboutPage.hero.titleAccent")}</span>
            </h1>
            <div className="text-lg md:text-xl text-gray-secondary max-w-3xl mx-auto leading-relaxed space-y-6">
              <p>{t("aboutPage.hero.lead1")}</p>
              <p>{t("aboutPage.hero.lead2")}</p>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 pb-4 border-b border-gray-200">
              {t("aboutPage.business.title")}
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-secondary leading-relaxed mb-12">
              <p>{t("aboutPage.business.p1")}</p>
              <p>{t("aboutPage.business.p2")}</p>
              <p>{t("aboutPage.business.p3")}</p>
            </div>

            <div className="bg-off-white rounded-xl p-6 md:p-10 mb-12">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-4 border-b border-gray-200">
                  <span className="text-sm text-gray-muted w-32 shrink-0">{t("aboutPage.company.nameLabel")}</span>
                  <span className="text-base text-dark font-medium">{t("aboutPage.company.name")}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-4 border-b border-gray-200">
                  <span className="text-sm text-gray-muted w-32 shrink-0">{t("aboutPage.company.foundedLabel")}</span>
                  <span className="text-base text-dark font-medium">{t("aboutPage.company.founded")}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-4 border-b border-gray-200">
                  <span className="text-sm text-gray-muted w-32 shrink-0">{t("aboutPage.company.addressLabel")}</span>
                  <span className="text-base text-dark font-medium">{t("aboutPage.company.address")}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-4 border-b border-gray-200">
                  <span className="text-sm text-gray-muted w-32 shrink-0">{t("aboutPage.company.ceoLabel")}</span>
                  <span className="text-base text-dark font-medium">{t("aboutPage.company.ceo")}</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 pb-4 border-b border-gray-200">
              {t("aboutPage.cv.title")}
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-accent font-bold text-sm w-16 shrink-0 pt-1">1987</span>
                <div className="text-base text-gray-secondary leading-relaxed">
                  <CvLinesBoldFirst translationKey="aboutPage.cv.y1987" />
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-bold text-sm w-16 shrink-0 pt-1">2005</span>
                <div className="text-base text-gray-secondary leading-relaxed">
                  <CvLines translationKey="aboutPage.cv.y2005" />
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-bold text-sm w-16 shrink-0 pt-1">2006</span>
                <div className="text-base text-gray-secondary leading-relaxed">
                  <CvLines translationKey="aboutPage.cv.y2006" />
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-bold text-sm w-16 shrink-0 pt-1">2011</span>
                <div className="text-base text-gray-secondary leading-relaxed">
                  <CvLines translationKey="aboutPage.cv.y2011" />
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-bold text-sm w-16 shrink-0 pt-1">2019</span>
                <div className="text-base text-gray-secondary leading-relaxed">
                  <CvLines translationKey="aboutPage.cv.y2019" />
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-bold text-sm w-16 shrink-0 pt-1">2024</span>
                <div className="text-base text-gray-secondary leading-relaxed">
                  <p className="text-dark font-medium">{t("aboutPage.cv.y2024")}</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">{t("aboutPage.contact.title")}</h2>
              <p className="text-base text-gray-secondary mb-4">{t("aboutPage.contact.lead")}</p>
              <a
                href="mailto:info@cycle-net.jp"
                className="inline-flex items-center gap-2 text-accent font-bold text-lg hover:text-dark transition-colors duration-300"
              >
                <i className="ri-mail-line" />
                info@cycle-net.jp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
