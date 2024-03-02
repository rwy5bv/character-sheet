import './Abilities.css';
export function Abilities({ strength, dexterity, constitution, intelligence, wisdom, charisma }) {
  return (
    <div className="abilities">
      <h2> Abilities</h2>
      <form>
        <label> Strength</label>
        <textarea
          value={strength} />
        <br />
        <label> Dexterity</label>
        <textarea
          value={dexterity} />
        <br />
        <label> Constitution</label>
        <textarea
          value={constitution} />
        <br />
        <label> Intelligence</label>

        <textarea
          value={intelligence} />
        <br />
        <label> Wisdom</label>

        <textarea
          value={wisdom} />
        <br />
        <label> Charisma</label>
        <textarea
          value={charisma} />
        <br />

      </form>
    </div>
  );
}
