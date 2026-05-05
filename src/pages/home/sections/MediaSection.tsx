import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

/** 同一プロンプトの携帯向け低解像度版（帯域・デコード負荷軽減） */
const MEDIA_BROADCAST_QUERY =
  "query=Professional%20cycling%20race%20broadcasting%20studio%20setup%20with%20multiple%20camera%20monitors%20showing%20live%20road%20race%20footage%2C%20video%20production%20control%20room%2C%20warm%20ambient%20lighting%2C%20modern%20broadcast%20equipment%2C%20sports%20media%20environment%2C%20cinematic%20warm%20tones%20with%20amber%20highlights%20and%20dark%20shadows%2C%20no%20blue%20or%20purple%20colors%2C%20professional%20live%20streaming%20production%20atmosphere";

function mediaBroadcastImageSrc(width: number, height: number) {
  return `https://readdy.ai/api/search-image?${MEDIA_BROADCAST_QUERY}&width=${width}&height=${height}&seq=media-broadcast&orientation=landscape`;
}

export default function MediaSection() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="media"
      ref={sectionRef}
      className="w-full bg-gradient-to-br from-amber-100/55 via-orange-50/40 to-white py-10 sm:py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-10 border-y border-amber-200/40"
    >
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-16 items-center">
        <div
          className={`lg:w-[50%] transition-all duration-1000 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-sm font-medium text-gray-muted uppercase tracking-[0.2em] block mb-3">
            {t("media.label")}
          </span>
          <h3 className="text-sm font-medium text-accent uppercase tracking-[0.3em] mb-6">
            {t("media.subtitle")}
          </h3>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark leading-tight mb-4 sm:mb-6">
            {t("media.title")}
          </h2>
          <p className="text-gray-secondary text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-lg">
            {t("media.desc")}
          </p>

          <div className="flex flex-wrap gap-8 mb-8">
            <div>
              <div className="text-4xl md:text-5xl font-display font-black text-dark">
                {t("media.subscribers")}
              </div>
              <div className="text-sm text-gray-muted mt-1">
                {t("media.subscribers.label")}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-display font-black text-dark">
                {t("media.views")}
              </div>
              <div className="text-sm text-gray-muted mt-1">
                {t("media.views.label")}
              </div>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@GachinkoCycleTV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dark text-white text-base font-bold px-8 py-4 rounded-lg hover:bg-gray-primary transition-colors duration-300 cursor-pointer whitespace-nowrap"
          >
            <i className="ri-youtube-line text-lg" />
            {t("media.cta")}
            <i className="ri-arrow-right-line" />
          </a>
        </div>

        <div
          className={`lg:w-[50%] transition-all duration-1000 delay-200 ${
            visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-md ring-1 ring-amber-300/35 bg-gradient-to-tr from-dark/90 via-dark/70 to-accent/25 p-2.5 sm:p-3 md:p-4">
            <picture>
              <source
                media="(max-width: 639px)"
                srcSet={mediaBroadcastImageSrc(480, 360)}
              />
              <img
                src={mediaBroadcastImageSrc(800, 600)}
                alt="GachinkoCycleTV broadcasting"
                className="w-full aspect-[4/3] h-auto object-cover object-center rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent p-3 md:p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                  <i className="ri-youtube-fill text-white text-lg" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold">GachinkoCycleTV</p>
                  <p className="text-white/60 text-xs">YouTube Channel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}