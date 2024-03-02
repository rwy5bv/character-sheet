import { useState } from 'react';
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

function CharacterSheet5e() {
  const [name, setName] = useState("Donald");
  const [classAndLevel, setClassAndLevel] = useState({
    characterClass: "Wizard",
    level: 20
  });
  return (
    <>
      <div className="topOfSheet">
        <h1> D&D 5e Character Sheet</h1>
      </div>
      <div className="submitButton">
        <button>
          Submit
        </button>
      </div>
      <div className="characterSheet">
        <div className="firstColumnOfSheet">
          <CharacterName name={name} />
          <Abilities
            strength={20}
            dexterity={15}
            constitution={15}
            intelligence={12}
            wisdom={12}
            charisma={10} />

          <SavingThrows
            strengthSave={15}
            dexSave={12}
            conSave={14}
            intSave={20}
            wisSave={12}
            chaSave={20} />
          <Skills />
        </div>
        <div className="secondColumnOfSheet">
          <Header classAndLevel={classAndLevel} background="Fortnite" />
          <div className="resourcesDashboard">
            <div className="resourcesDashboardLeft">
              <ArmorAndHealth />
            </div>
            <div classname="resourcesDashboardRight">
              <HitDice />
              <DeathSaves />
              <Passives />
            </div>
            <AttacksAndSpellcasting />
          </div>
        </div>
        <div className="thirdColumnOfSheet">

          <ProficienciesAndLanguages />
          <FeaturesAndTraits />
          <Currency />
          <Notes notes="test" />

        </div>
      </div>
    </>
  );
}

export default CharacterSheet5e;
