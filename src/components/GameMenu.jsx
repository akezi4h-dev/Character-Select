import { useState } from 'react'
import { CHARACTERS } from '../data/characters'
import BackgroundLayer from './BackgroundLayer'
import CharacterGrid from './CharacterGrid'
import BackButton from './BackButton'
import StartButton from './StartButton'
import StatBars from './StatBars'
import KartDisplay from './KartDisplay'
import DevGrid from './DevGrid'

const DETAIL_KEYS = [
  { label: 'Age',            key: 'age' },
  { label: 'Favorite Food',  key: 'food' },
  { label: 'Favorite Place', key: 'place' },
  { label: 'Catchphrase',    key: 'catchphrase' },
]

export default function GameMenu() {
  const [selected, setSelected] = useState(null)
  const [hovered,  setHovered]  = useState(null)

  const activeTheme = hovered?.theme ?? selected?.theme ?? 'default'

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <BackgroundLayer activeTheme={activeTheme} />

      {/* Title — fixed, horizontally centered */}
      <div style={{
        position: 'fixed',
        top: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        whiteSpace: 'nowrap',
      }}>
        <h1 style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: '57px',
          letterSpacing: '0.1em',
          color: selected ? selected.color.text : '#6CC2EE',
          margin: 0,
        }}>
          {selected ? selected.name.toUpperCase() : 'SELECT YOUR RACER'}
        </h1>
      </div>

      {/* Subheader — fixed, horizontally centered, directly below title */}
      <div style={{
        position: 'fixed',
        top: '110px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        whiteSpace: 'nowrap',
        height: '30px',
        display: 'flex',
        alignItems: 'center',
      }}>
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

      {/* Left panel — card grid, fixed */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '50%', height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
      }}>
        <CharacterGrid
          characters={CHARACTERS}
          selected={selected}
          onSelect={setSelected}
          onHover={setHovered}
          onLeave={() => setHovered(null)}
        />
      </div>

      {/* Stats block — exact position x:915, y:225 */}
      {selected && (
        <div style={{
          position: 'fixed',
          left: '915px',
          top: '225px',
          zIndex: 20,
        }}>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '8px',
            marginBottom: '12px',
          }}>
            {DETAIL_KEYS.map(({ label, key }) => (
              <p key={key} style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: '9.6px',
                margin: 0,
                color: selected.color.text,
                letterSpacing: '0.04em',
              }}>
                {label}: {selected.details[key]}
              </p>
            ))}
          </div>
          <div style={{ width: '300px' }}>
            <StatBars character={selected} />
          </div>
        </div>
      )}

      {/* Kart — exact position x:915, y:450 */}
      <div style={{
        position: 'fixed',
        left: '915px',
        top: '450px',
        zIndex: 20,
        overflow: 'visible',
      }}>
        <KartDisplay key={selected?.id ?? 'empty'} character={selected} />
      </div>

      {/* Back button */}
      <BackButton />

      {/* START — fixed, centered at bottom */}
      <StartButton disabled={!selected} activeColor={selected ? selected.color.text : '#6CC2EE'} />

      {/* Dev grid overlay */}
      <DevGrid />
    </div>
  )
}
