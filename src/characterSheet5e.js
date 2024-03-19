import { useState, useCallback, useRef } from 'react';
import axios from 'axios';
import './CharacterSheetStyle.css';
import defaultPortraitURL from "./images/placeholderCharacter.webp";
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
import {CharacterSheetCanvas} from './components/CharacterSheetCanvas';

//Categories for tabs of character sheet
const SHEET_CATEGORIES = {
  character: 0,
  abilities: 1,
  combat: 2,
};

function SheetPagesNavigator({ setSheetPage }) {
  return (<div className="sheetPagesNavigator">
    <button onClick={() => setSheetPage(SHEET_CATEGORIES.character)}>
      Character
    </button >
    <button onClick={() => setSheetPage(SHEET_CATEGORIES.abilities)}>
      Abilities
    </button >
    <button onClick={() => setSheetPage(SHEET_CATEGORIES.combat)}>
      Combat
    </button >
  </div>);
}

function CharacterSheet5e() {
  const [formData, setFormData] = useState({});
  const [sheetPage, setSheetPage] = useState(SHEET_CATEGORIES.character);


  //States that do not need to be returned in POST request
  //_________________________________________________________
  //for Dynamic table in AttacksAndSpellcasting only
  const [rowData, setRowData] = useState([{}]);

  //image URL for CharacterPicture Component
  const [characterImageURL, setCharacterImageURL] = useState(defaultPortraitURL);


  //Basically just appends the data onto formData in format
  //{childId.name: inputValue}
  //Ergo access Strength score by doing formData.Abilities.Strength
  const handleInputChange = (childId, name, inputValue) => {
    debugger;
    setFormData((prevData) => ({
      ...prevData,
      [childId]: {
        ...prevData[childId],
        [name]: inputValue
      },
    }));
    debugger;
  };

  //Send POST Request w/ characterSheetData
  async function submitCharacterSheetData(characterSheetData) {
    console.log(characterSheetData);
    try {
      const { data } = await axios.post('http://localhost:8080/upload', characterSheetData)
      console.log(data);
    } catch (error) {
      console.error(error)
    }
  }



  //Rendering the sheet page in a separate component causes an infinite rerender loop, 
  //ergo no component declaration
  switch (sheetPage) {
    case (SHEET_CATEGORIES.character):
      return (
        <>
          <div className="topOfSheet">
            <TitleBar />
            <div className="submitButton">
              <button onClick={async () => submitCharacterSheetData(formData)}>
                Upload
              </button >
            </div>
            <Links />
            <SheetPagesNavigator setSheetPage={setSheetPage} />
          </div>
          <div className="characterSheet">
            <CharacterName id="characterName" onChildData={handleInputChange} formData={formData} />
            <CharacterPicture id="characterPicture" onChildData={handleInputChange} formData={formData} characterImageURL={characterImageURL} setCharacterImageURL={setCharacterImageURL} />
            <Traits id="traits" onChildData={handleInputChange} formData={formData} />
            <Currency id="currency" onChildData={handleInputChange} formData={formData} />
            <Features id="features" onChildData={handleInputChange} formData={formData}/>
            <Header id="header" onChildData={handleInputChange} formData={formData}/>
            <Proficiencies id="proficiencies" onChildData={handleInputChange} formData={formData}/>
            <Passives id="passives" onChildData={handleInputChange} formData={formData}/>
            <HitDice id="hitDice" onChildData={handleInputChange} formData={formData}/>
            <Languages id="languages" onChildData={handleInputChange} formData={formData}/>
            <Notes id="notes" onChildData={handleInputChange} formData={formData}/>
          </div>
        </>

      );

    case (SHEET_CATEGORIES.abilities):
      return (
        <>
          <div className="topOfSheet">
            <TitleBar />
            <div className="submitButton">
              <button onClick={async () => submitCharacterSheetData(formData)}>
                Upload
              </button >
            </div>
            <Links />
            <SheetPagesNavigator setSheetPage={setSheetPage} />
          </div>
          <div className="characterSheet">
            <Abilities id="abilities" onChildData={handleInputChange} formData={formData} />
            <SavingThrows id="savingThrows" onChildData={handleInputChange} formData={formData}/>
            <Skills id="skills" onChildData={handleInputChange} formData={formData}/>
          </div>
        </>
      );
      
    case (SHEET_CATEGORIES.combat):
      return (
        <>
          <div className="topOfSheet">
            <TitleBar />
            <div className="submitButton">
              <button onClick={async () => submitCharacterSheetData(formData)}>
                Upload
              </button >
            </div>
            <Links />
            <SheetPagesNavigator setSheetPage={setSheetPage} />
          </div>
          <div className="characterSheet">
            <ArmorAndHealth id="armorAndHealth" onChildData={handleInputChange} formData={formData} />
            <AttacksAndSpellcasting id="attacksAndSpellcasting" onChildData={handleInputChange} rowData={rowData} setRowData={setRowData} />
            <DeathSaves id="deathSaves" onChildData={handleInputChange} formData={formData}/>
          </div>
        </>
      );

    default:
      Error("Unable to render character sheet, invalid sheet page.");
  }
}

export default CharacterSheet5e;