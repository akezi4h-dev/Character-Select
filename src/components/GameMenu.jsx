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
      <BackgroundLayer activeTheme={activeTheme} />

      {/* Title + nav — fixed height so layout never shifts when text changes */}
      <div className="relative z-10 flex-shrink-0" style={{ marginTop: '60px' }}>
        <div style={{
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h1 style={{
            fontSize: '44px',
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
            color: selected ? selected.color.text : '#6CC2EE',
          }}>
            {selected ? selected.name.toUpperCase() : 'SELECT YOUR RACER'}
          </h1>
        </div>
        <div className="px-8 pt-2 pb-1">
          <NavTabs />
        </div>
      </div>

      {/* Left panel only — right panel is absolutely positioned and outside flex flow */}
      <div className="relative z-10 flex flex-1 px-8 pt-4">
        <div style={{
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <CharacterGrid
            characters={CHARACTERS}
            selected={selected}
            onSelect={setSelected}
            onHover={setHovered}
            onLeave={() => setHovered(null)}
          />
        </div>
      </div>

      {/* Right panel — absolutely positioned, perfectly centered in right half, never clips */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        zIndex: 15,
      }}>
        <CharacterPreview character={selected} />
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 flex items-center px-8 py-4 flex-shrink-0">
        <BackButton />
      </div>

      {/* START — fixed, centered at bottom */}
      <StartButton disabled={!selected} activeColor={selected ? selected.color.text : '#6CC2EE'} />
    </div>
  )
}
