import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

export default function NotFound() {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16 md:pt-[4.75rem] flex flex-col items-center justify-center text-center px-4 py-16 relative">
        <h1 className="absolute bottom-0 text-9xl md:text-[12rem] font-black text-gray-50 select-none pointer-events-none z-0 leading-none">
          404
        </h1>
        <div className="relative z-10">
          <p className="text-sm font-mono text-gray-400 mb-2">{location.pathname}</p>
          <h1 className="text-xl md:text-2xl font-semibold text-dark">{t("notFound.title")}</h1>
          <p className="mt-3 text-base text-gray-secondary max-w-md">{t("notFound.hint")}</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 bg-accent text-dark text-base font-bold px-8 py-3 rounded-lg hover:bg-accent-hover transition-colors duration-300"
          >
            {t("notFound.home")}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
