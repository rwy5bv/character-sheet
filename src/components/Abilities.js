import './Abilities.css';
import React, { useState } from "react";
export function Abilities({id, onChildData}) {
  const [values, setValues] = useState({
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: ''
  });

  function handleInputChange(event){
    const {name, value} = event.target;
    setValues(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    onChildData(id, values);
  }, [id, values, onChildData]);


  return (
    <div className="abilities">
    <h2> Abilities</h2>
    <table>
      <tr>
        <td><label> Strength</label></td>
        <td><input type="text" value={values.strength} name="strength" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Dexterity</label></td>
        <td><input type="text" value={values.dexterity} name="dexterity" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Constitution</label></td>
        <td><input type="text" value={values.constitution} name="constitution" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Intelligence</label></td>
        <td><input type="text" value={values.intelligence} name="intelligence" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Wisdom</label></td>
        <td><input type="text" value={values.wisdom} name="wisdom" onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><label> Charisma</label></td>
        <td><input type="text" value={values.charisma} name="charisma" onChange={handleInputChange} /></td>
      </tr>
    </table>
  </div>
  );
}
