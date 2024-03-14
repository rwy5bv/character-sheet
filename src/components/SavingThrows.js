import "./SavingThrows.css";
import React, { useState } from "react";
import { Circle, Check } from 'react-feather';


const PROFICIENCY_LEVELS = {
  none: 'none',
  halfProficient: 'halfProficient',
  proficient: 'proficient',
  expertise: 'expertise'
}

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
  switch (proficiencyLevel) {
    case (PROFICIENCY_LEVELS.none):
      return PROFICIENCY_LEVELS.proficient;
    case (PROFICIENCY_LEVELS.proficient):
      return PROFICIENCY_LEVELS.none;
    default:
      console.error("Invalid proficiency level: Expected PROFICIENCY_LEVELS.none, PROFICIENCY_LEVELS.halfProficient, PROFICIENCY_LEVELS.proficient, PROFICIENCY_LEVELS.expertise");
  }
}

export function SavingThrows({ id, onChildData, formData }) {
  //Undefined returns proficient, weird default behavior but this function should not be called outside of this component
  function handleProficiencyChange(name) {
    if (formData[id] && formData[id][name]) {
      onChildData(id, name, incrementProficiencyLevel(formData[id][name]));
    } else {
      onChildData(id, name, incrementProficiencyLevel(PROFICIENCY_LEVELS.none));
    } 
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    onChildData(id, name, value);
  };

  return (
    <div className="savingThrows">
      <h2>Saving Throws</h2>
      <table>
        <tr>
          <td><button onClick={() => handleProficiencyChange("strProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.savingThrows?.strProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
          <td><label> Strength </label></td>
          <td><input type="number" placeholder="+5" name="strSave" value={formData?.savingThrows?.strSave||""} onChange={handleInputChange} /></td>
        </tr>
        <tr>
          <td><button onClick={() => handleProficiencyChange("dexProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.savingThrows?.dexProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
          <td><label> Dexterity </label></td>
          <td><input type="number" placeholder="+5" name="dexSave" value={formData?.savingThrows?.dexSave||""} onChange={handleInputChange} /></td>
        </tr>
        <tr>
          <td><button onClick={() => handleProficiencyChange("conProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.savingThrows?.conProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
          <td><label> Constitution </label></td>
          <td><input type="number" placeholder="+5" name="conSave" value={formData?.savingThrows?.conSave||""} onChange={handleInputChange} /></td>
        </tr>
        <tr>
          <td><button onClick={() => handleProficiencyChange("intProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.savingThrows?.intProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
          <td><label> Intelligence </label></td>
          <td><input type="number" placeholder="+5" name="intSave" value={formData?.savingThrows?.intSave||""} onChange={handleInputChange} /></td>
        </tr>
        <tr>
          <td><button onClick={() => handleProficiencyChange("wisProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.savingThrows?.wisProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
          <td><label> Wisdom </label></td>
          <td><input type="number" placeholder="+5" name="wisSave" value={formData?.savingThrows?.wisSave||""} onChange={handleInputChange} /></td>
        </tr>
        <tr>
          <td><button onClick={() => handleProficiencyChange("chaProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.savingThrows?.chaProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
          <td><label> Charisma </label></td>
          <td><input type="number" placeholder="+5" name="chaSave" value={formData?.savingThrows?.chaSave||""} onChange={handleInputChange} /></td>
        </tr>
      </table>
    </div>
  );

}