import KartDisplay from './KartDisplay'
import StatBars from './StatBars'

const DETAILS = [
  { label: 'AGE',             value: '???' },
  { label: 'FAVORITE FOOD',   value: '???' },
  { label: 'FAVORITE ANIMAL', value: '???' },
  { label: 'CATCHPHRASE',     value: '???' },
]

export default function CharacterPreview({ character }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '48px',
      paddingBottom: '24px',
      boxSizing: 'border-box',
    }}>

      {/* Stat bars — upper portion */}
      <div style={{ width: '80%', flexShrink: 0, marginBottom: '20px' }}>
        <StatBars character={character} />
      </div>

      {/* Character details — hidden when nothing selected */}
      {character && (
        <div style={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          width: '80%',
          marginBottom: '16px',
        }}>
          {DETAILS.map(({ label, value }) => (
            <p key={label} style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: '7px',
              margin: 0,
              color: character.color.text,
              letterSpacing: '0.04em',
            }}>
              {label}: {value}
            </p>
          ))}
        </div>
      )}

      {/* Kart — centered in remaining space */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        width: '100%',
      }}>
        <KartDisplay key={character?.id ?? 'empty'} character={character} />
      </div>

    </div>
  )
}
