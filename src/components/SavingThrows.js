export function SavingThrows({ strengthSave, dexSave, conSave, intSave, wisSave, chaSave }) {
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
