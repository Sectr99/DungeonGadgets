import Image from 'next/image'

export default function Hero() {
  return (
    <div
      className="flex flex-col items-center text-center pb-6 relative"
      style={{ borderBottom: '1px solid #38323e' }}
    >
      {/* Gold shimmer on divider */}
      <div
        className="absolute bottom-[-1px] left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent 10%, #d4a840 40%, #f0c84a 50%, #d4a840 60%, transparent 90%)', opacity: 0.4 }}
      />

      <Image
        src="/DungeonGadgetsLogo.png"
        alt="Dungeon Gadgets"
        width={420}
        height={420}
        className="w-[min(200px,45%)] h-auto mb-4"
        style={{ filter: 'drop-shadow(0 0 40px rgba(140,80,200,0.3)) drop-shadow(0 0 80px rgba(212,168,64,0.2))' }}
        priority
      />

      <p style={{
        fontFamily: 'var(--font-eb-garamond)',
        fontSize: '1rem',
        color: '#c8a860',
        lineHeight: 1.85,
        fontStyle: 'italic',
        maxWidth: '420px',
      }}>
        A small collection of utilities built for tabletop adventurers. Each tool does one thing well — and gets out of your way.
      </p>
    </div>
  )
}
