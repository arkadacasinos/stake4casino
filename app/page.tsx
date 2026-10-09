import SiteHeader from '@/components/site-header'
import SiteRail from '@/components/site-rail'
import SiteHero from '@/components/site-hero'
import SiteStats from '@/components/site-stats'
import SiteArticle from '@/components/site-article'
import SiteFooter from '@/components/site-footer'

export default function Page() {
  return (
    <div className="k8m3-shell">
      <SiteHeader />
      <div className="k8m3-zone">
        <SiteRail />
        <a href="#!" className="k8m3-scrim" aria-label="Закрыть меню навигации" />
        <main className="k8m3-main" id="main">
          <SiteHero />
          <SiteStats />
        </main>
      </div>
      <SiteArticle />
      <SiteFooter />
    </div>
  )
}
