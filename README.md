# CAR LOCAL

市町村 × 車種・型式 × 車買取の比較サイト。

## Repository

Recommended repository name: `niche-compare-hub`

## Domain candidates

Confirmed domain: `nichehikaku.jp`

Other candidates:

- `nichehikaku.jp`
- `reviewhikaku.jp`
- `spotcompare.jp`
- `kurabeta.jp`

## Concept

喫煙可ホテル、深夜漫画喫茶、遠征宿、レトロ店、趣味施設など狭い条件に特化した比較/レビュー/クーポンサイト。

## Technical Selection

- Frontend: Vite + React 19
- Styling: Plain CSS
- Initial data: Static seed records in `src/App.jsx`
- UGC: localStorage for MVP posts and saved leads
- Deployment target: GitHub Pages or static hosting
- Future data layer: Supabase or Cloudflare D1
- SEO/AIO/LLMO: structured data, answer block, FAQ, sitemap, robots and `llms.txt`

## Revenue Paths

- 成果報酬アフィリエイト
- 比較枠広告
- クーポン送客
- 有料ランキング
- レビュー分析レポート

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```

## UGC MVP

- 市町村、車種・型式、査定方式を紐付けて投稿
- 年式、グレード、走行距離、初回提示額、最終成約額、修復歴を分離
- 限定色、MT、寒冷地仕様、純正戻し可などのレアタグ
- 加点・減点、減額理由、業者間価格差を40〜800文字で収集
- 氏名、電話番号、車台番号、ナンバー、担当者名は収集しない
- 現在は静的サイト用の端末内保存。共有DB移行用のD1互換スキーマは `docs/ugc-schema.sql`
