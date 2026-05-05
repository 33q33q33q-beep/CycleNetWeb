/** 2026 JBCFロードレースシリーズ配信予定（随時更新） */
export type JbcfScheduleItem = {
  series: string;
  date: string;
  title: string;
  url?: string;
  pending?: boolean;
};

export const jbcfRoadSeriesSchedule2026: JbcfScheduleItem[] = [
  {
    series: "JPT 第1戦",
    date: "2月21日（土）",
    title: "第4回鹿屋・肝付ロードレース",
    url: "https://www.youtube.com/live/lDsCS-Zo8Ns?feature=share",
  },
  {
    series: "JCT 第1戦",
    date: "2月22日（日）",
    title: "第4回志布志クリテリウム",
    url: "https://www.youtube.com/live/8VhKmJwgbvI?feature=share",
  },
  {
    series: "JPT 第2戦",
    date: "3月28日（土）",
    title: "2026広島三原ロードレース",
    url: "https://www.youtube.com/live/PfNCHlAOlAE?feature=share",
  },
  {
    series: "JCT 第3戦",
    date: "3月29日（日）",
    title: "2026 マリモホールディングス 広島クリテリウム",
    url: "https://www.youtube.com/live/H8tiMvqEvSA?feature=share",
  },
  {
    series: "JPT 第2戦",
    date: "4月4日（土）",
    title: "第3回NTT東日本真岡芳賀ロードレース",
    url: "https://www.youtube.com/live/4WX1uNFnOR0?feature=share",
  },
  {
    series: "JCT 第3戦",
    date: "4月5日（日）",
    title: "第3回NTT東日本宇都宮清原クリテリウム",
    url: "https://www.youtube.com/live/GZbXNAkM77g?feature=share",
  },
  {
    series: "E1",
    date: "4月18日（土）",
    title:
      "第60回西日本ロードクラシック第7回播磨中央公園ロードレースDay1",
    url: "https://www.youtube.com/live/PkuuQzwRb8o?feature=share",
  },
  {
    series: "JPT 第4戦",
    date: "4月19日（日）",
    title:
      "第60回西日本ロードクラシック第7回播磨中央公園ロードレースDay2",
    url: "https://www.youtube.com/live/2BxOkUcb4LY?feature=share",
  },
  {
    series: "JPT 第5戦",
    date: "4月26日（日）",
    title: "第60回東日本ロードクラシックDay2",
    url: "https://www.youtube.com/live/MWdZ8Y1tNPA?feature=share",
  },
  {
    series: "E1 E2 E3",
    date: "5月31日（日）",
    title: "第3回綾川町ロードレース",
  },
  {
    series: "JCT 第4戦",
    date: "6月6日（土）",
    title: "第5回石川クリテリウム",
  },
  {
    series: "JPT 第6戦",
    date: "6月7日（日）",
    title: "第23回石川ロードレース（第15回ジュニアチャンピオンシップ）",
  },
  {
    series: "JPT 第7戦",
    date: "7月5日（日）",
    title: "第1回大町温泉郷ロードレース",
    pending: true,
  },
  {
    series: "JPT 第8戦",
    date: "9月6日（日）",
    title: "第1回西郷村ロードレース",
    pending: true,
  },
  {
    series: "JPT 第9戦",
    date: "9月19日（土）",
    title: "第11回南魚沼ロードレース",
    pending: true,
  },
  {
    series: "JCT 第4戦",
    date: "9月20日（日）",
    title: "第6回南魚沼クリテリウム",
    pending: true,
  },
];
