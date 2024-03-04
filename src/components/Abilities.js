import './Abilities.css';
export function Abilities({ strength, dexterity, constitution, intelligence, wisdom, charisma }) {
  return (
    <div className="abilities">
    <h2> Abilities</h2>
    <table>
      <tr>
        <td><label> Strength</label></td>
        <td><input type="text" value={strength} /></td>
      </tr>
      <tr>
        <td><label> Dexterity</label></td>
        <td><input type="text" value={dexterity} /></td>
      </tr>
      <tr>
        <td><label> Constitution</label></td>
        <td><input type="text" value={constitution} /></td>
      </tr>
      <tr>
        <td><label> Intelligence</label></td>
        <td><input type="text" value={intelligence} /></td>
      </tr>
      <tr>
        <td><label> Wisdom</label></td>
        <td><input type="text" value={wisdom} /></td>
      </tr>
      <tr>
        <td><label> Charisma</label></td>
        <td><input type="text" value={charisma} /></td>
      </tr>
    </table>
  </div>
  );
}
