import { useState } from 'react';
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
import { FeaturesAndTraits } from './components/FeaturesAndTraits';
import { ProficienciesAndLanguages } from './components/ProficienciesAndLanguages';
import { Notes } from './components/Notes';
import { Currency } from './components/Currency';
import { Abilities } from './components/Abilities';
import { Header } from './components/Header';
import { TitleBar } from './components/TitleBar';
import { Links } from './components/Links';
import { CharacterPicture } from './components/CharacterPicture';


function CharacterSheet5e() {
  const [formData, setFormData] = useState({});

  function handleInputChange(childId, inputValue){
    setFormData(prevData => ({
      ...prevData,
      [childId]: inputValue,
    }));
  
  }

  async function submitCharacterSheetData(postData) {
    try {
      const { data } = await axios.post('https://api.example.com/post-endpoint', postData)
      console.log(data);
    } catch (error) {
      console.error(error)
    }
  
  
  }
  
  function SubmitButton({postData}) {
    return (<div className="submitButton">
      <button onClick={async () => submitCharacterSheetData(postData)}>
        Upload
      </button >
    </div>
    );
  };

  return (
    <>
      <div className="topOfSheet">
        <TitleBar />
        <Links />
        <SubmitButton />
        
      </div>
      <div className="characterSheet">
          <CharacterPicture />
          <CharacterName />
          <Abilities />
          <SavingThrows />
          <Skills />
          <Header />
          <ArmorAndHealth />
          <HitDice />
          <DeathSaves />
          <Passives />
          <AttacksAndSpellcasting />
          <ProficienciesAndLanguages />
          <FeaturesAndTraits />
          <Currency />
          <Notes notes="test" />
      </div>
    </>
  );
}

export default CharacterSheet5e;
