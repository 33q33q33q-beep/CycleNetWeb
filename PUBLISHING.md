# 公開用パッケージ（ビルド済み）

このリポジトリは Vite + React のWebサイトです。
`npm run build` で生成される **`out/` フォルダ一式**が、インターネット公開用（静的ホスティング用）の成果物です。

## このZIPに含まれているもの

- `out/`（公開用ビルド成果物）
  - `out/index.html`
  - `out/assets/*`（JS/CSS）
  - `out/*.png` / `out/*.svg`（ロゴ・画像）
  - `out/_redirects`（ルーティング用）

## サブディレクトリ配信で「真っ白」になる件（重要）

ドメイン直下ではなく **`https://example.com/test202605-2/` のようにサブフォルダ配信**する場合、通常のビルドでは
`index.html` 内のスクリプト/スタイルが **`/assets/...`（サイトルート）** を向きます。
その結果 **JS/CSS が 404** になり、画面上は **何も表示されない（白画面）** になります。

### 対処（ビルドし直して再アップロード）

サブフォルダのパス（末尾スラッシュ有無どちらでも可）を `BASE_PATH` に渡してビルドしてください。

```bash
BASE_PATH=/test202605-2 npm run build
```

その後、`out/` の中身をサーバーの該当ディレクトリへ上げ直してください。  
※このリポジトリは `vite.config.ts` と `BrowserRouter basename` が `BASE_PATH` に追従するよう調整されています。

### Apache などで `/test202605-2/gctv` が 404 になる場合

SPA のため、`/test202605-2/gctv` に **直接アクセス**すると静的サーバーがファイルを見つけられず **404** になることがあります。
そのときは、そのディレクトリに **`index.html` へフォールバックする設定**が必要です（サーバーの種類で書き方が異なります）。

例: サブディレクトリ直下に `.htaccess` を置く（mod_rewrite が有効な場合）

```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /test202605-2/
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . index.html [L]
</IfModule>
```

`_redirects` は主に Netlify / 一部CDN向けであり、一般的な共用サーバーでは読まれないことが多いです。

## 公開方法（例）

### 1) 静的ホスティング（S3/Cloudflare Pages/さくら等）

- `out/` の中身を、公開ディレクトリにそのまま配置してください。
- SPAルーティング対応が必要な場合は `_redirects`（または同等設定）を有効化してください。

### 2) Vercel

- GitHub連携なら push だけで自動デプロイされます。
- 既存設定のままでOKです（Build: `npm run build` / Output: `out`）。

## 注意（外部リンク/外部画像）

サイト内には外部URL（YouTube等）へのリンクがあります。これはファイル同梱不要です。
一部セクションの背景画像は `readdy.ai` から取得する実装になっています（ローカル画像に置き換える場合は別途対応します）。

