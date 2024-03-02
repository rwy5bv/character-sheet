export function Header({ classAndLevel, background, playerName, race, alignment, experiencePoints }) {
  return (
    <div className="header">
      <form className="form-grid">
        <form className="form-row">
          <form className="form-column">
            <p> Class & Level</p>
            <textarea
              value={classAndLevel.characterClass} />
            <textarea
              value={classAndLevel.level} />
            <br />
          </form>
          <form className="form-column">
            <p> Background </p>
            <textarea
              value={background} />
          </form>
          <form className="form-column">
            <p> Player Name</p>
            <br />
            <textarea
              value={playerName} />
          </form>
        </form>
        <form className="form-row">
          <form className="form-column">
            <p> Race</p>
            <br />
            <textarea
              value={race} />
          </form>
          <form className="form-column">
            <p> Alignment</p>
            <br />
            <textarea
              value={alignment} />
          </form>
          <form className="form-column">
            <p> Experience Points</p>
            <br />
            <textarea
              value={experiencePoints} />
            <br />
          </form>
        </form>
      </form>
    </div>
  );

}
