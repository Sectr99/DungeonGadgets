const tools = [
  {
    name: 'Lineage',
    desc: "Build ancestry trees and define your character's heritage across generations.",
    href: 'https://lineage.dungeongadgets.com/',
    dot: '#6ee7a0',
    row: 'row-lineage',
    cta: 'Enter',
  },
  {
    name: 'Dungeon Tracker',
    desc: 'Track room states, log encounters, and map your crawl through the deep dark.',
    href: 'https://tracker.dungeongadgets.com/',
    dot: '#fbbf24',
    row: 'row-tracker',
    cta: 'Enter',
  },
  {
    name: 'Token Forge',
    desc: 'Create and export tokens for characters and monsters, ready for the table.',
    href: 'https://tokenforge.dungeongadgets.com/',
    dot: '#f87171',
    row: 'row-forge',
    cta: 'Enter',
  },
]

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function ToolList() {
  return (
    <div className="pt-5">
      <p style={{
        fontFamily: 'var(--font-cinzel)',
        fontSize: '0.56rem',
        letterSpacing: '0.45em',
        textTransform: 'uppercase',
        color: '#d4a840',
        opacity: 0.6,
        marginBottom: '0.75rem',
      }}>
        The Arsenal
      </p>

      {tools.map((tool) => (
        <a key={tool.name} href={tool.href} className={`tool-row ${tool.row}`}>
          <div>
            <div className="tool-dot" style={{ background: tool.dot }} />
            <div className="tool-name">{tool.name}</div>
            <div className="tool-desc">{tool.desc}</div>
          </div>
          <span className="tool-cta">
            {tool.cta}
            <ArrowIcon />
          </span>
        </a>
      ))}
    </div>
  )
}
