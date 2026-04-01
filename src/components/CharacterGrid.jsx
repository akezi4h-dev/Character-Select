import { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard'

// 2×2 grid layout:
// [ Steve ]   [ Gurchen ]
// [ Gerald ]  [ Barry   ]
// Press G (or click the Grid button) to toggle a CSS grid overlay for layout inspection.
export default function CharacterGrid({ characters, selected, onSelect, onHover, onLeave }) {
  const [showGrid, setShowGrid] = useState(false)

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'g' || e.key === 'G') setShowGrid((v) => !v)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  return (
    <div className="relative">
      {/* Grid toggle button */}
      <button
        onClick={() => setShowGrid((v) => !v)}
        className={`
          absolute -top-8 right-0 z-30 px-2 py-0.5 rounded text-xs font-mono font-bold
          border transition-all duration-150
          ${showGrid
            ? 'bg-red-400 text-white border-red-500'
            : 'bg-white/60 text-pink-400 border-pink-200 hover:bg-white/80'}
        `}
      >
        Grid [G]
      </button>

      {/* Card grid */}
      <div
        className="relative grid grid-cols-2 gap-8"
        onMouseLeave={onLeave}
      >
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            isSelected={selected?.id === character.id}
            onSelect={onSelect}
            onHover={onHover}
          />
        ))}

        {/* CSS grid overlay — shows cell boundaries and gap spacing */}
        {showGrid && (
          <div className="absolute inset-0 pointer-events-none z-20 grid grid-cols-2 gap-8">
            {characters.map((_, i) => (
              <div
                key={i}
                className="border-2 border-red-400/70 bg-red-300/10 rounded-2xl flex items-end justify-start p-1"
              >
                <span className="text-red-500/80 text-xs font-mono leading-none">
                  cell {i + 1}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Gap size label — only shown with overlay */}
      {showGrid && (
        <div className="mt-1 text-right text-xs font-mono text-red-400/80">
          gap: 32px · cols: 2
        </div>
      )}
    </div>
  )
}
