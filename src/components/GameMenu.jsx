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

      {/* Title + nav tabs pushed down 100px together */}
      <div className="relative z-10" style={{ marginTop: '100px' }}>
        {/* Title — shows character name when selected */}
        <div className="text-center pb-2">
          <h1 style={{ fontSize: '22px', color: '#f472b6', letterSpacing: '0.1em' }}>
            {selected ? selected.name.toUpperCase() : 'SELECT YOUR RACER'}
          </h1>
        </div>

        {/* Nav tabs */}
        <div className="px-8 pt-2 pb-1">
          <NavTabs />
        </div>
      </div>

      {/* Main two-panel content */}
      <div className="relative z-10 flex flex-1 overflow-hidden px-8 pt-4 pb-16 gap-8">
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

        {/* Right panel — kart preview */}
        <div className="w-3/5 flex items-center justify-center overflow-hidden">
          <CharacterPreview character={selected} />
        </div>
      </div>

      {/* Bottom bar — Back button only, START is fixed centered */}
      <div className="relative z-10 flex items-center px-8 py-4">
        <BackButton />
      </div>

      {/* START button — fixed, centered at bottom */}
      <StartButton disabled={!selected} />
    </div>
  )
}
