import { IcMenu } from './site-icons'

export default function SiteHeader() {
  return (
    <header className="k8m3-topbar">
      <a className="k8m3-burger" href="#k8m3-menu" aria-label="Открыть меню навигации">
        <IcMenu className="k8m3-ic" />
      </a>
      <nav className="k8m3-tabs" aria-label="Разделы платформы">
        <a className="k8m3-tab k8m3-tab--on" href="#obzor">
          Казино
        </a>
        <a className="k8m3-tab" href="#igrat">
          Спорт
        </a>
      </nav>
      <a className="k8m3-logo" href="#main" aria-label="Stake — на главную">
        Stake
      </a>
      <span className="k8m3-spacer" aria-hidden="true" />
      <a className="k8m3-btn k8m3-btn--ghost" href="#registraciya">
        Войти
      </a>
      <a className="k8m3-btn k8m3-btn--blue" href="#registraciya">
        Зарегистрироваться
      </a>
    </header>
  )
}
