import "./SavingThrows.css";
import React, { useState } from "react";
import { Circle, Check } from 'react-feather';
export function SavingThrows({ id, onChildData }) {



  const PROFICIENCY_LEVELS = {
    none: 'none',
    halfProficient: 'halfProficient',
    proficient: 'proficient',
    expertise: 'expertise'
  }


  const [values, setValues] = useState({
    strProficiencyLevel: PROFICIENCY_LEVELS.none,
    dexProficiencyLevel: PROFICIENCY_LEVELS.none,
    conProficiencyLevel: PROFICIENCY_LEVELS.none,
    intProficiencyLevel: PROFICIENCY_LEVELS.none,
    wisProficiencyLevel: PROFICIENCY_LEVELS.none,
    chaProficiencyLevel: PROFICIENCY_LEVELS.none,
    strSave: 0,
    dexSave: 0,
    conSave: 0,
    intSave: 0,
    wisSave: 0,
    chaSave: 0

  });


  function ProficiencyIcon({ proficiencyLevel }) {
    switch (proficiencyLevel) {
      case (PROFICIENCY_LEVELS.none):
        return <div className="proficiencyIcon"><Circle /></div>;
      case (PROFICIENCY_LEVELS.proficient):
        return <div className="proficiencyIcon"><Check /></div>;
      default:
        console.error("Error fetching icon-Make sure proficiency level is valid, or check feather-icons install");
    }
  }

  function incrementProficiencyLevel(proficiencyLevel) {
    console.log("Incrementing!");
    console.log(proficiencyLevel);
    switch (proficiencyLevel) {
      case (PROFICIENCY_LEVELS.none):
        return PROFICIENCY_LEVELS.proficient;
      case (PROFICIENCY_LEVELS.proficient):
        return PROFICIENCY_LEVELS.none;
      default:
        console.error("Invalid proficiency level: Expected PROFICIENCY_LEVELS.none, PROFICIENCY_LEVELS.halfProficient, PROFICIENCY_LEVELS.proficient, PROFICIENCY_LEVELS.expertise");
    }
  }

  function handleProficiencyChange(name) {
    setValues(prevValue => ({
      ...prevValue,
      [name]: incrementProficiencyLevel(prevValue[name]),
    }));
    debugger;
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setValues(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
    debugger;
  }

  React.useEffect(() => {
    onChildData(id, values);
  }, [id, values, onChildData]);

  return (
    <div className="savingThrows">
      <h2>Saving Throws</h2>
      <table>
        <tr>
          <td><button onClick={() => handleProficiencyChange("strProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.strProficiencyLevel} /></button></td>
          <td><label> Strength </label></td>
          <td><input type="number" placeholder="+5" name="strSave" value={values.strSave} onChange={handleInputChange} /></td>
        </tr>
        <tr>
          <td><button onClick={() => handleProficiencyChange("dexProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.dexProficiencyLevel} /></button></td>
          <td><label> Dexterity </label></td>
          <td><input type="number" placeholder="+5" name="dexSave" value={values.dexSave} onChange={handleInputChange} /></td>
        </tr>
        <tr>
          <td><button onClick={() => handleProficiencyChange("conProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.conProficiencyLevel} /></button></td>
          <td><label> Constitution </label></td>
          <td><input type="number" placeholder="+5" name="conSave" value={values.conSave} onChange={handleInputChange} /></td>
        </tr>
        <tr>
          <td><button onClick={() => handleProficiencyChange("intProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.intProficiencyLevel} /></button></td>
          <td><label> Intelligence </label></td>
          <td><input type="number" placeholder="+5" name="intSave" value={values.intSave} onChange={handleInputChange} /></td>
        </tr>
        <tr>
          <td><button onClick={() => handleProficiencyChange("wisProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.wisProficiencyLevel} /></button></td>
          <td><label> Wisdom </label></td>
          <td><input type="number" placeholder="+5" name="wisSave" value={values.wisSave} onChange={handleInputChange} /></td>
        </tr>
        <tr>
          <td><button onClick={() => handleProficiencyChange("chaProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.chaProficiencyLevel} /></button></td>
          <td><label> Charisma </label></td>
          <td><input type="number" placeholder="+5" name="chaSave" value={values.chaSave} onChange={handleInputChange} /></td>
        </tr>
      </table>
    </div>
  );

}