import "./SavingThrows.css";
export function SavingThrows({ strengthSave, dexSave, conSave, intSave, wisSave, chaSave }) {
  return (
    <div className="savingThrows">
      <h2>Saving Throws</h2>
      <table>
        <tr>
          <td><button type="radio"></button></td>
          <td><label> Strength </label></td>
          <td><input type="text" placeholder="+5" value={strengthSave} /></td>
        </tr>
        <tr>
          <td><button type="radio"></button></td>
          <td><label> Dexterity </label></td>
          <td><input type="text" placeholder="+5" value={dexSave} /></td>
        </tr>
        <tr>
          <td><button type="radio"></button></td>
          <td><label> Constitution </label></td>
          <td><input type="text" placeholder="+5" value={conSave} /></td>
        </tr>
        <tr>
          <td><button type="radio"></button></td>
          <td><label> Intelligence </label></td>
          <td><input type="text" placeholder="+5" value={intSave} /></td>
        </tr>
        <tr>
          <td><button type="radio"></button></td>
          <td><label> Wisdom </label></td>
          <td><input type="text" placeholder="+5" value={wisSave} /></td>
        </tr>
        <tr>
          <td><button type="radio"></button></td>
          <td><label> Charisma </label></td>
          <td><input type="text" placeholder="+5" value={chaSave} /></td>
        </tr>
      </table>
    </div>
  );

}
