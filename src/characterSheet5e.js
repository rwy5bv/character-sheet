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

function Skills({ acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival }) {
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

function ArmorAndHealth({ AC, maxHP, tempHP, currentHP }) {
  return (<div className="armorAndHealth">
    <form className="form-grid">
      <form className="form-column">
        <form className="form-row">
          <label> AC</label>
          <textarea
            value={AC}
          />
          <br />
          <label> Max HP</label>
          <textarea
            value={maxHP}
          />
          <br />
          <label> Temp HP</label>
          <textarea
            value={tempHP}
          />
          <br />

        </form>
        <form className="form-row">
          <label> Current HP</label>
          <textarea
            value={currentHP}
          />
          <br />

        </form>
      </form>
    </form>
  </div>);
}

function Passives({ inspiration, proficiencyBonus, initiative, speed, vision }) {
  return (
    <div className="passives">
      <form>
        <label>Inspiration</label>
        <input type="checkbox" value={inspiration}></input>
        <br />
        <label> Proficiency Bonus </label>
        <textarea
          value={proficiencyBonus}
        />
        <br />
        <label> Initiative </label>
        <textarea
          value={initiative}
        />
        <br />
        <label> Speed </label>
        <textarea value={speed}></textarea>
        <br />
        <label> Vision </label>
        <textarea value={vision}></textarea>
      </form>
    </div>);

}

function HitDice({ d6Current, d6Max, d8Current, d8Max, d10Current, d10Max, d12Current, d12Max }) {
  return (
    <div className="hitDice">
      <div classname="form-row">
        <textarea placeholder="Max" value={d6Max} />
        <p>d6</p>
        <textarea placeholder="Current" value={d6Current} />
      </div>
      <div classname="form-row">
        <textarea placeholder="Max" value={d8Max} />
        <p>d8</p>
        <textarea placeholder="Current" value={d8Current} />
      </div>
      <div classname="form-row">
        <textarea placeholder="Max" value={d10Max} />
        <p>d10</p>
        <textarea placeholder="Current" value={d10Current} />
      </div>
      <div classname="form-row">
        <textarea placeholder="Max" value={d12Max} />
        <p>d12</p>
        <textarea placeholder="Current" value={d12Current} />
      </div>
    </div>
  );

}

function DeathSaves({ successes, failures }) {
  return (
    <div className="deathSaves">
      <h2>Death Saves</h2>
      <label>Successes</label>
      <input type="checkbox" name="success1" />
      <input type="checkbox" name="success2" />
      <input type="checkbox" name="success3" />
      <br />
      <label>Failures</label>
      <input type="checkbox" name="failure1" />
      <input type="checkbox" name="failure2" />
      <input type="checkbox" name="failure3" />
      <br />
    </div>
  );
}

function AttacksAndSpellcasting({ name, attackModifier, damage, range, ammo, used }) {
  const columnLabels = ["Name", "Attack Modifier", "Damage", "Range", "Ammo", "Used?"];
  const [rowData, setRowData] = useState([{}]);

  const handleInputChange = (index, column, value) => {
    // Update the state with the new value for the specified row and column
    const updatedRowData = [...rowData];
    updatedRowData[index][column] = value;
    setRowData(updatedRowData);
  };

  const renderHeader = () => {
    return (
      <tr>
        {columnLabels.map((label, index) => (
          <th key={index}>{label}</th>
        ))}
      </tr>
    );
  };
  const renderRows = () => {
    return rowData.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {columnLabels.map((column, columnIndex) => (
          <td key={columnIndex}>
            <textarea
              value={row[column] || ''}
              onChange={(e) => handleInputChange(rowIndex, column, e.target.value)}
            />
          </td>
        ))}
      </tr>
    ));
  };

  const handleAddRow = () => {
    setRowData([...rowData, {}]); // Add a new row with empty values
  };

  return (
    <div className="attacksAndSpellcasting">
      <table>
        <thead>{renderHeader()}</thead>
        <tbody>{renderRows()}</tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
}

function FeaturesAndTraits({ features, traits }) {
  return (
    <div className="featuresAndTraits">
      <h2> Features</h2>
      <form>
        <textarea
          placeholder="Features"
          value={features}
        />
      </form>
      <br />
      <h2> Traits </h2>
      <form>
        <textarea
          placeholder="Traits"
          value={traits}
        />
      </form>
    </div>
  );
}

function ProficienciesAndLanguages({ proficiencies, languages }) {
  return (
    <div className="notes">
      <h2> Other Proficiencies </h2>
      <form>
        <textarea
          placeholder="Other Proficiencies"
          value={proficiencies}
        />
      </form>
      <br />
      <h2> Languages </h2>
      <form>
        <textarea
          placeholder="Languages"
          value={languages}
        />
      </form>
    </div>
  );

}

function Notes({ notes }) {
  return (
    <div className="notes">
      <h2> Notes </h2>
      <form>
        <textarea rows={30}
          placeholder="Write Notes Here"
          value={notes}
        />
      </form>
    </div>
  );

}

function Currency({ currency }) {
  return (
    <div className="currency">
      <table>
        <tr>
          <th>CP</th>
          <th>SP</th>
          <th>EP</th>
          <th>GP</th>
          <th>PP</th>
        </tr>
        <tr>
          <td>
            <textarea></textarea>
          </td>
          <td>
            <textarea></textarea>
          </td>
          <td>
            <textarea></textarea>
          </td>
          <td>
            <textarea></textarea>
          </td>
          <td>
            <textarea></textarea>
          </td>
        </tr>
      </table>
    </div>

  );
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

function Header({ classAndLevel, background, playerName, race, alignment, experiencePoints }) {
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
