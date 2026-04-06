import CharacterCard from './CharacterCard'

// 2×2 grid layout — Grid toggle is handled by DevGrid component
export default function CharacterGrid({ characters, selected, onSelect, onHover, onLeave }) {
  return (
    <div
      className="grid grid-cols-2 gap-8"
      onMouseLeave={onLeave}
    >
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          isSelected={selected?.id === character.id}
          onSelect={onSelect}
          onHover={onHover}
        />
      ))}
    </div>
  )
}
