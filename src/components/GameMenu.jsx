import CharacterGrid from './CharacterGrid'
import CharacterPreview from './CharacterPreview'
import BackButton from './BackButton'
import StartButton from './StartButton'
import { useState } from 'react'

// Placeholder characters — to be replaced with real data
const CHARACTERS = []

export default function GameMenu() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-sky-100 flex flex-col">
      {/* Main two-panel layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left panel — character selection grid */}
        <div className="w-2/5 flex items-center justify-center p-6">
          <CharacterGrid
            characters={CHARACTERS}
            selected={selected}
            onSelect={setSelected}
          />
        </div>

        {/* Right panel — character preview */}
        <div className="w-3/5 flex items-center justify-center p-6">
          <CharacterPreview character={selected} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex justify-between items-center px-8 py-4">
        <BackButton />
        <StartButton disabled={!selected} />
      </div>
    </div>
  )
}
