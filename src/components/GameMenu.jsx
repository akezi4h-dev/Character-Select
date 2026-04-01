import { useState } from 'react'
import { CHARACTERS } from '../data/characters'
import BackgroundLayer from './BackgroundLayer'
import NavTabs from './NavTabs'
import CharacterGrid from './CharacterGrid'
import CharacterPreview from './CharacterPreview'
import BackButton from './BackButton'
import StartButton from './StartButton'

export default function GameMenu() {
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)

  const activeTheme = hovered?.theme ?? selected?.theme ?? 'default'

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col">
      {/* Background */}
      <BackgroundLayer activeTheme={activeTheme} />

      {/* Page title */}
      <div className="relative z-10 pt-6 text-center">
        <h1 className="text-pink-400 drop-shadow-sm" style={{ fontSize: '14px' }}>
          SELECT YOUR RACER
        </h1>
      </div>

      {/* Main two-panel content */}
      <div className="relative z-10 flex flex-1 overflow-hidden px-8 pt-4 pb-2 gap-8">

        {/* Left panel — nav tabs + character grid */}
        <div className="w-2/5 flex flex-col items-center gap-6 justify-center">
          <NavTabs />
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
