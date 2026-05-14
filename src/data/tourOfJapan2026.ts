export type TourOfJapanStage = {
  stage: string;
  titleJa: string;
  titleEn: string;
  url: string;
};

/** Tour of Japan 2026 — JBCF セクション用 */
export const tourOfJapan2026Stages: readonly TourOfJapanStage[] = [
  {
    stage: "Stage1",
    titleJa: "チャリ・ロト 堺ステージ",
    titleEn: "Chari-Lot Sakai Stage",
    url: "https://youtube.com/live/ZWgRNAIYsoc",
  },
  {
    stage: "Stage2",
    titleJa: "JPF京都ステージ",
    titleEn: "JPF Kyoto Stage",
    url: "https://youtube.com/live/xYvZTV1Syqk",
  },
  {
    stage: "Stage3",
    titleJa: "いなべステージ",
    titleEn: "Inabe Stage",
    url: "https://youtube.com/live/WjF9eSf53fQ",
  },
  {
    stage: "Stage4",
    titleJa: "Astemo 大鹿ステージ",
    titleEn: "Astemo Oshika Stage",
    url: "https://youtube.com/live/UqYf3uexsQ0",
  },
  {
    stage: "Stage5",
    titleJa: "綿半 信州飯田ステージ",
    titleEn: "Menhan Shinshu Iida Stage",
    url: "https://youtube.com/live/-rAntI72wTs",
  },
  {
    stage: "Stage6",
    titleJa: "スルガ銀行 富士山ステージ",
    titleEn: "Suruga Bank Mt. Fuji Stage",
    url: "https://youtube.com/live/tJQZ4AefhbM",
  },
  {
    stage: "Stage7",
    titleJa: "AMANO 相模原ステージ",
    titleEn: "AMANO Sagamihara Stage",
    url: "https://youtube.com/live/XftuURSDgDs",
  },
  {
    stage: "Stage8",
    titleJa: "SPEEDチャンネル 東京ステージ",
    titleEn: "SPEED Channel Tokyo Stage",
    url: "https://youtube.com/live/AVCMEGCeNhM",
  },
] as const;
