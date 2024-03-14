
import "./ArmorAndHealth.css";
export function ArmorAndHealth({id, onChildData, formData}) {

  function handleInputChange(event) {
    const { name, value } = event.target;
    onChildData(id, name, value);
  };

  return (<div className="armorAndHealth">
    <table>
      <tr>
        <td><label> AC</label></td>
        <td><input type="number" value={formData?.armorAndHealth?.AC||""} placeholder="10" name = "AC" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <td><label> Max HP</label></td>
        <td><input type="number" value={formData?.armorAndHealth?.maxHP||""} placeholder="0" name = "maxHP" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <td><label> Temp HP</label></td>
        <td><input type="number" value={formData?.armorAndHealth?.tempHP||""} placeholder="0" name= "tempHP" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <td><label> Current HP</label></td>
        <td><input type="number" value={formData?.armorAndHealth?.currentHP||""} placeholder="0" name = "currentHP" onChange = {handleInputChange}/></td>
      </tr>
    </table>
  </div>
  );
}
