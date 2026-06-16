import ToolCard from './ToolCard'

const tools = [
  {
    title: 'Lineage',
    description:
      'Trace bloodlines, build ancestry trees, and define your character's heritage across generations.',
    href: 'https://lineage.dungeongadgets.com/',
    ctaLabel: 'Build a Lineage →',
    accentClass: 'text-emerald-400',
    icon: '🌿',
  },
  {
    title: 'Dungeon Tracker',
    description:
      'Map your crawl, track room states, log encounters, and never lose your place in the deep dark.',
    href: 'https://tracker.dungeongadgets.com/',
    ctaLabel: 'Enter the Dungeon →',
    accentClass: 'text-amber-400',
    icon: '🗺',
  },
  {
    title: 'Token Forge',
    description:
      'Create, customize, and export tokens for your characters and monsters — ready for the table.',
    href: 'https://tokenforge.dungeongadgets.com/',
    ctaLabel: 'Forge a Token →',
    accentClass: 'text-rose-400',
    icon: '🔰',
  },
]

export default function ToolGrid() {
  return (
    <section id="tools" className="py-24 px-6 bg-stone-800">
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl tracking-widest uppercase text-parchment">
            The Arsenal
          </h2>
          <div className="divider-ornamental mt-6 max-w-xs mx-auto" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </section>
  )
}
