import { useState } from 'react'
import { CHARACTERS } from '../data/characters'
import { THEMES } from '../data/themes'
import BackgroundLayer from './BackgroundLayer'
import CharacterGrid from './CharacterGrid'
import StartButton from './StartButton'
import StatBars from './StatBars'
import KartDisplay from './KartDisplay'
import TransitionScreen from './TransitionScreen'
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
  const [transitioning, setTransitioning] = useState(false)

  const activeTheme = hovered?.theme ?? selected?.theme ?? 'default'
  const charColor = selected?.color.text
  const displayColor = hovered?.color.text ?? selected?.color.text ?? '#51A0C8'

  const handleStart = () => {
    if (selected) setTransitioning(true)
  }

  const handleTransitionComplete = () => {
    setTransitioning(false)
    setSelected(null)
  }

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
        <h1
          className="gradient-title"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '57px',
            letterSpacing: '0.1em',
            margin: 0,
            '--char-color': displayColor,
          }}
        >
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
          <p
            className="gradient-title"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '16px',
              margin: 0,
              letterSpacing: '0.05em',
              '--char-color': displayColor,
            }}
          >
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
          left: '775px',
          top: '220px',
          zIndex: 20,
        }}>
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '8px',
            marginBottom: '12px',
          }}>
            {DETAIL_KEYS.map(({ label, key }) => (
              <p
                key={key}
                className="gradient-title"
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: '16px',
                  margin: 0,
                  letterSpacing: '0.04em',
                  '--char-color': charColor,
                }}
              >
                {label}: {selected.details[key]}
              </p>
            ))}
          </div>
          <div style={{ width: '300px' }}>
            <StatBars character={selected} />
          </div>
        </div>
      )}

      {/* Kart — exact position per spec */}
      <div style={{
        position: 'absolute',
        left: '800px',
        top: '430px',
        width: '426px',
        height: '240px',
        background: 'transparent',
        overflow: 'visible',
        zIndex: 20,
      }}>
        <KartDisplay key={selected?.id ?? 'empty'} character={selected} />
      </div>

      {/* Kart shadow — fixed position x:995 y:720 */}
      {selected && (
        <div style={{
          position: 'fixed',
          left: '995px',
          top: '900px',
          width: '280px',
          height: '24px',
          background: 'rgba(0,0,0,0.15)',
          borderRadius: '50%',
          zIndex: 19,
          pointerEvents: 'none',
        }} />
      )}


      {/* START — fixed, centered at bottom */}
      <StartButton disabled={!selected} activeColor={selected ? (selected.color.button ?? selected.color.text) : '#6CC2EE'} activeGlow={selected ? selected.color.glow : 'rgba(108,194,238,0.6)'} onClick={handleStart} />

      {/* Transition screen */}
      {transitioning && (
        <TransitionScreen
          character={selected}
          bgImage={THEMES[selected.theme]?.image}
          onComplete={handleTransitionComplete}
        />
      )}

      {/* Dev grid overlay */}
      <DevGrid />
    </div>
  )
}
