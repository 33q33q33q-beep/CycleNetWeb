import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${id}`);
    }
    setMenuOpen(false);
  };

  const navColor = scrolled || !isHome ? "#0A0A0A" : "#FFFFFF";

  const goHome = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setMenuOpen(false);
  };

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "ja" ? "en" : "ja");
  };

  const navItems = [
    { label: t("nav.concept"), id: "concept" },
    { label: t("nav.media"), id: "media" },
    { label: t("nav.solutions"), id: "solutions-btob" },
    { label: t("nav.live"), path: "/live" as const },
    { label: t("nav.platform"), id: "platform" },
    { label: t("nav.works"), id: "works" },
    { label: t("nav.team"), id: "team" },
    { label: t("nav.faq"), id: "faq" },
    { label: t("nav.contact"), id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <button
          onClick={goHome}
          className="text-base md:text-lg font-display font-bold tracking-[0.2em] uppercase cursor-pointer"
          style={{ color: navColor }}
        >
          Cycle Net Inc.
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            "path" in item ? (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-sm font-medium tracking-wide cursor-pointer group whitespace-nowrap"
                style={{ color: navColor }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="relative text-sm font-medium tracking-wide cursor-pointer group"
                style={{ color: navColor }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            )
          )}
          <button
            onClick={toggleLang}
            className="text-sm font-medium tracking-wide cursor-pointer"
            style={{ color: navColor }}
          >
            {i18n.language === "ja" ? "EN" : "JP"}
          </button>
        </div>

        <button
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: navColor }}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-[2px] w-full transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[9px]" : ""
              }`}
              style={{ backgroundColor: navColor }}
            />
            <span
              className={`block h-[2px] w-full transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
              style={{ backgroundColor: navColor }}
            />
            <span
              className={`block h-[2px] w-full transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
              style={{ backgroundColor: navColor }}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navItems.map((item) =>
              "path" in item ? (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-left text-lg font-medium text-dark cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-lg font-medium text-dark cursor-pointer"
                >
                  {item.label}
                </button>
              )
            )}
            <button
              onClick={toggleLang}
              className="text-left text-lg font-medium text-dark cursor-pointer"
            >
              {i18n.language === "ja" ? "English" : "日本語"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}