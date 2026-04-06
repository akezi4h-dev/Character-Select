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
      paddingTop: '150px',
      paddingBottom: '24px',
      paddingLeft: '20px',
      paddingRight: '20px',
      boxSizing: 'border-box',
    }}>

      {/* Character details — top of right panel, hidden when nothing selected */}
      {character && (
        <div style={{
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
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

      {/* Stat bars — below character details */}
      <div style={{ width: '80%', flexShrink: 0, marginBottom: '8px' }}>
        <StatBars character={character} />
      </div>

      {/* Kart — takes remaining space, bottom-aligned to match card grid level */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        overflow: 'visible',
        width: '100%',
        paddingBottom: '60px',
      }}>
        <KartDisplay key={character?.id ?? 'empty'} character={character} />
      </div>

    </div>
  )
}
