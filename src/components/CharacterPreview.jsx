import KartDisplay from './KartDisplay'

// Right panel — kart is the main focal point.
// Layout: kart image → kart label. No name above, no customize button.
export default function CharacterPreview({ character }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>
      <KartDisplay key={character?.id ?? 'empty'} character={character} />
    </div>
  )
}
