import "./SavingThrows.css";
export function SavingThrows({ strengthSave, dexSave, conSave, intSave, wisSave, chaSave }) {
  return (
    <div className="savingThrows">
      <h2>Saving Throws</h2>
      <table>
        <tr>
          <td><button type="radio"></button></td>
          <td><label> Strength </label></td>
          <td><input type="text" value={strengthSave} /></td>
        </tr>
        <tr>
          <td><button type="radio"></button></td>
          <td><label> Dexterity </label></td>
          <td><input type="text" value={dexSave} /></td>
        </tr>
        <tr>
          <td><button type="radio"></button></td>
          <td><label> Constitution </label></td>
          <td><input type="text" value={conSave} /></td>
        </tr>
        <tr>
          <td><button type="radio"></button></td>
          <td><label> Intelligence </label></td>
          <td><input type="text" value={intSave} /></td>
        </tr>
        <tr>
          <td><button type="radio"></button></td>
          <td><label> Wisdom </label></td>
          <td><input type="text" value={wisSave} /></td>
        </tr>
        <tr>
          <td><button type="radio"></button></td>
          <td><label> Charisma </label></td>
          <td><input type="text" value={chaSave} /></td>
        </tr>
      </table>
    </div>
  );

}
