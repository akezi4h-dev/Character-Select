import { useState } from 'react'
import { CHARACTERS } from '../data/characters'
import BackgroundLayer from './BackgroundLayer'
import CharacterGrid from './CharacterGrid'
import BackButton from './BackButton'
import StartButton from './StartButton'
import StatBars from './StatBars'
import KartDisplay from './KartDisplay'

const DETAILS = [
  { label: 'AGE',             value: '???' },
  { label: 'FAVORITE FOOD',   value: '???' },
  { label: 'FAVORITE ANIMAL', value: '???' },
  { label: 'CATCHPHRASE',     value: '???' },
]

export default function GameMenu() {
  const [selected, setSelected] = useState(null)
  const [hovered, setHovered] = useState(null)

  const activeTheme = hovered?.theme ?? selected?.theme ?? 'default'

  return (
    <div className="relative w-screen h-screen overflow-hidden flex flex-col">
      <BackgroundLayer activeTheme={activeTheme} />

      {/* Title + subheader — fixed height so layout never shifts */}
      <div className="relative z-10 flex-shrink-0" style={{ marginTop: '60px' }}>
        <div style={{
          height: '120px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}>
          <h1 style={{
            fontSize: '57px',
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
            color: selected ? selected.color.text : '#6CC2EE',
            margin: 0,
          }}>
            {selected ? selected.name.toUpperCase() : 'SELECT YOUR RACER'}
          </h1>
          {selected && (
            <p style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '16px',
              color: selected.color.text,
              opacity: 0.7,
              margin: 0,
              letterSpacing: '0.05em',
            }}>
              {selected.subheader}
            </p>
          )}
        </div>
      </div>

      {/* Left panel — card grid only, in normal flow */}
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

      {/* RIGHT PANEL — fixed, fully independent, never touches left panel */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        gap: '12px',
        zIndex: 15,
        overflow: 'visible',
        boxSizing: 'border-box',
      }}>

        {/* Character details — hidden when nothing selected */}
        {selected && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            width: '100%',
            maxWidth: '300px',
          }}>
            {DETAILS.map(({ label, value }) => (
              <p key={label} style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '9.6px',
                margin: 0,
                color: selected.color.text,
                letterSpacing: '0.04em',
              }}>
                {label}: {value}
              </p>
            ))}
          </div>
        )}

        {/* Stat bars */}
        <div style={{ width: '100%', maxWidth: '300px' }}>
          <StatBars character={selected} />
        </div>

        {/* Kart */}
        <div style={{ overflow: 'visible' }}>
          <KartDisplay key={selected?.id ?? 'empty'} character={selected} />
        </div>

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
