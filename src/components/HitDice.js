export function HitDice({ d6Current, d6Max, d8Current, d8Max, d10Current, d10Max, d12Current, d12Max }) {
  return (
    <div className="hitDice">
      <div className="form-row">
        <textarea placeholder="Max" value={d6Max} />
        <p>d6</p>
        <textarea placeholder="Current" value={d6Current} />
      </div>
      <div className="form-row">
        <textarea placeholder="Max" value={d8Max} />
        <p>d8</p>
        <textarea placeholder="Current" value={d8Current} />
      </div>
      <div className="form-row">
        <textarea placeholder="Max" value={d10Max} />
        <p>d10</p>
        <textarea placeholder="Current" value={d10Current} />
      </div>
      <div className="form-row">
        <textarea placeholder="Max" value={d12Max} />
        <p>d12</p>
        <textarea placeholder="Current" value={d12Current} />
      </div>
    </div>
  );

}
