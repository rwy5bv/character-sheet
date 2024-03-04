export function Skills({ acrobatics, animalHandling, arcana, athletics, deception, history, insight, intimidation, investigation, medicine, nature, perception, performance, persuasion, religion, sleightOfHand, stealth, survival }) {
  return (<div className="skills">
    <table>
      <h2>Skills</h2>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Acrobatics </label></td>
        <td><input type="text" value={acrobatics} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Animal Handling </label></td>
        <td><input type="text" value={animalHandling} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Arcana </label></td>
        <td><input type="text" value={arcana} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Athletics </label></td>
        <td><input type="text" value={athletics} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Deception </label></td>
        <td><input type="text" value={deception} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> History </label></td>
        <td><input type="text" value={history} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Insight </label></td>
        <td><input type="text" value={insight} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Intimidation </label></td>
        <td><input type="text" value={intimidation} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Investigation </label></td>
        <td><input type="text" value={investigation} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Medicine </label></td>
        <td><input type="text" value={medicine} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Nature </label></td>
        <td><input type="text" value={nature} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Perception </label></td>
        <td><input type="text" value={perception} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Performance </label></td>
        <td><input type="text" value={performance} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Persuasion </label></td>
        <td><input type="text" value={persuasion} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Religion </label></td>
        <td><input type="text" value={religion} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Sleight of Hand </label></td>
        <td><input type="text" value={stealth} /></td>
      </tr>
      <tr>
        <td><button type="radio"></button></td>
        <td><label> Survival </label></td>
        <td><input type="text" value={survival} /></td>
      </tr>
    </table>

  </div>);

}
