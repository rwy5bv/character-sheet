export function Header({ classAndLevel, background, playerName, race, alignment, experiencePoints }) {
  return (
    <div className="header">
      <table>
        <tr>
          <th>Class & Level</th>
          <th>Background</th>
          <th>Player Name</th>
        </tr>
        <tr>
          <td>
            <input type="text" value={classAndLevel.characterClass} />
            <input type="text" value={classAndLevel.level} />
          </td>
          <td><input type="text" value={background} /></td>
          <td><input type="text" value={playerName} /></td>
        </tr>
        <tr>
          <th>Race</th>
          <th>Alignment</th>
          <th>Experience Points</th>
        </tr>
        <tr>
          <td><input type="text" value={race} /></td>
          <td><input type="text" value={alignment} /></td>
          <td><input type="text" value={experiencePoints} /></td>
        </tr>
      </table>
    </div>
  );

}
