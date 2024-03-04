export function CharacterName({ name }) {
  return (
    <div className="characterName">
      <h2> Character Name</h2>
      <form>
        <input type="text"
          value={name} />
      </form>
    </div>
  );
}
