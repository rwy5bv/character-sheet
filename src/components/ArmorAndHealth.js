export function ArmorAndHealth({ AC, maxHP, tempHP, currentHP }) {
  return (<div className="armorAndHealth">
    <form className="form-grid">
      <form className="form-column">
        <form className="form-row">
          <label> AC</label>
          <textarea
            value={AC} />
          <br />
          <label> Max HP</label>
          <textarea
            value={maxHP} />
          <br />
          <label> Temp HP</label>
          <textarea
            value={tempHP} />
          <br />

        </form>
        <form className="form-row">
          <label> Current HP</label>
          <textarea
            value={currentHP} />
          <br />

        </form>
      </form>
    </form>
  </div>);
}
