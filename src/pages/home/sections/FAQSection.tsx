import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function FAQSection() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

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

  const faqs = [
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
    { q: t("faq.q1"), a: t("faq.a1") },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="w-full bg-off-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10"
    >
      <div className="text-center mb-16 md:mb-20">
        <span className="text-sm font-medium text-gray-muted uppercase tracking-[0.2em] block mb-3">
          {t("faq.label")}
        </span>
        <h3 className="text-sm font-medium text-accent uppercase tracking-[0.3em] mb-6">
          {t("faq.subtitle")}
        </h3>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark leading-tight mb-6">
          {t("faq.title")}
        </h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-500 ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: visible ? `${idx * 80}ms` : "0ms",
              transitionProperty: "opacity, transform",
              transitionDuration: "500ms",
            }}
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full flex items-start justify-between gap-4 p-6 md:p-8 text-left cursor-pointer"
            >
              <span className="text-base md:text-lg font-bold text-dark leading-relaxed">
                {faq.q}
              </span>
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                <i
                  className={`ri-arrow-down-s-line text-lg text-accent transition-transform duration-300 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIdx === idx ? "max-h-[2400px]" : "max-h-0"
              }`}
            >
              <div className="px-6 md:px-8 pb-6 md:pb-8">
                <p className="text-base text-gray-secondary leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}