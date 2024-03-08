export function ProficienciesAndLanguages({ proficiencies, languages }) {
  return (
    <div className="proficienciesAndLanguages">
      <h2> Other Proficiencies </h2>
      <form>
        <textarea
          placeholder="Other Proficiencies"
          value={proficiencies} />
      </form>
      <br />
      <h2> Languages </h2>
      <form>
        <textarea
          placeholder="Languages"
          value={languages} />
      </form>
    </div>
  );

}
