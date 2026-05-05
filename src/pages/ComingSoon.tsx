import { Link } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { useTranslation } from "react-i18next";

export default function ComingSoon() {
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-off-white px-6 py-24">
        <div className="text-center max-w-lg">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
            {t("comingSoon.title")}
          </h1>
          <p className="text-gray-secondary text-base md:text-lg leading-relaxed mb-8">
            {t("comingSoon.desc")}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-accent font-bold hover:text-dark transition-colors"
          >
            {t("comingSoon.back")}
            <i className="ri-arrow-left-line" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
