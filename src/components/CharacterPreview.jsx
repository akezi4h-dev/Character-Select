import KartDisplay from './KartDisplay'

// Right panel — kart is the main focal point.
// Fills the right panel fully so justify-content: center works for true vertical centering.
export default function CharacterPreview({ character }) {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <KartDisplay key={character?.id ?? 'empty'} character={character} />
    </div>
  )
}
