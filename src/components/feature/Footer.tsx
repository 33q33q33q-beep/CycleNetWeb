import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const scrollTo = (id: string) => {
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <footer className="bg-dark-card text-white">
      <div className="w-full px-4 md:px-6 py-12 md:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          <div className="lg:w-[35%]">
            <h3 className="text-2xl font-display font-bold tracking-[0.15em] mb-4">
              CYCLE NET
            </h3>
            <p className="text-gray-light text-base leading-relaxed max-w-sm mb-2">
              {t("footer.company.desc")}
            </p>
            <p className="text-gray-muted text-sm mb-8">
              {t("footer.company.name")}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.youtube.com/@GachinkoCycleTV"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-secondary hover:border-accent hover:text-accent transition-colors duration-300"
              >
                <i className="ri-youtube-line text-lg" />
              </a>
              <a
                href="https://x.com/GachinkoCycleTV"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-secondary hover:border-accent hover:text-accent transition-colors duration-300"
              >
                <i className="ri-twitter-x-line text-lg" />
              </a>
              <a
                href="https://www.instagram.com/gachinkocycletv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-secondary hover:border-accent hover:text-accent transition-colors duration-300"
              >
                <i className="ri-instagram-line text-lg" />
              </a>
              <a
                href="https://www.facebook.com/GACHINKOCYCLETV"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-secondary hover:border-accent hover:text-accent transition-colors duration-300"
              >
                <i className="ri-facebook-fill text-lg" />
              </a>
              <a
                href="https://www.tiktok.com/@gachinkocycletv_gctv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-secondary hover:border-accent hover:text-accent transition-colors duration-300"
              >
                <i className="ri-tiktok-fill text-lg" />
              </a>
            </div>
          </div>

          <div className="lg:w-[65%] flex flex-col sm:flex-row gap-8 sm:gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium text-gray-light uppercase tracking-wider mb-1">
                SERVICES
              </span>
              <a
                href="https://www.youtube.com/@GachinkoCycleTV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-light hover:text-accent transition-colors duration-300"
              >
                {t("footer.links.services")}
              </a>
              <a
                href="https://www.youtube.com/@GachinkoCycleTV-TOKUHAIN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-light hover:text-accent transition-colors duration-300"
              >
                笑顔を届ける自転車便☆GCTV特派員
              </a>
              <button
                onClick={() => scrollTo("solutions-btob")}
                className="text-left text-base text-gray-light hover:text-accent transition-colors duration-300 cursor-pointer"
              >
                BtoB Solutions
              </button>
              <button
                onClick={() => scrollTo("platform")}
                className="text-left text-base text-gray-light hover:text-accent transition-colors duration-300 cursor-pointer"
              >
                JBCF Platform
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium text-gray-light uppercase tracking-wider mb-1">
                COMPANY
              </span>
              <Link
                to="/about"
                className="text-left text-base text-gray-light hover:text-accent transition-colors duration-300"
              >
                {t("footer.links.company")}
              </Link>
              <button
                onClick={() => scrollTo("team")}
                className="text-left text-base text-gray-light hover:text-accent transition-colors duration-300 cursor-pointer"
              >
                {t("footer.links.group")}
              </button>
              <Link
                to="/jbcf"
                className="text-left text-base text-gray-light hover:text-accent transition-colors duration-300"
              >
                {t("footer.links.jbcf")}
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium text-gray-light uppercase tracking-wider mb-1">
                SUPPORT
              </span>
              <Link
                to="/live"
                className="text-left text-base text-gray-light hover:text-accent transition-colors duration-300"
              >
                {t("footer.links.contact")}
              </Link>
              <button
                onClick={() => scrollTo("faq")}
                className="text-left text-base text-gray-light hover:text-accent transition-colors duration-300 cursor-pointer"
              >
                FAQ
              </button>
              <a
                href="#"
                className="text-base text-gray-light hover:text-accent transition-colors duration-300"
              >
                {t("footer.links.privacy")}
              </a>
              <a
                href="#"
                className="text-base text-gray-light hover:text-accent transition-colors duration-300"
              >
                {t("footer.links.terms")}
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-sm font-medium text-gray-light uppercase tracking-wider mb-1">
                FOLLOW
              </span>
              <a
                href="https://www.youtube.com/@GachinkoCycleTV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-light hover:text-accent transition-colors duration-300"
              >
                YouTube
              </a>
              <a
                href="https://x.com/GachinkoCycleTV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-light hover:text-accent transition-colors duration-300"
              >
                X (Twitter)
              </a>
              <a
                href="https://www.instagram.com/gachinkocycletv/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-light hover:text-accent transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/GACHINKOCYCLETV"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-light hover:text-accent transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="https://www.tiktok.com/@gachinkocycletv_gctv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-gray-light hover:text-accent transition-colors duration-300"
              >
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-primary">
        <div className="w-full px-4 md:px-6 py-4 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-muted">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-muted">
              JBCF OFFICIAL PR UNIT / SINCE 2022 / TOKYO
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}