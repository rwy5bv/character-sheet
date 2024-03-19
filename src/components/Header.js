import "./Header.css";
export function Header({id, onChildData, formData}) {
  function handleInputChange(event) {
    const { name, value } = event.target;
    onChildData(id, name, value);
  };


  return (
    <div className="header">
      <table>
        <tr>
          <th>Class & Level</th>
          <th>Background</th>
          <th>Player Name</th>
        </tr>
        <tr>
          <td className="classLevelColumn">
            <input type="text" value={formData?.header?.playerClass||""} placeholder="Fighter" name = "playerClass" onChange = {handleInputChange}/>
            <input type="number" value={formData?.header?.level||""} placeholder="8" name = "level" onChange = {handleInputChange}/>
          </td>
          <td><input type="text" value={formData?.header?.background||""} placeholder="Acolyte" name = "background" onChange = {handleInputChange}/></td>
          <td><input type="text" value={formData?.header?.playerName||""} placeholder="FirstName LastName" name = "playerName" onChange = {handleInputChange} /></td>
        </tr>
        <tr>
          <th>Race</th>
          <th>Alignment</th>
          <th>Experience Points</th>
        </tr>
        <tr>
          <td><input type="text" value={formData?.header?.race||""} placeholder="Human" name = "race" onChange = {handleInputChange} /></td>
          <td><input type="text" value={formData?.header?.alignment||""} placeholder="True Neutral" name = "alignment" onChange = {handleInputChange} /></td>
          <td><input type="number" value={formData?.header?.experiencePoints||""} placeholder="0"  name="experiencePoints" onChange={handleInputChange} /></td>
        </tr>
      </table>
    </div>
  );

}
