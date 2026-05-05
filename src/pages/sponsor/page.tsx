import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { useEffect, useRef, useState } from "react";

export default function SponsorPage() {
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

  const exposures = [
    { title: "大会運営車両", desc: "ロゴ掲出", img: "https://www.cycle-net.jp/images/sponsored/spd05.jpg" },
    { title: "S/Fポール", desc: "ロゴ掲出", img: "https://www.cycle-net.jp/images/sponsored/spd06.jpg" },
    { title: "S/Fエリア フェンスバナー", desc: "ロゴ掲出", img: "https://www.cycle-net.jp/images/sponsored/spd07.jpg" },
    { title: "S/Fエリア", desc: "フラッグ掲出", img: "https://www.cycle-net.jp/images/sponsored/spd08.jpg" },
    { title: "表彰ステージ背景", desc: "ロゴ掲出", img: "https://www.cycle-net.jp/images/sponsored/spd09.jpg" },
    { title: "ブース出店", desc: "ブーススペース", img: "https://www.cycle-net.jp/images/sponsored/spd10.jpg" },
  ];

  const gctvExposures = [
    { title: "オフィシャルパートナー", desc: "ロゴ表示", img: "https://www.cycle-net.jp/images/sponsored/spdg01.jpg" },
    { title: "ローカルパートナー", desc: "ロゴ表示", img: "https://www.cycle-net.jp/images/sponsored/spdg02.jpg" },
    { title: "出展ブースのLIVEレポート", desc: "配信", img: "https://www.cycle-net.jp/images/sponsored/spdg03.jpg" },
    { title: "実況によるスポンサー紹介", desc: "配信", img: "https://www.cycle-net.jp/images/sponsored/spdg04.jpg" },
    { title: "企業CM等の放映", desc: "配信", img: "https://www.cycle-net.jp/images/sponsored/spdg05.jpg" },
    { title: "ふるさと納税とのコラボ", desc: "配信", img: "https://www.cycle-net.jp/images/sponsored/spdg06.jpg" },
    { title: "実況による開催地の魅力紹介", desc: "自治体の方のゲスト出演", img: "https://www.cycle-net.jp/images/sponsored/spdg07.jpg" },
    { title: "観光紹介動画", desc: "ローカルパートナー企業のCM放映", img: "https://www.cycle-net.jp/images/sponsored/spdg08.jpg" },
    { title: "地元特産品での視聴者プレゼント", desc: "開催前からプレゼントキャンペーンを実施", img: "https://www.cycle-net.jp/images/sponsored/spdg09.jpg" },
  ];

  const benefits = [
    {
      title: "貴社ブランドの可視性向上",
      desc: "サイクルロードレースは主に一般道で行われるため、観客とレーサーの距離が近く、沿道で応援でき、不特定多数の人々に貴社の協力を伝える事が可能です。企業ロゴやスポンサーネームをチームカーやコースバナーで一般観客や配信視聴者に視認して頂くことで、ブランドの国際的な認知度を高めることができます。",
    },
    {
      title: "コーポレートイメージの向上",
      desc: "環境保護や健康推進など、ポジティブな価値を持つサイクルスポーツをサポートすることで、企業の社会的責任（CSR）活動の一環として、コーポレートイメージを向上させることができます。",
    },
    {
      title: "ターゲット市場へのアプローチ",
      desc: "自転車競技のファンや参加者は、健康やフィットネスに対する意識が高く、ある特徴的な生活様式や購買行動を持つことが知られています。これらの特性は、企業がこのような消費者グループに効果的にアプローチするのに役立ちます。",
    },
    {
      title: "ビジネスネットワーキングと関係構築",
      desc: "スポーツイベントは、企業や業界関係者とのネットワーキングの場を提供します。特にロードレースは自治体との共催も多く、企業スポンサーシップは新たなビジネスチャンスを生み出し、長期的なパートナーシップを築くきっかけを創り出します。",
    },
  ];

  return (
    <div className="w-full">
      <Navbar />
      <main className="pt-16 md:pt-[4.75rem]">
        {/* Hero Banner */}
        <section className="relative w-full overflow-hidden">
          <div className="w-full">
            <img
              src="https://www.cycle-net.jp/images/sponsored/main2026.jpg"
              alt="JBCFスポンサー募集"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full bg-off-white py-10 text-center px-6">
            <h1 className="text-2xl md:text-3xl font-display font-black text-dark mb-4">
              年間ツアースポンサー募集！
            </h1>
            <p className="text-xl md:text-2xl text-gray-secondary mb-2">
              ローカルパートナー募集！
            </p>
            <a
              href="mailto:info@cycle-net.jp"
              className="inline-flex items-center gap-2 bg-accent text-dark text-base font-bold px-10 py-4 rounded-lg hover:bg-accent-hover transition-colors duration-300 cursor-pointer whitespace-nowrap mt-4"
            >
              お問い合わせはこちら
            </a>
          </div>
        </section>

        {/* Recruitment */}
        <section className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-6">
            JBCFでは<span className="text-accent">2026年</span>
            <br />
            年間ツアースポンサー、ローカルパートナーを募集しています！
          </h2>
        </section>

        {/* Sponsor Gallery */}
        <section className="w-full bg-off-white py-16 md:py-24 px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark text-center mb-4">
              JBCFロードレースシリーズ <span className="text-accent">2026</span>
            </h2>
            <p className="text-lg text-gray-secondary text-center mb-12">年間スポンサー</p>
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

        {/* Guide Book */}
        <section className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark mb-4">
              <span className="text-accent">2026年度</span>
              <br />
              JBCF年間公式ガイドブック
            </h2>
            <p className="text-base text-gray-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
              JBCF（全日本実業団自転車競技連盟）では2026年度 公式ガイドブック（48ページ程度予定）を発行します。配布はデジタルデータのダウンロードを基本とし、JBCFの公式WEBならびにGCTVのサイト、レース会場内に掲出するQRコードで告知、印刷は5,000部を予定。各レース会場などで配布します。パンフレットへの広告出稿・協賛ロゴ出向などのメニューをご用意しています。
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8">
              <div className="bg-off-white rounded-lg p-3">
                <img src="https://www.cycle-net.jp/images/guidebook/gb01.jpg" alt="公式ガイドブック" className="w-full h-[120px] object-cover rounded" />
                <p className="text-xs text-gray-muted mt-2">公式ガイドブック 2026年</p>
              </div>
              <div className="bg-off-white rounded-lg p-3">
                <img src="https://www.cycle-net.jp/images/guidebook/gb02.jpg" alt="協賛ロゴ掲載" className="w-full h-[120px] object-cover rounded" />
                <p className="text-xs text-gray-muted mt-2">協賛ロゴ掲載 2026年</p>
              </div>
              <div className="bg-off-white rounded-lg p-3">
                <img src="https://www.cycle-net.jp/images/guidebook/gb03.jpg" alt="広告掲載" className="w-full h-[120px] object-cover rounded" />
                <p className="text-xs text-gray-muted mt-2">広告掲載 2026年</p>
              </div>
              <div className="bg-off-white rounded-lg p-3">
                <img src="https://www.cycle-net.jp/images/guidebook/gb04.jpg" alt="WEBサイトへのロゴ掲載" className="w-full h-[120px] object-cover rounded" />
                <p className="text-xs text-gray-muted mt-2">WEBサイトへのロゴ掲載 2026年</p>
              </div>
            </div>
            <a
              href="mailto:info@cycle-net.jp"
              className="inline-flex items-center gap-2 bg-accent text-dark text-base font-bold px-8 py-4 rounded-lg hover:bg-accent-hover transition-colors duration-300 cursor-pointer whitespace-nowrap"
            >
              お問い合わせはこちら
            </a>
          </div>
        </section>

        {/* GCTV Media */}
        <section className="w-full bg-off-white py-16 md:py-24 px-6 md:px-10 lg:px-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-dark text-center mb-4">
              JBCF公式サイクルメディア
              <br />
              <span className="text-accent">ガチンコサイクルTV</span>
            </h2>
            <div className="bg-white rounded-xl p-6 md:p-8 mb-10 max-w-3xl mx-auto">
              <ul className="space-y-3 text-base text-gray-secondary">
                <li className="flex items-start gap-2">
                  <i className="ri-youtube-line text-accent mt-1 shrink-0" />
                  YouTubeチャンネル登録者数：約30,000人
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-live-line text-accent mt-1 shrink-0" />
                  Jプロツアーほぼ全レースをLIVE配信
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-eye-line text-accent mt-1 shrink-0" />
                  JBCFレースLIVE配信の平均視聴回数：約50,000回
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-tv-line text-accent mt-1 shrink-0" />
                  自転車情報番組「チャリタイムズ」月1回放送予定（2026シーズン）
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-article-line text-accent mt-1 shrink-0" />
                  その他、特派員によるコンテンツや取材れぽーとも多数！選手の自転車紹介選手｜インタビュー｜チームカー密着｜ゆるポタロケ｜イベントレポート等
                </li>
              </ul>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-dark text-center mb-8">
              ガチンコサイクルTVでの露出
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

        {/* Benefits */}
        <section ref={sectionRef} className="w-full bg-white py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-dark text-center mb-4">
              スポンサーシップの<span className="text-accent">メリット</span>
            </h2>
            <h3 className="text-xl md:text-2xl font-bold text-dark text-center mb-12">
              マーケットの提供
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
              モチベーションの提供
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              <div className="bg-off-white border border-gray-200 rounded-xl p-6 md:p-8">
                <h4 className="text-lg font-bold text-dark mb-3">チーム戦略と個人の輝き</h4>
                <p className="text-base text-gray-secondary leading-relaxed">
                  ロードレースはチームスポーツであると同時に、個々のライダーの才能や勇気が決め手となる競技です。チームメイトはサポートし合いながら、一人のエースを頂点へと押し上げます。チームはエースの勝利を共有します。エースの勝利は同時にチームの勝利なのです。他の競技には無い自転車競技ならではのチームバランスは、企業の従業員チームワークを強化する上でのモデルケースとなり得ます。
                </p>
              </div>
              <div className="bg-off-white border border-gray-200 rounded-xl p-6 md:p-8">
                <h4 className="text-lg font-bold text-dark mb-3">従業員のモチベーションとエンゲージメント</h4>
                <p className="text-base text-gray-secondary leading-relaxed">
                  企業がスポーツイベントをサポートすることは、従業員に誇りや所属感を与え、社内のモチベーション向上につながります。JBCFロードレースシリーズは個人戦であるエリート、フェミニン、ユース。チーム戦であるJプロツアーが同日共催されるので、個人戦（選手個人のパフォーマンス）とチーム戦（団結・サポート・勝ち負けだけでは無いスポーツマンシップ）の体験を生み出します。
                </p>
              </div>
              <div className="bg-off-white border border-gray-200 rounded-xl p-6 md:p-8">
                <h4 className="text-lg font-bold text-dark mb-3">戦略性とテクニック</h4>
                <p className="text-base text-gray-secondary leading-relaxed">
                  ロードレースは、レース中の戦略的な動きや、集団内でのポジショニング、スリップストリーム（ドラフティング）を利用したエネルギーの節約など、高い戦略性とテクニックが要求されます。この複雑さが、観ていても参加しても楽しめる要素を提供します。
                </p>
              </div>
              <div className="bg-off-white border border-gray-200 rounded-xl p-6 md:p-8">
                <h4 className="text-lg font-bold text-dark mb-3">エンデュランスと精神力</h4>
                <p className="text-base text-gray-secondary leading-relaxed">
                  ロードレースは数時間に及ぶことが多く、エンデュランス（持久力・忍耐力）が非常に重要になります。さらに、厳しい状況下での強い精神力も競技者に求められるため、人間の限界に挑むドラマが生まれます。これらの要素が組み合わさることで、ロードレースは単なるスポーツを超えたエンデュランススポーツとして魅力に満ちた競技となっています。
                </p>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-dark text-center mb-12">
              権利の提供
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-off-white border border-gray-200 rounded-xl p-6 text-center">
                <h4 className="text-base font-bold text-dark mb-2">ツアーロゴ使用</h4>
                <p className="text-sm text-gray-secondary">サポートしていただくツアーのロゴの使用権</p>
              </div>
              <div className="bg-off-white border border-gray-200 rounded-xl p-6 text-center">
                <h4 className="text-base font-bold text-dark mb-2">写真使用権</h4>
                <p className="text-sm text-gray-secondary">サポートしていただくレース写真、表彰式写真の使用権</p>
              </div>
              <div className="bg-off-white border border-gray-200 rounded-xl p-6 text-center">
                <h4 className="text-base font-bold text-dark mb-2">副賞の贈呈権</h4>
                <p className="text-sm text-gray-secondary">スポンサー様の特別賞の設定</p>
              </div>
              <div className="bg-off-white border border-gray-200 rounded-xl p-6 text-center">
                <h4 className="text-base font-bold text-dark mb-2">各賞ジャージへの社名ロゴ</h4>
                <p className="text-sm text-gray-secondary">年間サポートしていただく場合はリーダージャージへの社名ロゴの掲載</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="w-full bg-off-white py-12 md:py-16 lg:py-24 px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
            お問い合わせ
          </h2>
          <p className="text-base text-gray-secondary mb-8 max-w-xl mx-auto">
            スポンサーシップに関するご質問・ご相談は、お気軽にお問い合わせください。
          </p>
          <a
            href="mailto:info@cycle-net.jp"
            className="inline-flex items-center gap-2 bg-accent text-dark text-base font-bold px-10 py-4 rounded-lg hover:bg-accent-hover transition-colors duration-300 cursor-pointer whitespace-nowrap"
          >
            お問い合わせはこちら
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}