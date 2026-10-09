type IcProps = { className?: string }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
} as const

export function IcMenu({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}

export function IcChev({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function IcGift({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <path d="M4 11v9h16v-9" />
      <path d="M2 7h20v4H2z" />
      <path d="M12 7v13" />
      <path d="M12 7c-1.5-3.5-7-3-7 0" />
      <path d="M12 7c1.5-3.5 7-3 7 0" />
    </svg>
  )
}

export function IcTrophy({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <path d="M7 4h10v6a5 5 0 0 1-10 0z" />
      <path d="M7 5H4v2a4 4 0 0 0 4 4" />
      <path d="M17 5h3v2a4 4 0 0 1-4 4" />
    </svg>
  )
}

export function IcUsers({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c.8-3.5 3.4-5 6.5-5s5.7 1.5 6.5 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M17.5 15c2.3.3 3.6 1.7 4 4" />
    </svg>
  )
}

export function IcCrown({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <path d="m3 8 4.5 4L12 6l4.5 6L21 8v10H3z" />
    </svg>
  )
}

export function IcNews({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M7 9h6" />
      <path d="M7 13h10" />
      <path d="M7 16h10" />
    </svg>
  )
}

export function IcChat({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H3l2-3.2A8.5 8.5 0 1 1 21 11.5z" />
    </svg>
  )
}

export function IcHeart({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <path d="M12 20s-7-4.5-9-9c-1.3-3 1-7 4.5-7 2 0 3.5 1 4.5 3 1-2 2.5-3 4.5-3 3.5 0 5.8 4 4.5 7-2 4.5-9 9-9 9z" />
    </svg>
  )
}

export function IcShield({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
    </svg>
  )
}

export function IcHeadphones({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <rect x="3" y="14" width="4" height="6" rx="1.5" />
      <rect x="17" y="14" width="4" height="6" rx="1.5" />
    </svg>
  )
}

export function IcGlobe({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3.5 3 14.5 0 18-3-3.5-3-14.5 0-18z" />
    </svg>
  )
}

export function IcDice({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="8.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="15.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IcBall({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M5 5.5c4 3.5 4 9.5 0 13" />
      <path d="M19 5.5c-4 3.5-4 9.5 0 13" />
    </svg>
  )
}

export function IcSearch({ className }: IcProps) {
  return (
    <svg className={className} {...stroke}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}
