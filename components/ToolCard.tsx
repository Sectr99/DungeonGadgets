import type { ReactNode } from 'react'
import { clsx } from 'clsx'

interface ToolCardProps {
  title: string
  description: string
  href: string
  ctaLabel: string
  accentClass: string
  icon: ReactNode
}

export default function ToolCard({
  title,
  description,
  href,
  ctaLabel,
  accentClass,
  icon,
}: ToolCardProps) {
  return (
    <div
      className={clsx(
        'group texture-stone rounded-lg border border-slate-700 p-8 flex flex-col gap-5',
        'transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover hover:border-slate-600'
      )}
    >
      {/* Icon */}
      <div className={clsx('text-4xl', accentClass)}>{icon}</div>

      {/* Title */}
      <h3 className={clsx('font-display text-xl tracking-wide uppercase', accentClass)}>
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-slate-400 text-base leading-relaxed flex-1">
        {description}
      </p>

      {/* CTA */}
      <a
        href={href}
        className={clsx(
          'self-start font-display text-sm tracking-widest uppercase transition-opacity duration-200 hover:opacity-70',
          accentClass
        )}
      >
        {ctaLabel}
      </a>
    </div>
  )
}
