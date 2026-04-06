import { useState } from 'react'
import { CHARACTERS } from '../data/characters'
import CharacterCard from './CharacterCard'
import StatBars from './StatBars'
import KartDisplay from './KartDisplay'
import StartButton from './StartButton'
import BackButton from './BackButton'

const DETAILS = [
  ['AGE', '???'],
  ['FAVORITE FOOD', '???'],
  ['FAVORITE ANIMAL', '???'],
  ['CATCHPHRASE', '???'],
]

const CARD_NAME_SIZE = '10px'

export default function GameMenu() {
  const [selected, setSelected] = useState(null)
  const [hovered,  setHovered]  = useState(null)

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      overflow: 'hidden',
      background: 'linear-gradient(to bottom, #87CEEB 0%, #FEF9C3 60%, #FDE68A 100%)',
    }}>

      {/* ── LEFT PANEL ── */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '50%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        paddingTop: '40px', gap: '20px',
        boxSizing: 'border-box',
        zIndex: 10,
      }}>

        {/* Title — fixed height, never shifts */}
        <div style={{
          height: '80px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <h1 style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: '26px',
            whiteSpace: 'nowrap',
            color: selected ? selected.color.text : '#6CC2EE',
            margin: 0,
            textShadow: '2px 2px 0 rgba(0,0,0,0.08)',
          }}>
            {selected ? selected.name.toUpperCase() : 'SELECT YOUR RACER'}
          </h1>
        </div>

        {/* Subheader — fixed height so grid never moves */}
        <div style={{ height: '30px', display: 'flex', alignItems: 'center' }}>
          {selected && (
            <p style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '11px',
              color: selected.color.text,
              opacity: 0.65,
              margin: 0,
              letterSpacing: '0.04em',
            }}>
              {selected.subheader}
            </p>
          )}
        </div>

        {/* Card grid — 2×2, NEVER moves */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 200px)',
          gap: '20px',
          flexShrink: 0,
        }}>
          {CHARACTERS.map((char) => (
            <CharacterCard
              key={char.id}
              character={char}
              isSelected={selected?.id === char.id}
              onSelect={setSelected}
              onHover={setHovered}
              onLeave={() => setHovered(null)}
              nameFontSize={CARD_NAME_SIZE}
            />
          ))}
        </div>

      </div>

      {/* ── RIGHT PANEL ── */}
      <div style={{
        position: 'fixed',
        top: 0, right: 0,
        width: '50%', height: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        padding: '20px',
        boxSizing: 'border-box',
        zIndex: 10,
        overflow: 'visible',
      }}>

        {/* Stats block — hidden until a character is selected */}
        {selected && (
          <div style={{
            display: 'flex', flexDirection: 'column', gap: '8px',
            width: '100%', maxWidth: '360px',
          }}>
            {DETAILS.map(([label, value]) => (
              <p key={label} style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: CARD_NAME_SIZE,
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
        <div style={{ width: '100%', maxWidth: '360px', flexShrink: 0 }}>
          <StatBars character={selected} />
        </div>

        {/* Kart — key forces remount + animation retrigger on each selection */}
        <KartDisplay key={selected?.id ?? 'empty'} character={selected} />

      </div>

      {/* Back button — fixed bottom left */}
      <BackButton />

      {/* START — fixed bottom center */}
      <StartButton
        disabled={!selected}
        activeColor={selected ? selected.color.text : '#6CC2EE'}
      />
    </div>
  )
}
