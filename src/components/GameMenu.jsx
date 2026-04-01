import { useState } from 'react'
import { CHARACTERS } from '../data/characters'
import BackgroundLayer from './BackgroundLayer'
import CharacterGrid from './CharacterGrid'
import CharacterPreview from './CharacterPreview'
import BackButton from './BackButton'
import StartButton from './StartButton'

export default function GameMenu() {
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)

  // Background follows hover, falls back to selected, then default
  const activeTheme = hovered?.theme ?? selected?.theme ?? 'default'

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col">
      {/* Background — absolute, behind everything */}
      <BackgroundLayer activeTheme={activeTheme} />

      {/* Page title */}
      <div className="relative z-10 pt-6 text-center">
        <h1 className="text-3xl font-bold tracking-widest text-pink-400 drop-shadow-sm">
          SELECT YOUR RACER
        </h1>
      </div>

      {/* Main two-panel content */}
      <div className="relative z-10 flex flex-1 overflow-hidden px-8 pt-4 pb-2 gap-8">
        {/* Left panel — character grid */}
        <div className="w-2/5 flex items-center justify-center">
          <CharacterGrid
            characters={CHARACTERS}
            selected={selected}
            onSelect={setSelected}
            onHover={setHovered}
            onLeave={() => setHovered(null)}
          />
        </div>

        {/* Right panel — character preview */}
        <div className="w-3/5 flex items-center justify-center">
          <CharacterPreview character={selected} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 flex justify-between items-center px-8 py-4">
        <BackButton />
        <StartButton disabled={!selected} />
      </div>
    </div>
  )
}
