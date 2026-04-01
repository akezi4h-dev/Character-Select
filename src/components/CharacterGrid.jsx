import CharacterCard from './CharacterCard'

export default function CharacterGrid({ characters, selected, onSelect }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          isSelected={selected?.id === character.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}
