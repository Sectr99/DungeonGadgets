const ShieldIcon = () => (
  <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
    <path d="M6.5 1.5L2 3.5V6.5C2 9 4 11 6.5 12C9 11 11 9 11 6.5V3.5L6.5 1.5Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
  </svg>
)

export default function Footer() {
  const linkStyle = {
    fontFamily: 'var(--font-eb-garamond)',
    fontSize: '0.85rem',
    color: '#7a6840',
    textDecoration: 'none',
    letterSpacing: '0.03em',
  }

  return (
    <footer
      className="relative flex-shrink-0 z-10"
      style={{ borderTop: '1px solid #22202a', background: 'rgba(6,6,10,0.7)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
    >
      {/* Gold shimmer */}
      <div
        className="absolute top-[-1px] left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent 5%, #d4a840 35%, #f0c84a 50%, #d4a840 65%, transparent 95%)', opacity: 0.25 }}
      />

      <div className="grid grid-cols-3 items-center gap-4 px-12 py-5">
        <div className="flex gap-7">
          <a href="#about" style={linkStyle} className="hover:text-[#c8a860] transition-colors">About</a>
          <a href="https://github.com/Sectr99/DungeonGadgets" target="_blank" rel="noopener" style={linkStyle} className="hover:text-[#c8a860] transition-colors">GitHub</a>
          <a href="https://github.com/Sectr99/DungeonGadgets/issues" target="_blank" rel="noopener" style={linkStyle} className="hover:text-[#c8a860] transition-colors">Report an Issue</a>
        </div>

        <div className="text-center" style={{ fontFamily: 'var(--font-cinzel)', fontSize: '0.52rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#7a6840', opacity: 0.5 }}>
          Dungeon Gadgets &copy; 2026
        </div>

        <div className="flex justify-end">
          <span className="flex items-center gap-1.5" style={{ fontFamily: 'var(--font-eb-garamond)', fontSize: '0.85rem', color: '#7a6840' }}>
            <ShieldIcon />
            MIT License
          </span>
        </div>
      </div>
    </footer>
  )
}
