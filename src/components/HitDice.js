export function HitDice({ d6Current, d6Max, d8Current, d8Max, d10Current, d10Max, d12Current, d12Max }) {
  return (
    <div className="hitDice">
       <table>
      <tr className="form-row">
        <td><input type="text" placeholder="Max" value={d6Max} /></td>
        <td><p>d6</p></td>
        <td><input type="text" placeholder="Current" value={d6Current} /></td>
      </tr>
      <tr className="form-row">
        <td><input type="text" placeholder="Max" value={d8Max} /></td>
        <td><p>d8</p></td>
        <td><input type="text" placeholder="Current" value={d8Current} /></td>
      </tr>
      <tr className="form-row">
        <td><input type="text" placeholder="Max" value={d10Max} /></td>
        <td><p>d10</p></td>
        <td><input type="text" placeholder="Current" value={d10Current} /></td>
      </tr>
      <tr className="form-row">
        <td><input type="text" placeholder="Max" value={d12Max} /></td>
        <td><p>d12</p></td>
        <td><input type="text" placeholder="Current" value={d12Current} /></td>
      </tr>
    </table>
    </div>
  );

}
