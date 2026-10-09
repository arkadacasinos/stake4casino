const tags: { label: string; href: string }[] = [
  { label: '#stakecasino', href: '#obzor' },
  { label: '#stakeзеркало', href: '#zerkalo' },
  { label: '#stakecasinoзеркало', href: '#zerkalo' },
  { label: '#stakecasinoофициальныйсайт', href: '#obzor' },
  { label: '#стейкзеркало', href: '#zerkalo' },
  { label: '#стейкказинозеркало', href: '#zerkalo' },
  { label: '#стейкказиноиграть', href: '#igrat' },
  { label: '#стейкказиноонлайн', href: '#mobile' },
  { label: '#стейкказиноофициальный', href: '#obzor' },
  { label: '#стейкказиноофициальныйсайт', href: '#itog' },
  { label: '#стейкказинорегистрация', href: '#registraciya' },
  { label: '#стейкказиносайт', href: '#bezopasnost' },
  { label: '#stakecasinoрегистрация', href: '#registraciya' },
  { label: '#stakeказино', href: '#bonusy' },
  { label: '#stakeказинозеркало', href: '#zerkalo' },
  { label: '#стейкказино', href: '#faq' },
]

export default function SiteFooter() {
  return (
    <footer className="k8m3-footer">
      <nav className="k8m3-tags" aria-label="Ключевые фразы и переходы к разделам">
        {tags.map((tag) => (
          <a key={tag.label} className="k8m3-tag" href={tag.href}>
            {tag.label}
          </a>
        ))}
      </nav>
      <p className="k8m3-legal">
        18+ Азартные игры могут вызывать зависимость. Играйте ответственно: устанавливайте лимиты депозитов и времени
        сессии, не рассматривайте игру как источник дохода. Материалы страницы носят информационно-ознакомительный
        характер. Stake casino — обзор платформы и рабочих зеркал для входа. © 2026
      </p>
    </footer>
  )
}
