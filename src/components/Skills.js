import "./Skills.css";
import { Circle, ChevronUp, Check, ChevronsUp } from 'react-feather';
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

export function Skills({ id, onChildData, formData }) {

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

  
  return (<div className="skills">
    <table>
      <h2>Skills</h2>
      <tr>
        <td><button onClick={() => handleProficiencyChange("acrobaticsProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.acrobaticsProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Acrobatics </label></td>
        <td><input type="number" placeholder="+5" name="acrobatics" value={formData?.skills?.acrobatics||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("animalHandlingProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.animalHandlingProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Animal Handling </label></td>
        <td><input type="number" placeholder="+5" name="animalHandling" value={formData?.skills?.animalHandling||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("arcanaProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.arcanaProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Arcana </label></td>
        <td><input type="number" placeholder="+5" name="arcana" value={formData?.skills?.arcana||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("athleticsProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.athleticsProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Athletics </label></td>
        <td><input type="number" placeholder="+5" name="athletics" value={formData?.skills?.athletics||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("deceptionProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.deceptionProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Deception </label></td>
        <td><input type="number" placeholder="+5" name="deception" value={formData?.skills?.deception||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("historyProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.historyProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> History </label></td>
        <td><input type="number" placeholder="+5" name="history" value={formData?.skills?.history||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("insightProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.insightProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Insight </label></td>
        <td><input type="number" placeholder="+5" name="insight" value={formData?.skills?.insight||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("intimidationProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.intimidationProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Intimidation </label></td>
        <td><input type="number" placeholder="+5" name="intimidation" value={formData?.skills?.intimidation||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("investigationProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.investigationProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Investigation </label></td>
        <td><input type="number" placeholder="+5" name="investigation" value={formData?.skills?.investigation||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("medicineProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.medicineProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Medicine </label></td>
        <td><input type="number" placeholder="+5" name="medicine" value={formData?.skills?.medicine||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("natureProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.natureProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Nature </label></td>
        <td><input type="number" placeholder="+5" name="nature" value={formData?.skills?.nature||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("perceptionProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.perceptionProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Perception </label></td>
        <td><input type="number" placeholder="+5" name="perception" value={formData?.skills?.perception||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("performanceProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.performanceProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Performance </label></td>
        <td><input type="number" placeholder="+5" name="performance" value={formData?.skills?.performance||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("persuasionProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.persuasionProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Persuasion </label></td>
        <td><input type="number" placeholder="+5" name="persuasion" value={formData?.skills?.persuasion||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("religionProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.religionProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Religion </label></td>
        <td><input type="number" placeholder="+5" name="religion" value={formData?.skills?.religion||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("sleightOfHandProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.sleightOfHandProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Sleight of Hand </label></td>
        <td><input type="number" placeholder="+5" name="sleightOfHand" value={formData?.skills?.sleightOfHand||""} onChange={handleInputChange} /></td>
      </tr>
      <tr>
        <td><button onClick={() => handleProficiencyChange("survivalProficiencyLevel")} ><ProficiencyIcon proficiencyLevel={formData?.skills?.survivalProficiencyLevel||PROFICIENCY_LEVELS.none} /></button></td>
        <td><label> Survival </label></td>
        <td><input type="number" placeholder="+5" name="survival" value={formData?.skills?.survival||""} onChange={handleInputChange} /></td>
      </tr>
    </table>

  </div>);

}
