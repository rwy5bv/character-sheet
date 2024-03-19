import "./HitDice.css";
export function HitDice({id, onChildData, formData}) {
  function handleInputChange(event) {
    const { name, value } = event.target;
    onChildData(id, name, value);
  };

  return (
    <div className="hitDice">
       <table>
      <tr className="form-row">
        <td><input type="number" placeholder="Max" value={formData?.hitDice?.d6Max||""} name = "d6Max" onChange = {handleInputChange}/></td>
        <td><p>d6</p></td>
        <td><input type="number" placeholder="Current" value={formData?.hitDice?.d6Current||""} name = "d6Current" onChange = {handleInputChange} /></td>
      </tr>
      <tr className="form-row">
        <td><input type="number" placeholder="Max" value={formData?.hitDice?.d8Max||""} name = "d8Max" onChange = {handleInputChange} /></td>
        <td><p>d8</p></td>
        <td><input type="number" placeholder="Current" value={formData?.hitDice?.d8Current||""} name = "d8Current" onChange = {handleInputChange} /></td>
      </tr>
      <tr className="form-row">
        <td><input type="number" placeholder="Max" value={formData?.hitDice?.d10Max||""} name = "d10Max" onChange = {handleInputChange} /></td>
        <td><p>d10</p></td>
        <td><input type="number" placeholder="Current" value={formData?.hitDice?.d10Current||""} name = "d10Current" onChange = {handleInputChange} /></td>
      </tr>
      <tr className="form-row">
        <td><input type="number" placeholder="Max" value={formData?.hitDice?.d12Max||""} name = "d12Max" onChange = {handleInputChange} /></td>
        <td><p>d12</p></td>
        <td><input type="number" placeholder="Current" value={formData?.hitDice?.d12Current||""} name = "d12Current" onChange = {handleInputChange} /></td>
      </tr>
    </table>
    </div>
  );

}
