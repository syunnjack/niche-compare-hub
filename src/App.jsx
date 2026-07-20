import { useMemo, useState } from 'react'
import './App.css'

const municipalities = ['新宿区', '横浜市', '名古屋市', '大阪市', '福岡市']
const models = [
  { id: 'prius-60', maker: 'トヨタ', name: 'プリウス 60系', year: '2023年〜', demand: 92, note: 'ハイブリッド車の査定実績を確認' },
  { id: 'n-box-jf5', maker: 'ホンダ', name: 'N-BOX JF5/6', year: '2023年〜', demand: 89, note: '軽自動車専門店を含めて比較' },
  { id: 'serena-c28', maker: '日産', name: 'セレナ C28', year: '2022年〜', demand: 86, note: 'ミニバン需要と装備差を確認' },
  { id: 'jimny-jb64', maker: 'スズキ', name: 'ジムニー JB64', year: '2018年〜', demand: 95, note: 'カスタム部品を含む査定に対応' },
]
const services = [
  { id: 'direct', name: '地域対応・直接査定', type: '少ない連絡で進めたい', score: 94, strengths: ['地域対応店を比較', '出張査定', '契約前に条件確認'], action: '対応条件を確認' },
  { id: 'auction', name: 'オークション比較型', type: '価格を競わせたい', score: 91, strengths: ['複数社が入札', '電話対応を抑制', '最高額を比較'], action: '入札方式を確認' },
  { id: 'specialist', name: '車種専門店ルート', type: '装備・改造も評価したい', score: 88, strengths: ['型式別の査定', '純正部品も評価', '希少グレード対応'], action: '専門査定を確認' },
]
const checks = ['車検証の型式・初度登録', '走行距離と修復歴', '純正オプション・スペアキー', 'ローン残債と名義', '最低2方式の査定条件']

function App() {
  const [area, setArea] = useState('新宿区')
  const [modelId, setModelId] = useState('prius-60')
  const [searched, setSearched] = useState(false)
  const model = useMemo(() => models.find((item) => item.id === modelId) ?? models[0], [modelId])

  function compare(event) {
    event.preventDefault()
    setSearched(true)
    document.querySelector('#results')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top"><span>CAR</span> LOCAL</a>
        <nav aria-label="メインナビゲーション"><a href="#compare">査定方法を比較</a><a href="#guide">売却ガイド</a><a href="#about">運営方針</a></nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">市町村 × 車種型式 × 車買取</p>
          <h1>あなたの街で、<br/><em>その車に強い売り方</em>を。</h1>
          <p className="lead">地域と車種を組み合わせ、査定方式・対応条件・確認ポイントを整理。申込前に比較できる車買取ガイドです。</p>
          <div className="trust"><span>広告を明示</span><span>確認日を表示</span><span>型式単位で比較</span></div>
        </div>
        <aside className="market-card" aria-label="地域需要の参考指標">
          <div><span>LOCAL DEMAND</span><b>更新 2026.07.20</b></div>
          <strong>{model.demand}</strong><small>/100 参考需要指数</small>
          <div className="spark">{[44,61,53,72,68,84,92].map((value) => <i key={value} style={{height: `${value}%`}} />)}</div>
          <p>公開データ・掲載事業者情報・利用者報告を分けて管理します。</p>
        </aside>
      </section>

      <section className="compare-box" id="compare">
        <div><p className="eyebrow">QUICK COMPARE</p><h2>地域と車種を選ぶ</h2></div>
        <form onSubmit={compare}>
          <label>市町村<select value={area} onChange={(event) => setArea(event.target.value)}>{municipalities.map((item) => <option key={item}>{item}</option>)}</select></label>
          <label>車種・型式<select value={modelId} onChange={(event) => setModelId(event.target.value)}>{models.map((item) => <option value={item.id} key={item.id}>{item.maker} {item.name}</option>)}</select></label>
          <button>この条件で比較する</button>
        </form>
      </section>

      <section className="results" id="results" aria-live="polite">
        <div className="section-title"><div><p className="eyebrow">{searched ? 'YOUR COMPARISON' : 'COMPARISON SAMPLE'}</p><h2>{area}で{model.name}を売る方法</h2></div><p>{model.year} ・ {model.note}<br/>最終確認日 2026年7月20日</p></div>
        <div className="service-grid">
          {services.map((service, index) => <article className="service-card" key={service.id}>
            <div className="rank"><span>比較候補 {String(index + 1).padStart(2, '0')}</span><b>{service.score}</b></div>
            <p className="fit">{service.type}</p><h3>{service.name}</h3>
            <ul>{service.strengths.map((item) => <li key={item}>✓ {item}</li>)}</ul>
            <a href="#affiliate-disclosure">{service.action}<span>→</span></a>
            <small>広告リンク接続前の比較デモです。順位は報酬額だけでは決めません。</small>
          </article>)}
        </div>
      </section>

      <section className="guide" id="guide">
        <div><p className="eyebrow">BEFORE YOU SELL</p><h2>{model.name}の査定前チェック</h2><p>同じ車名でも型式・年式・グレードで査定条件が変わります。申込前に5項目を揃えると比較しやすくなります。</p></div>
        <ol>{checks.map((item, index) => <li key={item}><b>{String(index + 1).padStart(2, '0')}</b><span>{item}</span></li>)}</ol>
      </section>

      <section className="quality" id="about">
        <p className="eyebrow">MODERN SPIDER QUALITY GATE</p><h2>大量生成より、公開できる根拠。</h2>
        <div><article><b>実在関係</b><p>自治体コード、メーカー、車種、型式を正規化し、存在しない組み合わせを除外します。</p></article><article><b>根拠と鮮度</b><p>最低2件の情報源、有効な案件、確認日が揃ったページだけを公開します。</p></article><article><b>収益の透明性</b><p>広告・提携リンクを明示し、順位の評価軸とデータ更新日を掲載します。</p></article></div>
      </section>

      <footer id="affiliate-disclosure"><div className="brand"><span>CAR</span> LOCAL</div><p>当サイトは広告を含む予定です。現在は比較システムのデモ版で、外部査定申込は接続していません。掲載内容は契約前に各事業者でご確認ください。</p><nav><a href="#about">運営方針</a><a href="#affiliate-disclosure">広告掲載方針</a><a href="#top">ページ上部へ</a></nav></footer>
    </main>
  )
}

export default App
