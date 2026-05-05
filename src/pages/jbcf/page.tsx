import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { useEffect, useRef, useState } from "react";

export default function JBCFPage() {
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

  const tours = [
    {
      title: "Jプロツアー",
      desc: "Jプロツアーは、日本最高峰の自転車ロードレースツアーです。各チームはJPT資格を持つ6名以上の選手が所属し、レースレイティング（プラチナ・ゴールド・シルバー・ローンズほか）の各レースで争われます。",
      image: "https://readdy.ai/api/search-image?query=Professional%20Japanese%20cycling%20race%20peloton%20riding%20together%20on%20open%20road%2C%20competitive%20road%20race%20atmosphere%20with%20colorful%20team%20jerseys%2C%20dynamic%20action%20shot%2C%20warm%20golden%20afternoon%20lighting%2C%20dramatic%20composition%20with%20amber%20tones%20and%20dark%20shadows%2C%20no%20blue%20or%20purple%20colors%2C%20sports%20photography%20style&width=400&height=300&seq=jbcf-pro&orientation=landscape",
    },
    {
      title: "Jエリートツアー",
      desc: "Jエリートツアーは、日本の自転車ロードレースによる年間シリーズツアーです。エリートカテゴリーの全選手・全チームがエントリーし、個人の獲得ポイントで昇降格するE1、E2、E3の3つのカテゴリーがあります。",
      image: "https://readdy.ai/api/search-image?query=Young%20elite%20cyclists%20sprinting%20to%20finish%20line%20during%20Japanese%20road%20race%2C%20determined%20athletes%20in%20racing%20gear%2C%20high%20speed%20action%2C%20warm%20golden%20lighting%2C%20dramatic%20shadows%2C%20no%20blue%20or%20purple%20colors%2C%20professional%20sports%20photography&width=400&height=300&seq=jbcf-elite&orientation=landscape",
    },
    {
      title: "Jフェミニンツアー",
      desc: "Jフェミニンツアーは、女性選手による自転車ロードレースツアーです。女性全選手が1つのカテゴリーにエントリーします。各レースにおける個人の獲得したポイントの年間合計で個人年間総合1位が決定します。",
      image: "https://readdy.ai/api/search-image?query=Female%20cyclists%20competing%20in%20Japanese%20road%20race%2C%20women%20athletes%20in%20professional%20cycling%20gear%20riding%20together%2C%20empowering%20sports%20scene%2C%20warm%20golden%20lighting%2C%20dynamic%20composition%20with%20amber%20tones%2C%20no%20blue%20or%20purple%20colors&width=400&height=300&seq=jbcf-feminin&orientation=landscape",
    },
    {
      title: "Jユースツアー",
      desc: "Jユースツアーは、日本の13〜16歳のユースによる自転車ロードレースツアーです。ユースの男子選手がエントリーします。各レースにおける個人の獲得したポイントの年間合計で個人年間総合1位が決定します。",
      image: "https://readdy.ai/api/search-image?query=Young%20teenage%20cyclists%20racing%20in%20Japanese%20youth%20cycling%20tour%2C%20junior%20athletes%20on%20road%20bikes%2C%20next%20generation%20of%20cycling%20talent%2C%20warm%20afternoon%20sunlight%2C%20sports%20action%20photography%20with%20amber%20tones%2C%20no%20blue%20or%20purple%20colors&width=400&height=300&seq=jbcf-youth&orientation=landscape",
    },
    {
      title: "Jマスターツアー",
      desc: "Jマスターズツアーは、30歳以上のマスターズによる日本の自転車ロードレースツアーです。マスターズの男子選手がエントリーします。各レースにおける個人の獲得したポイントの年間合計で個人年間総合1位が決定します。",
      image: "https://readdy.ai/api/search-image?query=Master%20class%20adult%20cyclists%20competing%20in%20Japanese%20road%20race%2C%20mature%20athletes%20in%20cycling%20gear%20riding%20on%20scenic%20road%2C%20warm%20golden%20lighting%2C%20active%20lifestyle%20sports%20photography%20with%20amber%20tones%2C%20no%20blue%20or%20purple%20colors&width=400&height=300&seq=jbcf-master&orientation=landscape",
    },
  ];

  const jptTeamsImage = encodeURI("/JPT2026 20Team.png");

  return (
    <div className="w-full">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Large%20group%20of%20professional%20cyclists%20racing%20together%20in%20Japanese%20road%20race%2C%20colorful%20team%20jerseys%2C%20peloton%20on%20winding%20road%20surrounded%20by%20mountains%2C%20warm%20golden%20afternoon%20sunlight%2C%20dramatic%20sports%20photography%20with%20amber%20tones%20and%20dark%20shadows%2C%20no%20blue%20or%20purple%20colors%2C%20cinematic%20composition&width=1920&height=600&seq=jbcf-hero&orientation=landscape"
              alt="JBCFロードレース"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-display font-black mb-4">
              JBCFロードレースシリーズ
            </h1>
          </div>
        </section>

        {/* Overview */}
        <section className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-gray-secondary leading-relaxed mb-12">
              「JBCFロードレースシリーズ」は、JBCF（全日本実業団自転車競技連盟）が統括し日本の自転車ロードレース競技選手・チームが参加する全国地域で開催される年間大会シリーズです。
              各カテゴリーで年間ポイントを争います。トップカテゴリーのJプロツアーを頂点に、アマチュア・学生による次世代育成レース「エリートツアー」女子選手カテゴリー「フェミニンツアー」などを併催、最高レベルの走りを観戦するのはもちろん、自分に合ったカテゴリーにエントリーして楽しむ事もできます。
              スポーツサイクルの人気向上に加え、地域密着のチームが多く出場していることで、各会場は多くのギャラリーが一体となってレースを盛り上げています。
            </p>
            <div className="rounded-xl overflow-hidden mb-16">
              <img
                src="https://readdy.ai/api/search-image?query=Wide%20shot%20of%20cycling%20race%20spectators%20cheering%20along%20road%20race%20course%2C%20large%20crowd%20of%20Japanese%20fans%20watching%20bicycle%20race%2C%20festive%20atmosphere%20with%20colorful%20banners%2C%20warm%20golden%20afternoon%20lighting%2C%20sports%20event%20photography%20with%20amber%20tones%2C%20no%20blue%20or%20purple%20colors&width=1200&height=500&seq=jbcf-gallery&orientation=landscape"
                alt="JBCFレース風景"
                className="w-full h-[300px] md:h-[400px] object-cover object-center"
              />
            </div>

            {/* Stats */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-8">
                JBCFロードレースシリーズ <span className="text-accent">2026</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-off-white rounded-xl p-6">
                  <p className="text-3xl md:text-4xl font-display font-black text-accent mb-2">2,000人</p>
                  <p className="text-sm text-gray-muted">登録選手数</p>
                </div>
                <div className="bg-off-white rounded-xl p-6">
                  <p className="text-3xl md:text-4xl font-display font-black text-accent mb-2">30チーム</p>
                  <p className="text-sm text-gray-muted">登録チーム数</p>
                </div>
                <div className="bg-off-white rounded-xl p-6">
                  <p className="text-3xl md:text-4xl font-display font-black text-accent mb-2">2月〜10月</p>
                  <p className="text-sm text-gray-muted">開催期間</p>
                </div>
                <div className="bg-off-white rounded-xl p-6">
                  <p className="text-3xl md:text-4xl font-display font-black text-accent mb-2">約60レース</p>
                  <p className="text-sm text-gray-muted">年間レース数</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLATFORM Banners */}
        <section className="w-full bg-off-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-1 h-8 bg-accent rounded-full" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark">PLATFORM</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <a
                href="https://jbcfroad.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-accent transition-all duration-300 cursor-pointer"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs font-bold text-gray-muted uppercase tracking-wider mb-2">JBCF — ROAD RACE PLATFORM</p>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-dark">
                        JBCF公式サイト
                      </h3>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-lg shrink-0">
                      <i className="ri-external-link-line text-dark text-lg" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-secondary leading-relaxed">
                    日本の自転車プロレーシングシーン、その中心で！
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>

              <a
                href="https://jbcfroad.jp/files/2026/2026JBCFGuideBook.pdf?1777899852"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-accent transition-all duration-300 cursor-pointer"
              >
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-xs font-bold text-gray-muted uppercase tracking-wider mb-2">JBCF2026</p>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-dark">
                        公式ガイドブック ダウンロード
                      </h3>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center bg-accent rounded-lg shrink-0">
                      <i className="ri-download-line text-dark text-lg" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-secondary leading-relaxed">
                    2026シーズンの公式ガイドブックはこちらからダウンロードできます。
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </div>
          </div>
        </section>

        {/* Tours */}
        <section ref={sectionRef} className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark text-center mb-16">
              5つのカテゴリー
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {tours.map((tour, idx) => (
                <div
                  key={idx}
                  className={`bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-accent transition-all duration-500 ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: visible ? `${idx * 100}ms` : "0ms",
                    transitionProperty: "opacity, transform, border-color",
                    transitionDuration: "700ms, 700ms, 500ms",
                  }}
                >
                  <div className="w-full h-[160px] overflow-hidden">
                    <img src={tour.image} alt={tour.title} className="w-full h-full object-cover object-center" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-dark mb-2">{tour.title}</h3>
                    <p className="text-sm text-gray-secondary leading-relaxed">{tour.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* JPT 加盟チーム（2026ガイド素材） */}
        <section className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark mb-4">
              Jプロツアー <span className="text-accent">2026</span>
            </h2>
            <p className="text-lg text-gray-secondary mb-8">加盟チーム</p>
            <a
              href={jptTeamsImage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block max-w-full rounded-xl border border-gray-200 overflow-hidden hover:border-accent transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              <img
                src={jptTeamsImage}
                alt="Jプロツアー2026 加盟チーム一覧"
                className="w-full h-auto block"
              />
            </a>
            <p className="text-sm text-gray-muted mt-4">画像は拡大表示・保存用にクリックしてください</p>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="w-full bg-off-white py-12 md:py-16 lg:py-24 px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
            エントリー・お問い合わせ
          </h2>
          <p className="text-base text-gray-secondary mb-8 max-w-xl mx-auto">
            JBCFロードレースシリーズへのエントリーや、各レースに関するお問い合わせはJBCF公式サイトよりお願いいたします。
          </p>
          <a
            href="https://jbcfroad.jp/regist/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-dark text-base font-bold px-8 py-4 rounded-lg hover:bg-accent-hover transition-colors duration-300 cursor-pointer whitespace-nowrap"
          >
            JBCF公式サイトへ
            <i className="ri-external-link-line" />
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}