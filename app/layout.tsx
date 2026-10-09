import type { ReactNode } from 'react'
import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--k8m3-font',
  display: 'swap',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={manrope.variable}>
      <head>
        <meta name="yandex-verification" content="f83677908ced60ce" />
        <title>Stake казино — официальный сайт и рабочее stake зеркало | Стейк казино онлайн</title>
        <meta
          name="description"
          content="Stake casino официальный сайт и stake casino зеркало: стейк казино играть онлайн, стейк казино регистрация, бонусы и поддержка 24/7. Стейк казино сайт и стейк зеркало — вход на stake казино сегодня."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="stake casino, stake зеркало, stake casino зеркало, stake casino официальный сайт, стейк зеркало, стейк казино зеркало, стейк казино играть, стейк казино онлайн, стейк казино официальный, стейк казино официальный сайт, стейк казино регистрация, stake casino регистрация, stake казино, stake казино зеркало, стейк казино сайт, стейк казино"
        />
        <link rel="canonical" href="https://stake4casino.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content="https://stake4casino.vercel.app/" />
        <meta property="og:title" content="Stake казино — официальный сайт и рабочее stake зеркало | Стейк казино онлайн" />
        <meta
          property="og:description"
          content="Stake casino официальный сайт и stake casino зеркало: стейк казино играть онлайн, стейк казино регистрация, бонусы и поддержка 24/7. Стейк казино сайт и стейк зеркало — вход на stake казино сегодня."
        />
        <meta property="og:image" content="https://stake4casino.vercel.app/img/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stake казино — официальный сайт и рабочее stake зеркало | Стейк казино онлайн" />
        <meta
          name="twitter:description"
          content="Stake casino официальный сайт и stake casino зеркало: стейк казино играть онлайн, стейк казино регистрация, бонусы и поддержка 24/7. Стейк казино сайт и стейк зеркало — вход на stake казино сегодня."
        />
        <meta name="twitter:image" content="https://stake4casino.vercel.app/img/hero.jpg" />
        <meta name="theme-color" content="#0f212e" />
      </head>
      <body>{children}</body>
    </html>
  )
}
