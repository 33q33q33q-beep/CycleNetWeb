import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { useTranslation } from "react-i18next";

export default function LivePage() {
  const { t } = useTranslation();

  const fieldBullets = ["b1", "b2", "b3", "b4", "b5", "b6", "b7"] as const;

  const videoCards = [
    { icon: "ri-movie-2-line", titleKey: "livePage.video.v1t", descKey: "livePage.video.v1d" },
    { icon: "ri-clapperboard-line", titleKey: "livePage.video.v2t", descKey: "livePage.video.v2d" },
    { icon: "ri-disc-line", titleKey: "livePage.video.v3t", descKey: "livePage.video.v3d" },
    { icon: "ri-archive-line", titleKey: "livePage.video.v4t", descKey: "livePage.video.v4d" },
  ] as const;

  const onestop = ["o1", "o2", "o3", "o4"] as const;

  const fitCards = [
    { icon: "ri-award-line", titleKey: "livePage.fit.f1t", descKey: "livePage.fit.f1d" },
    { icon: "ri-megaphone-line", titleKey: "livePage.fit.f2t", descKey: "livePage.fit.f2d" },
    { icon: "ri-building-line", titleKey: "livePage.fit.f3t", descKey: "livePage.fit.f3d" },
  ] as const;

  return (
    <div className="w-full">
      <Navbar />
      <main className="pt-16 md:pt-[4.75rem]">
        <section className="relative w-full overflow-hidden bg-gradient-to-br from-accent/20 via-off-white to-white border-b-4 border-accent">
          <div className="text-center px-4 sm:px-8 py-8 md:py-10 max-w-6xl xl:max-w-7xl mx-auto w-full">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-black text-dark mb-3">
              {t("livePage.hero.titleBefore")}
              <span className="text-accent">{t("livePage.hero.titleAccent")}</span>
            </h1>
            <p className="text-base md:text-lg text-gray-secondary leading-relaxed xl:whitespace-nowrap">
              {t("livePage.hero.desc")}
            </p>
          </div>
        </section>

        <section className="w-full bg-white py-8 md:py-10 lg:py-12 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-dark mb-5 pb-3 border-b border-gray-200">
              {t("livePage.fields.title")}
            </h2>
            <p className="text-base md:text-lg text-gray-secondary leading-relaxed mb-6">
              {t("livePage.fields.intro")}
            </p>
            <div className="space-y-2">
              {fieldBullets.map((key) => (
                <div key={key} className="flex items-start gap-3 py-2.5 border-b border-gray-100">
                  <i className="ri-check-line text-accent mt-1 shrink-0" />
                  <p className="text-base text-gray-secondary">{t(`livePage.fields.${key}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-off-white py-8 md:py-10 lg:py-12 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-dark mb-5 pb-3 border-b border-gray-200">
              {t("livePage.live.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl p-5 border border-amber-200 bg-amber-50/80 border-l-4 border-l-amber-500 shadow-sm">
                <div className="w-10 h-10 flex items-center justify-center mb-3 rounded-lg bg-amber-100">
                  <i className="ri-camera-3-line text-2xl text-amber-700" />
                </div>
                <h3 className="text-base font-bold text-dark mb-2">{t("livePage.live.camTitle")}</h3>
                <p className="text-sm text-gray-secondary leading-relaxed">{t("livePage.live.camDesc")}</p>
              </div>
              <div className="rounded-xl p-5 border border-sky-200 bg-sky-50/80 border-l-4 border-l-sky-500 shadow-sm">
                <div className="w-10 h-10 flex items-center justify-center mb-3 rounded-lg bg-sky-100">
                  <i className="ri-broadcast-line text-2xl text-sky-700" />
                </div>
                <h3 className="text-base font-bold text-dark mb-2">{t("livePage.live.multiTitle")}</h3>
                <p className="text-sm text-gray-secondary leading-relaxed">{t("livePage.live.multiDesc")}</p>
              </div>
              <div className="rounded-xl p-5 border border-emerald-200 bg-emerald-50/80 border-l-4 border-l-emerald-500 shadow-sm">
                <div className="w-10 h-10 flex items-center justify-center mb-3 rounded-lg bg-emerald-100">
                  <i className="ri-film-line text-2xl text-emerald-700" />
                </div>
                <h3 className="text-base font-bold text-dark mb-2">{t("livePage.live.presenceTitle")}</h3>
                <p className="text-sm text-gray-secondary leading-relaxed">{t("livePage.live.presenceDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-8 md:py-10 lg:py-12 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-dark mb-5 pb-3 border-b border-gray-200">
              {t("livePage.video.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {videoCards.map((item, idx) => (
                <div key={idx} className="bg-off-white rounded-xl p-6 border border-gray-200">
                  <div className="w-10 h-10 flex items-center justify-center mb-4">
                    <i className={`${item.icon} text-2xl text-accent`} />
                  </div>
                  <h3 className="text-base font-bold text-dark mb-2">{t(item.titleKey)}</h3>
                  <p className="text-sm text-gray-secondary">{t(item.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-off-white py-8 md:py-10 lg:py-12 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-dark mb-5 pb-3 border-b border-gray-200">
              {t("livePage.onestop.title")}
            </h2>
            <div className="space-y-3">
              {onestop.map((key) => (
                <div key={key} className="flex items-start gap-3 py-2.5 border-b border-gray-100">
                  <i className="ri-check-double-line text-accent mt-1 shrink-0" />
                  <p className="text-base text-gray-secondary">{t(`livePage.onestop.${key}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-white py-8 md:py-10 lg:py-12 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-dark mb-5 pb-3 border-b border-gray-200">
              {t("livePage.fit.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {fitCards.map((item, idx) => (
                <div key={idx} className="bg-off-white rounded-xl p-6 border border-gray-200 text-center">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-dark rounded-lg">
                    <i className={`${item.icon} text-2xl text-accent`} />
                  </div>
                  <h3 className="text-base font-bold text-dark mb-2">{t(item.titleKey)}</h3>
                  <p className="text-sm text-gray-secondary">{t(item.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full bg-off-white py-8 md:py-10 lg:py-12 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-dark mb-5 pb-3 border-b border-gray-200">
              {t("livePage.contact.title")}
            </h2>
            <div className="bg-white rounded-xl p-5 md:p-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <i className="ri-mail-line text-accent text-xl" />
                <a href="mailto:info@cycle-net.jp" className="text-lg text-dark font-medium hover:text-accent transition-colors duration-300">
                  info@cycle-net.jp
                </a>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-bold text-dark mb-3">{t("livePage.contact.gctvTitle")}</h3>
                <a
                  href="https://www.youtube.com/@GachinkoCycleTV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent font-medium hover:text-dark transition-colors duration-300"
                >
                  <i className="ri-youtube-line" />
                  https://www.youtube.com/@GachinkoCycleTV
                </a>
              </div>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-dark mt-10 mb-5 pb-3 border-b border-gray-200">
              {t("livePage.portfolio.title")}
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="text-base font-bold text-dark mb-2">● ラリー北海道</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="https://www.youtube.com/watch?v=EoKEO-GABTY" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">ラリー北海道2023陸別SS</a>
                  <a href="https://www.youtube.com/watch?v=KyjBpGdtN5U&t=4181s" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">ラリー北海道2023池田SS</a>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark mb-2">● インタープロトシリーズ</h3>
                <div className="flex flex-wrap gap-3">
                  <a href="http://youtube.com/watch?v=1hs8FTnYFZI" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">インタープロトシリーズ2022 Rd.7-8 プロ決勝</a>
                  <a href="https://youtube.com/playlist?list=PLNuD4X89l_6I1PBhbcjfryvT2sRiq28qk&si=X1uMrJI9b54j0o9d" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">ハイライト</a>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark mb-2">● Happy New Year Tokyo 東京都庁 2024年カウントダウン</h3>
                <a href="https://youtube.com/watch?v=vm7FC_LeuBU&t=362s" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">LIVE【豪華ゲスト登場】</a>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark mb-2">● 5/23(土)「Rejet新情報発表会2020 TRY！」</h3>
                <a href="https://www.youtube.com/watch?v=EcJK6wVNGYw" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">CB PART【2020.7.22 1stSingle OUT!!】</a>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark mb-2">● CRプレゼンツサバイバル5周年記念</h3>
                <a href="https://www.youtube.com/watch?v=iitJ-sNkf00" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">超❤スペシャル生特番</a>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark mb-2">● 音泉＆えとたま～猫客万来～インフォメーション！</h3>
                <a href="https://www.youtube.com/watch?v=pEXCTHb-VPg&t=1140s" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">～皆さんに喜んでもらえる情報を解禁するにゃす！～</a>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark mb-2">● セガプラザ通信 in AJ2021 [DAY2] ラブライブ！</h3>
                <a href="https://www.youtube.com/watch?v=m1ZAlKcpRVc" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">虹ヶ咲学園スクールアイドル同好会ステージ</a>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark mb-2">● 日清焼そばU.F.O. x VTuber 輝夜月</h3>
                <a href="https://www.youtube.com/watch?v=4Uys3dhjCcQ" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">SPACE CHALLENGE</a>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark mb-2">● ミシュランガイド東京2020</h3>
                <a href="https://www.youtube.com/watch?v=DK11VPTOVXI" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">出版記念パーティー</a>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark mb-2">● TOYOTA GAZOO Racing</h3>
                <a href="https://www.youtube.com/watch?v=vF6sT_XvHhY" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">TOKYO AUTO SALON 2020 DAY1</a>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark mb-2">● 世界コスプレサミット2019</h3>
                <a href="https://www.youtube.com/watch?v=f7XkR0e066o&t=371s" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">オープニングセレモニー</a>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark mb-2">● Supra is back to Japan Fes</h3>
                <a href="https://www.youtube.com/watch?v=ShyHpDuJCfs" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">GRスープラ記者発表会</a>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark mb-2">● 爆走ドリフターズ</h3>
                <a href="https://www.youtube.com/watch?v=HRPwJMLFpBk" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">「爆ドリ」リリース記念生放送</a>
              </div>
              <div>
                <h3 className="text-base font-bold text-dark mb-2">● 式町水晶デビュー特番</h3>
                <a href="https://live.line.me/channels/762/broadcast/7339633" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-dark transition-colors">ライヴ＆トーク（LINE LIVE）</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
