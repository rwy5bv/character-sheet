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
        <td><input type="text" value={formData?.abilities?.strength||""} name="strength" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Dexterity</label></td>
        <td><input type="text" value={formData?.abilities?.dexterity||""} name="dexterity" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Constitution</label></td>
        <td><input type="text" value={formData?.abilities?.constitution||""} name="constitution" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Intelligence</label></td>
        <td><input type="text" value={formData?.abilities?.intelligence||""} name="intelligence" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Wisdom</label></td>
        <td><input type="text" value={formData?.abilities?.wisdom||""} name="wisdom" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Charisma</label></td>
        <td><input type="text" value={formData?.abilities?.charisma||""} name="charisma" onChange={handleInputChange} /></td>
      </tr>
    </table>
  </div>
  );
}