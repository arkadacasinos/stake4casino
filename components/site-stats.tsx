import { IcBall, IcDice, IcSearch } from './site-icons'

export default function SiteStats() {
  return (
    <>
      <div className="k8m3-stats">
        <div className="k8m3-stat">
          <IcDice className="k8m3-ic" />
          Казино
          <span className="k8m3-stat-right">
            <span className="k8m3-dot" aria-hidden="true" />
            <span>28 890</span>
            <span className="k8m3-statnote">в игре</span>
          </span>
        </div>
        <div className="k8m3-stat">
          <IcBall className="k8m3-ic" />
          Спорт
          <span className="k8m3-stat-right">
            <span className="k8m3-dot" aria-hidden="true" />
            <span>32 976</span>
            <span className="k8m3-statnote">в ставках</span>
          </span>
        </div>
      </div>
      <form className="k8m3-search" role="search" action="/" method="get">
        <IcSearch className="k8m3-ic" />
        <input type="search" name="q" placeholder="Искать Stake.com" aria-label="Поиск по Stake.com" />
        <kbd className="k8m3-kbd">Ctrl + K</kbd>
      </form>
    </>
  )
}
