import "./Skills.css";
import React, { useState } from "react";
import { Circle, ChevronUp, Check, ChevronsUp } from 'react-feather';
export function Skills({ id, onChildData }) {
  const PROFICIENCY_LEVELS = {
    none: 'none',
    halfProficient: 'halfProficient',
    proficient: 'proficient',
    expertise: 'expertise'
  }

  const [values, setValues] = useState({
    acrobaticsProficiencyLevel: PROFICIENCY_LEVELS.none,
    animalHandlingProficiencyLevel: PROFICIENCY_LEVELS.none,
    arcanaProficiencyLevel: PROFICIENCY_LEVELS.none,
    athleticsProficiencyLevel: PROFICIENCY_LEVELS.none,
    deceptionProficiencyLevel: PROFICIENCY_LEVELS.none,
    historyProficiencyLevel: PROFICIENCY_LEVELS.none,
    insightProficiencyLevel: PROFICIENCY_LEVELS.none,
    intimidationProficiencyLevel: PROFICIENCY_LEVELS.none,
    investigationProficiencyLevel: PROFICIENCY_LEVELS.none,
    medicineProficiencyLevel: PROFICIENCY_LEVELS.none,
    natureProficiencyLevel: PROFICIENCY_LEVELS.none,
    perceptionProficiencyLevel: PROFICIENCY_LEVELS.none,
    performanceProficiencyLevel: PROFICIENCY_LEVELS.none,
    persuasionProficiencyLevel: PROFICIENCY_LEVELS.none,
    religionProficiencyLevel: PROFICIENCY_LEVELS.none,
    sleightOfHandProficiencyLevel: PROFICIENCY_LEVELS.none,
    survivalProficiencyLevel: PROFICIENCY_LEVELS.none,
    acrobatics: 0,
    animalHandling: 0,
    arcana: 0,
    athletics: 0,
    deception: 0,
    history: 0,
    insight: 0,
    intimidation: 0,
    investigation: 0,
    medicine: 0,
    nature: 0,
    perception: 0,
    performance: 0,
    persuasion: 0,
    religion: 0,
    sleightOfHand: 0,
    survival: 0
  });

  function ProficiencyIcon({ proficiencyLevel }) {
    switch (proficiencyLevel) {
      case (PROFICIENCY_LEVELS.none):
        return <div className="proficiencyIcon"><Circle /></div>;
      case (PROFICIENCY_LEVELS.halfProficient):
        return <div className="proficiencyIcon"><ChevronUp /></div>;
      case (PROFICIENCY_LEVELS.proficient):
        return <div className="proficiencyIcon"><Check /></div>;
      case (PROFICIENCY_LEVELS.expertise):
        return <div className="proficiencyIcon"><ChevronsUp /></div>;
      default:
        console.error("Error setting icon-Make sure proficiency level is valid, or check feather-icons install");
    }
  }

  function incrementProficiencyLevel(proficiencyLevel) {
    console.log("Incrementing!");
    console.log(proficiencyLevel);
    switch (proficiencyLevel) {
      case (PROFICIENCY_LEVELS.none):
        return PROFICIENCY_LEVELS.halfProficient;
      case (PROFICIENCY_LEVELS.halfProficient):
        return PROFICIENCY_LEVELS.proficient;
      case (PROFICIENCY_LEVELS.proficient):
        return PROFICIENCY_LEVELS.expertise;
      case (PROFICIENCY_LEVELS.expertise):
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

  
  return (<div className="skills">
    <table>
      <h2>Skills</h2>
      <tr>
        <td><button onClick={() => handleProficiencyChange("acrobaticsProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.acrobaticsProficiencyLevel} /></button></td>
        <td><label> Acrobatics </label></td>
        <td><input type="number" placeholder="+5" name="acrobatics" value={values.acrobatics} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("animalHandlingProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.animalHandlingProficiencyLevel} /></button></td>
        <td><label> Animal Handling </label></td>
        <td><input type="number" placeholder="+5" name="animalHandling" value={values.animalHandling} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("arcanaProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.arcanaProficiencyLevel} /></button></td>
        <td><label> Arcana </label></td>
        <td><input type="number" placeholder="+5" name="arcana" value={values.arcana} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("athleticsProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.athleticsProficiencyLevel} /></button></td>
        <td><label> Athletics </label></td>
        <td><input type="number" placeholder="+5" name="athletics" value={values.athletics} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("deceptionProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.deceptionProficiencyLevel} /></button></td>
        <td><label> Deception </label></td>
        <td><input type="number" placeholder="+5" name="deception" value={values.deception} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("historyProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.historyProficiencyLevel} /></button></td>
        <td><label> History </label></td>
        <td><input type="number" placeholder="+5" name="history" value={values.history} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("insightProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.insightProficiencyLevel} /></button></td>
        <td><label> Insight </label></td>
        <td><input type="number" placeholder="+5" name="insight" value={values.insight} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("intimidationProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.intimidationProficiencyLevel} /></button></td>
        <td><label> Intimidation </label></td>
        <td><input type="number" placeholder="+5" name="intimidation" value={values.intimidation} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("investigationProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.investigationProficiencyLevel} /></button></td>
        <td><label> Investigation </label></td>
        <td><input type="number" placeholder="+5" name="investigation" value={values.investigation} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("medicineProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.medicineProficiencyLevel} /></button></td>
        <td><label> Medicine </label></td>
        <td><input type="number" placeholder="+5" name="medicine" value={values.medicine} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("natureProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.natureProficiencyLevel} /></button></td>
        <td><label> Nature </label></td>
        <td><input type="number" placeholder="+5" name="nature" value={values.nature} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("perceptionProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.perceptionProficiencyLevel} /></button></td>
        <td><label> Perception </label></td>
        <td><input type="number" placeholder="+5" name="perception" value={values.perception} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("performanceProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.performanceProficiencyLevel} /></button></td>
        <td><label> Performance </label></td>
        <td><input type="number" placeholder="+5" name="performance" value={values.performance} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("persuasionProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.persuasionProficiencyLevel} /></button></td>
        <td><label> Persuasion </label></td>
        <td><input type="number" placeholder="+5" name="persuasion" value={values.persuasion} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("religionProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.religionProficiencyLevel} /></button></td>
        <td><label> Religion </label></td>
        <td><input type="number" placeholder="+5" name="religion" value={values.religion} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("sleightOfHandProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.sleightOfHandProficiencyLevel} /></button></td>
        <td><label> Sleight of Hand </label></td>
        <td><input type="number" placeholder="+5" name="sleightOfHand" value={values.sleightOfHand} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("survivalProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={values.survivalProficiencyLevel} /></button></td>
        <td><label> Survival </label></td>
        <td><input type="number" placeholder="+5" name="survival" value={values.survival} onChange={handleInputChange} /></td>
      </tr>
    </table>

  </div>);

}
