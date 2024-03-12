import { useState , useCallback} from 'react';
import axios from 'axios';
import './characterSheetStyle.css';
import { CharacterName } from './components/CharacterName';
import { SavingThrows } from './components/SavingThrows';
import { Skills } from './components/Skills';
import { ArmorAndHealth } from './components/ArmorAndHealth';
import { Passives } from './components/Passives';
import { HitDice } from './components/HitDice';
import { DeathSaves } from './components/DeathSaves';
import { AttacksAndSpellcasting } from './components/AttacksAndSpellcasting';
import { Features } from './components/Features';
import { Traits } from './components/Traits';
import { Proficiencies } from './components/Proficiencies';
import { Languages } from './components/Languages';
import { Notes } from './components/Notes';
import { Currency } from './components/Currency';
import { Abilities } from './components/Abilities';
import { Header } from './components/Header';
import { TitleBar } from './components/TitleBar';
import { Links } from './components/Links';
import { CharacterPicture } from './components/CharacterPicture';


function CharacterSheet5e() {
  const [formData, setFormData] = useState({});
  //Uses the useCallback hook so that it doesn't trigger an infinite re-render loop
  //Basically just appends the data onto formData
  const handleInputChange = useCallback((childId, inputValue) => {
    setFormData((prevData) => ({
      ...prevData,
      [childId]: inputValue,
    }));
  
  }, []);
  //Send POST Request w/ characterSheetData
  async function submitCharacterSheetData(characterSheetData) {
    console.log(characterSheetData);
    try {
      const { data } = await axios.post('https://api.example.com/post-endpoint', characterSheetData)
      console.log(data);
    } catch (error) {
      console.error(error)
    }
  }
  
  function SubmitButton() {
    return (<div className="submitButton">
      <button onClick={async () => submitCharacterSheetData(formData)}>
        Upload
      </button >
    </div>
    );
  };

  /*function RenderSheet({pageNumber}){
    switch(pageNumber) {
      case (1):
        return(

        );
      case (2):
        return(

        );
      case (3):
        return(

        );
    }
  }*/

  return (
    <>
      <div className="topOfSheet">
        <TitleBar />
        <Links />
        <SubmitButton />
        
      </div>
      <div className="characterSheet">
          <CharacterPicture id="characterPicture" onChildData={handleInputChange} />
          <CharacterName id="characterName" onChildData={handleInputChange} />
          <Abilities id="abilities" onChildData={handleInputChange} />
          <SavingThrows id="savingThrows" onChildData={handleInputChange} />
          <Skills id="skills" onChildData={handleInputChange} />
          <Header id="header" onChildData={handleInputChange} />
          <ArmorAndHealth id="armorAndHealth" onChildData={handleInputChange} />
          <HitDice id="hitDice" onChildData={handleInputChange} />
          <DeathSaves id="deathSaves" onChildData={handleInputChange} />
          <Passives id="passives" onChildData={handleInputChange} />
          <AttacksAndSpellcasting id="attacksAndSpellcasting" onChildData={handleInputChange} />
          <Proficiencies id="proficiencies" onChildData={handleInputChange} />
          <Languages id="languages" onChildData={handleInputChange} />
          <Features id="features" onChildData={handleInputChange} />
          <Traits id="traits" onChildData={handleInputChange} />
          <Currency id="currency" onChildData={handleInputChange} />
          <Notes id="notes" onChildData={handleInputChange}  />
      </div>
    </>
  );
}

export default CharacterSheet5e;
