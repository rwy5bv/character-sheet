import { useState } from 'react';
import './characterSheetStyle.css';

function CharacterName({ name }) {
  return (
    <div className="characterName">
      <h2> Character Name</h2>
      <form>
        <textarea
          value={name}
        />
        <br />

      </form>
    </div>
  );
}

function InspirationProficiencyPassivePerception({ }) {

}

function SavingThrows({ strengthSave, dexSave, conSave, intSave, wisSave, chaSave }) {
  return (
    <div className="savingThrows">
      <h2>Saving Throws</h2>
      <div formRow>
        <button type="radio"></button>
        <label> Strength </label>
        <textarea
          value={strengthSave} />
        <br />
      </div>
      <div formRow>
        <button type="radio"></button>
        <label> Dexterity </label>
        <textarea
          value={dexSave} />
        <br />
      </div>
      <div formRow>
        <button type="radio"></button>
        <label> Constitution </label>
        <textarea
          value={conSave} />
        <br />
      </div>
      <div formRow>
        <button type="radio"></button>
        <label> Intelligence </label>
        <textarea
          value={intSave} />
        <br />
      </div>
      <div formRow>
        <button type="radio"></button>
        <label> Wisdom </label>
        <textarea
          value={wisSave} />
        <br />
      </div>
      <div formRow>
        <button type="radio"></button>
        <label> Charisma </label>
        <textarea
          value={chaSave} />
        <br />
      </div>

    </div>
  );

}

function Skills(acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival) {
  return (<div className="savingThrows">
    <h2>Skills</h2>
    <div formRow>
      <button type="radio"></button>
      <label> Acrobatics </label>
      <textarea
        value={acrobatics} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> Animal Handling </label>
      <textarea
        value={animalHandling} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> Arcana </label>
      <textarea
        value={arcana} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> Athletics </label>
      <textarea
        value={athletics} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> Deception </label>
      <textarea
        value={deception} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> History </label>
      <textarea
        value={history} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> Insight </label>
      <textarea
        value={insight} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> Intimidation </label>
      <textarea
        value={intimidation} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> Investigation </label>
      <textarea
        value={investigation} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> medicine </label>
      <textarea
        value={medicine} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> nature </label>
      <textarea
        value={nature} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> perception </label>
      <textarea
        value={perception} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> performance </label>
      <textarea
        value={performance} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> persuasion </label>
      <textarea
        value={persuasion} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> religion </label>
      <textarea
        value={religion} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> Sleight of Hand </label>
      <textarea
        value={stealth} />
      <br />
    </div>
    <div formRow>
      <button type="radio"></button>
      <label> Survival </label>
      <textarea
        value={survival} />
      <br />
    </div>

  </div>);

}

function ArmorAndHealth({ }) {

}
function AttacksAndSpellcasting() {

}

function FeaturesAndTraits() {

}

function ProficienciesAndLanguages() {

}

function Notes() {

}


function Abilities({ strength, dexterity, constitution, intelligence, wisdom, charisma }) {
  return (
    <div className="abilities">
      <h2> Abilities</h2>
      <form>
        <label> Strength</label>
        <textarea
          value={strength}
        />
        <br />
        <label> Dexterity</label>
        <textarea
          value={dexterity}
        />
        <br />
        <label> Constitution</label>
        <textarea
          value={constitution}
        />
        <br />
        <label> Intelligence</label>

        <textarea
          value={intelligence}
        />
        <br />
        <label> Wisdom</label>

        <textarea
          value={wisdom}
        />
        <br />
        <label> Charisma</label>
        <textarea
          value={charisma}
        />
        <br />

      </form>
    </div>
  );
}

function Header(classAndLevel, background, playerName, race, alignment, experiencePoints) {
  return (
    <div className="header">
      <form className="form-grid">
        <form className="form-row">
          <form className="form-column">
            <p> Class & Level</p>
            <textarea
              value={classAndLevel.characterClass}
            />
            <textarea
              value={classAndLevel.level}
            />
            <br />
          </form>
          <form className="form-column">
            <p> Background </p>
            <textarea
              value={background}
            />
          </form>
          <form className="form-column">
            <p> Player Name</p>
            <br />
            <textarea
              value={playerName}
            />
          </form>
        </form>
        <form className="form-row">
          <form className="form-column">
            <p> Race</p>
            <br />
            <textarea
              value={race}
            />
          </form>
          <form className="form-column">
            <p> Alignment</p>
            <br />
            <textarea
              value={alignment}
            />
          </form>
          <form className="form-column">
            <p> Experience Points</p>
            <br />
            <textarea
              value={experiencePoints}
            />
            <br />
          </form>
        </form>
      </form>
    </div>
  );

}

function CharacterSheet5e() {
  const [name, setName] = useState("");
  const classAndLevel = {
    characterClass: "Wizard",
    level: 20
  };
  return (
    <>
      <div className="characterSheet">
        <div className="firstRowOfSheet">
          <CharacterName name={name} />
          <Header classAndLevel={classAndLevel} background="Fortnite" />
        </div>


      </div>
      <div className="secondRowOfSheet">
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
        <ArmorAndHealth />
      </div>
      <div classname="thirdRowOfSheet">
        <Skills />
      </div>
      <button>
        Submit
      </button>
    </>
  );
}

export default CharacterSheet5e;
