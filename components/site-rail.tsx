import { IcChat, IcChev, IcCrown, IcGift, IcGlobe, IcHeadphones, IcHeart, IcNews, IcShield, IcTrophy, IcUsers } from './site-icons'

export default function SiteRail() {
  return (
    <aside className="k8m3-rail" id="k8m3-menu" aria-label="Меню сайта">
      <a className="k8m3-railitem k8m3-railitem--on" href="#bonusy">
        <IcGift className="k8m3-ic" />
        Акции
        <IcChev className="k8m3-chev" />
      </a>
      <a className="k8m3-railitem" href="#bonusy">
        <IcTrophy className="k8m3-ic" />
        Конкурсы
      </a>
      <a className="k8m3-railitem" href="#bezopasnost">
        <IcUsers className="k8m3-ic" />
        Партнерам
      </a>
      <a className="k8m3-railitem" href="#bonusy">
        <IcCrown className="k8m3-ic" />
        ВИП-клуб
      </a>
      <a className="k8m3-railitem" href="#obzor">
        <IcNews className="k8m3-ic" />
        Блог
      </a>
      <a className="k8m3-railitem" href="#faq">
        <IcChat className="k8m3-ic" />
        Форум
      </a>
      <div className="k8m3-railsep" aria-hidden="true" />
      <a className="k8m3-railitem" href="#bezopasnost">
        <IcHeart className="k8m3-ic" />
        Спонсорство
        <IcChev className="k8m3-chev" />
      </a>
      <a className="k8m3-railitem" href="#bezopasnost">
        <IcShield className="k8m3-ic" />
        Ответственная игра
      </a>
      <a className="k8m3-railitem" href="#bezopasnost">
        <IcHeadphones className="k8m3-ic" />
        Поддержка
      </a>
      <div className="k8m3-railsep" aria-hidden="true" />
      <div className="k8m3-railitem">
        <IcGlobe className="k8m3-ic" />
        Язык: Русский
        <IcChev className="k8m3-chev" />
      </div>
    </aside>
  )
}
