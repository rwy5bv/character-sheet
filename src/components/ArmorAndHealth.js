
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
        <td><input type="number" value={formData?.armorAndHealth?.armorClass||""} placeholder="10" name = "armorClass" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <td><label> Temp HP</label></td>
        <td><input type="number" value={formData?.armorAndHealth?.tempHitPoints||""} placeholder="0" name= "tempHitPoints" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <td><label> Current HP</label></td>
        <td><input type="number" value={formData?.armorAndHealth?.currentHitPoints||""} placeholder="0" name = "currentHitPoints" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <td><label> Max HP</label></td>
        <td><input type="number" value={formData?.armorAndHealth?.maxHitPoints||""} placeholder="0" name = "maxHitPoints" onChange = {handleInputChange}/></td>
      </tr>
    </table>
  </div>
  );
}
