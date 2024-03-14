import './Abilities.css';
export function Abilities({id, onChildData, formData}) {

  function handleInputChange(event) {
    const { name, value } = event.target;
    onChildData(id, name, value);
  };

  return (
    <div className="abilities">
    <h2> Abilities</h2>
    <table>
      <tr>
        <td><label> Strength</label></td>
        <td><input type="text" value={formData?.abilities?.strength||""} placeholder = "10" name="strength" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Dexterity</label></td>
        <td><input type="text" value={formData?.abilities?.dexterity||""} placeholder = "10" name="dexterity" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Constitution</label></td>
        <td><input type="text" value={formData?.abilities?.constitution||""} placeholder = "10" name="constitution" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Intelligence</label></td>
        <td><input type="text" value={formData?.abilities?.intelligence||""} placeholder = "10" name="intelligence" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Wisdom</label></td>
        <td><input type="text" value={formData?.abilities?.wisdom||""} placeholder = "10" name="wisdom" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Charisma</label></td>
        <td><input type="text" value={formData?.abilities?.charisma||""} placeholder = "10" name="charisma" onChange={handleInputChange} /></td>
      </tr>
    </table>
  </div>
  );
}