export function DeathSaves({ successes, failures }) {
  return (
    <div className="deathSaves">
      <h2>Death Saves</h2>
      <table>
        <tr>
          <td>Successes</td>
          <td>
            <input type="checkbox" name="success1" />
            <input type="checkbox" name="success2" />
            <input type="checkbox" name="success3" />
          </td>
        </tr>
        <tr>
          <td>Failures</td>
          <td>
            <input type="checkbox" name="failure1" />
            <input type="checkbox" name="failure2" />
            <input type="checkbox" name="failure3" />
          </td>
        </tr>
      </table>
    </div>
  );
}
