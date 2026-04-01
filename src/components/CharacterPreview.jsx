import KartDisplay from './KartDisplay'

// Right panel — kart is the main focal point.
// Layout: kart image → kart label. No name above, no customize button.
export default function CharacterPreview({ character }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <KartDisplay key={character?.id ?? 'empty'} character={character} />
    </div>
  )
}
