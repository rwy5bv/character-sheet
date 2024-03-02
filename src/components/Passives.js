export function Passives({ inspiration, proficiencyBonus, initiative, speed, vision }) {
  return (
    <div className="passives">
      <form>
        <label>Inspiration</label>
        <input type="checkbox" value={inspiration}></input>
        <br />
        <label> Proficiency Bonus </label>
        <textarea
          value={proficiencyBonus} />
        <br />
        <label> Initiative </label>
        <textarea
          value={initiative} />
        <br />
        <label> Speed </label>
        <textarea value={speed}></textarea>
        <br />
        <label> Vision </label>
        <textarea value={vision}></textarea>
      </form>
    </div>);

}
