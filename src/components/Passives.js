export function Passives({ inspiration, proficiencyBonus, initiative, speed, vision }) {
  return (
    <div className="passives">
      <table>
        <tr>
          <td>
            Inspiration
          </td>
          <td>
            <input type="checkbox" value={inspiration}></input>
          </td>
        </tr>
        <tr>
          <td>
            Proficiency Bonus
          </td>
          <td>
            <input type="text"
              value={proficiencyBonus} />
          </td>
        </tr>
        <tr>
          <td>
            <label> Initiative </label>
          </td>
          <td>
            <input type="text"
              value={initiative} />
          </td>
        </tr>
        <tr>
          <td>
            <label> Speed </label>
          </td>
          <td>
            <input type="text" value={speed}></input>
          </td>
        </tr>
        <tr>
          <td>
            <label> Vision </label>
          </td>
          <td>
            <input type="text" value={vision}></input>
          </td>
        </tr>
      </table>
    </div>);

}
