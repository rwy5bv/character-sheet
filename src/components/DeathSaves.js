export function DeathSaves({ successes, failures }) {
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
