import "./ArmorAndHealth.css";
export function ArmorAndHealth({ AC, maxHP, tempHP, currentHP }) {
  return (<div className="armorAndHealth">
    <table>
      <tr>
        <td><label> AC</label></td>
        <td><input type="text" value={AC} /></td>
      </tr>
      <tr>
        <td><label> Max HP</label></td>
        <td><input type="text" value={maxHP} /></td>
      </tr>
      <tr>
        <td><label> Temp HP</label></td>
        <td><input type="text" value={tempHP} /></td>
      </tr>
      <tr>
        <td><label> Current HP</label></td>
        <td><input type="text" value={currentHP} /></td>
      </tr>
    </table>
  </div>
  );
}
