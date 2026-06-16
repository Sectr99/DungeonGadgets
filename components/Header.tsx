import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header
      className="relative flex items-center justify-between px-12 py-6 border-b flex-shrink-0 z-10"
      style={{
        borderColor: '#22202a',
        background: 'rgba(6,6,10,0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {/* Gold shimmer line */}
      <div
        className="absolute bottom-[-1px] left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent 5%, #d4a840 35%, #f0c84a 50%, #d4a840 65%, transparent 95%)', opacity: 0.35 }}
      />

      <Image
        src="/LogoTextNormal.png"
        alt="Dungeon Gadgets"
        width={180}
        height={40}
        className="h-8 w-auto object-contain"
        priority
      />

      <nav className="flex gap-8">
        <Link href="#about" style={{ fontFamily: 'var(--font-eb-garamond)', fontSize: '0.9rem', color: '#c8a860', textDecoration: 'none', letterSpacing: '0.04em' }}
          className="transition-colors hover:text-[#f5e8c4]">
          About
        </Link>
        <a href="https://github.com/Sectr99/DungeonGadgets" target="_blank" rel="noopener"
          style={{ fontFamily: 'var(--font-eb-garamond)', fontSize: '0.9rem', color: '#c8a860', textDecoration: 'none', letterSpacing: '0.04em' }}
          className="transition-colors hover:text-[#f5e8c4]">
          GitHub
        </a>
      </nav>
    </header>
  )
}
