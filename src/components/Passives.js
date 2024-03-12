import "./Passives.css";
import React, { useState } from "react";

export function Passives({ id, onChildData }) {
  const [values, setValues] = useState({
    inspiration: false,
    proficiencyBonus: '',
    initiative: '',
    speed: '',
    vision: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setValues(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function handleInputChangeCheckbox(event) {
    const { name, checked } = event.target;
    setValues(prevValue => ({
      ...prevValue,
      [name]: checked,
    }));
  }

  React.useEffect(() => {
    onChildData(id, values);
  }, [id, values, onChildData]);

  return (
    <div className="passives">
      <table>
        <tr>
          <td>
            Inspiration
          </td>
          <td>
            <input type="checkbox" checked={values.inspiration} name="inspiration" onChange={handleInputChangeCheckbox}></input>
          </td>
        </tr>
        <tr>
          <td>
            Proficiency Bonus
          </td>
          <td>
            <input type="text" name="proficiencyBonus" onChange={handleInputChange} value={values.proficiencyBonus} />
          </td>
        </tr>
        <tr>
          <td>
            <label> Initiative </label>
          </td>
          <td>
            <input type="text" name="initiative" onChange={handleInputChange} value={values.initiative} />
          </td>
        </tr>
        <tr>
          <td>
            <label> Speed </label>
          </td>
          <td>
            <input type="text" name="speed" onChange={handleInputChange} value={values.speed}></input>
          </td>
        </tr>
        <tr>
          <td>
            <label> Vision </label>
          </td>
          <td>
            <input type="text" name="vision" onChange={handleInputChange} value={values.vision}></input>
          </td>
        </tr>
      </table>
    </div>);

}
