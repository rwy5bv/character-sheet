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
import { SubmitButton } from './components/SubmitButton';
import { TitleBar } from './components/TitleBar';
import { Links } from './components/Links';
import { CharacterPicture } from './components/CharacterPicture';

function CharacterSheet5e() {
  const [name, setName] = useState("Donald");
  const [classAndLevel, setClassAndLevel] = useState({
    characterClass: "Wizard",
    level: 20
  });
  return (
    <>
      <div className="topOfSheet">
        <TitleBar />
        <Links />
        <SubmitButton />
      </div>
      <div className="characterSheet">
        <div className="firstColumnOfSheet">
          <CharacterPicture />
          <CharacterName />
          <Abilities />
          <SavingThrows />
          <Skills />
        </div>
        <div className="secondColumnOfSheet">
          <Header classAndLevel={classAndLevel} />
          <ArmorAndHealth />
          <HitDice />
          <DeathSaves />
          <Passives />
          <AttacksAndSpellcasting />
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
