import "./Passives.css";

export function Passives({ id, onChildData, formData }) {
  function handleInputChangeCheckbox(event) {
    const { name, checked } = event.target;
    onChildData(id, name, checked);
  };

  function handleInputChange(event) {
    const { name, value } = event.target;
    onChildData(id, name, value);
  };

  return (
    <div className="passives">
      <table>
        <tr>
          <td>
            Inspiration
          </td>
          <td>
            <input type="checkbox" checked={formData?.passives?.inspiration||false} name="inspiration" onChange={handleInputChangeCheckbox}></input>
          </td>
        </tr>
        <tr>
          <td>
            Proficiency Bonus
          </td>
          <td>
            <input type="number" name="proficiencyBonus" placeholder="0" onChange={handleInputChange} value={formData?.passives?.proficiencyBonus||""} />
          </td>
        </tr>
        <tr>
          <td>
            <label> Initiative </label>
          </td>
          <td>
            <input type="number" name="initiative" placeholder="0" onChange={handleInputChange} value={formData?.passives?.initiative||""} />
          </td>
        </tr>
        <tr>
          <td>
            <label> Speed </label>
          </td>
          <td>
            <input type="text" name="speed" placeholder="30 ft. Walk" onChange={handleInputChange} value={formData?.passives?.speed||""}></input>
          </td>
        </tr>
        <tr>
          <td>
            <label> Vision </label>
          </td>
          <td>
            <input type="text" name="vision" onChange={handleInputChange} value={formData?.passives?.vision||""}></input>
          </td>
        </tr>
      </table>
    </div>);

}
