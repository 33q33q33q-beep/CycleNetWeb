import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
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

  return (
    <div className="w-full">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden bg-off-white flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-dark mb-6">
              会社<span className="text-accent">概要</span>
            </h1>
            <div className="text-lg md:text-xl text-gray-secondary max-w-3xl mx-auto leading-relaxed space-y-6">
              <p>サイクルネットは自転車競技の存在意義をブランディングするとともに</p>
              <p>
                自転車の楽しみを多くの方に伝える事で、世の中に感動と健康を提供していきます。
              </p>
            </div>
          </div>
        </section>

        {/* Business */}
        <section ref={sectionRef} className="w-full bg-white py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 pb-4 border-b border-gray-200">
              業務内容
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-secondary leading-relaxed mb-12">
              <p>
                JBCF（全日本実業団自転車競技連盟）の広報・宣伝業務。協賛営業業務。WEB開発。
              </p>
              <p>
                GachinkoCycleTVの企画・制作・運営（ロードレースの公式配信）
              </p>
              <p>
                地方自治体との折衝（サイクルツーリズムのコンサルティング業務）
              </p>
            </div>

            {/* Company Info */}
            <div className="bg-off-white rounded-xl p-6 md:p-10 mb-12">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-4 border-b border-gray-200">
                  <span className="text-sm text-gray-muted w-32 shrink-0">会社名</span>
                  <span className="text-base text-dark font-medium">サイクルネット株式会社</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-4 border-b border-gray-200">
                  <span className="text-sm text-gray-muted w-32 shrink-0">設立日</span>
                  <span className="text-base text-dark font-medium">2022年4月4日</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-4 border-b border-gray-200">
                  <span className="text-sm text-gray-muted w-32 shrink-0">所在地</span>
                  <span className="text-base text-dark font-medium">東京都渋谷区千駄ヶ谷1丁目5番1号</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-4 border-b border-gray-200">
                  <span className="text-sm text-gray-muted w-32 shrink-0">代表取締役</span>
                  <span className="text-base text-dark font-medium">田中 修</span>
                </div>
              </div>
            </div>

            {/* CEO History */}
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 pb-4 border-b border-gray-200">
              代表者略歴
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-accent font-bold text-sm w-16 shrink-0 pt-1">1987</span>
                <div className="text-base text-gray-secondary leading-relaxed">
                  <p className="text-dark font-medium mb-1">㈱共立に入社</p>
                  <p>東京ドーム担当として、各種イベントに携わる</p>
                  <p>サイモン&ガーファンクル日本公演</p>
                  <p>JRAファイナルドリームプロデュース</p>
                  <p>東京ドームでのNBA・MLB日本開催等</p>
                  <p>日本人アーティスト全国コンサートにテクニカルとして参加</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-bold text-sm w-16 shrink-0 pt-1">2005</span>
                <div className="text-base text-gray-secondary leading-relaxed">
                  <p>退社</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-bold text-sm w-16 shrink-0 pt-1">2006</span>
                <div className="text-base text-gray-secondary leading-relaxed">
                  <p>東京DOMEの新ホール施設事業でプロジェクトコンサルタントとして関わる。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-bold text-sm w-16 shrink-0 pt-1">2011</span>
                <div className="text-base text-gray-secondary leading-relaxed">
                  <p>トライアンフ株式会社（サイクルネットのグループ会社）イベント制作部門プロデューサーに就任</p>
                  <p>テレサテン生誕60周年記念公演プロデュース</p>
                  <p>ニコニコ超会議・企業イベント等</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-bold text-sm w-16 shrink-0 pt-1">2019</span>
                <div className="text-base text-gray-secondary leading-relaxed">
                  <p>東京2020オリンピック・パラリンピック競技大会</p>
                  <p>水泳会場のベニューマネージャーに携わる</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-accent font-bold text-sm w-16 shrink-0 pt-1">2024</span>
                <div className="text-base text-gray-secondary leading-relaxed">
                  <p className="text-dark font-medium">サイクルネット株式会社の代表に就任</p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">
                お問い合わせ
              </h2>
              <p className="text-base text-gray-secondary mb-4">
                メールでのお問い合わせはこちら
              </p>
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