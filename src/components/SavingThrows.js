import "./SavingThrows.css";
import React, { useState } from "react";
export function SavingThrows({ id, onChildData }) {
  const [values, setValues] = useState({
    strengthSave: '',
    dexSave: '',
    conSave: '',
    intSave: '',
    wisSave: '',
    chaSave: ''

  });

  function handleInputChange(event) {
  const { name, value } = event.target;
    setValues(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    onChildData(id, values);
  }, [id, values, onChildData]);

  return (
<div className="savingThrows">
  <h2>Saving Throws</h2>
  <table>
    <tr>
      <td><button type="radio"></button></td>
      <td><label> Strength </label></td>
      <td><input type="text" placeholder="+5" name="strengthSave" value={values.strengthSave} onChange={handleInputChange} /></td>
    </tr>
    <tr>
      <td><button type="radio"></button></td>
      <td><label> Dexterity </label></td>
      <td><input type="text" placeholder="+5" name="dexSave" value={values.dexSave} onChange={handleInputChange} /></td>
    </tr>
    <tr>
      <td><button type="radio"></button></td>
      <td><label> Constitution </label></td>
      <td><input type="text" placeholder="+5" name="conSave" value={values.conSave} onChange={handleInputChange} /></td>
    </tr>
    <tr>
      <td><button type="radio"></button></td>
      <td><label> Intelligence </label></td>
      <td><input type="text" placeholder="+5" name="intSave" value={values.intSave} onChange={handleInputChange} /></td>
    </tr>
    <tr>
      <td><button type="radio"></button></td>
      <td><label> Wisdom </label></td>
      <td><input type="text" placeholder="+5" name="wisSave" value={values.wisSave} onChange={handleInputChange} /></td>
    </tr>
    <tr>
      <td><button type="radio"></button></td>
      <td><label> Charisma </label></td>
      <td><input type="text" placeholder="+5" name="chaSave" value={values.chaSave} onChange={handleInputChange} /></td>
    </tr>
  </table>
</div>
  );

}
