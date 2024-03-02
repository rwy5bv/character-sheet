export function CharacterName({ name }) {
  return (
    <div className="characterName">
      <h2> Character Name</h2>
      <form>
        <textarea
          value={name} />
        <br />

      </form>
    </div>
  );
}
