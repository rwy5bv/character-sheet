import React, { useState } from "react";
import "./Header.css";
export function Header({id, onChildData}) {
  const [values, setValues] = useState({
    class: '',
    level: '',
    background: '',
    playerName: '',
    race: '',
    alignment: '',
    experiencePoints: ''
  });

  function handleInputChange(event){
    const {name, value} = event.target;
    setValues(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    onChildData(id, values);
  }, [id, values, onChildData]);


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
            <input type="text" value={values.class} name = "class" onChange = {handleInputChange}/>
            <input type="text" value={values.level} name = "level" onChange = {handleInputChange}/>
          </td>
          <td><input type="text" value={values.background} name = "background" onChange = {handleInputChange}/></td>
          <td><input type="text" value={values.playerName} name = "playerName" onChange = {handleInputChange} /></td>
        </tr>
        <tr>
          <th>Race</th>
          <th>Alignment</th>
          <th>Experience Points</th>
        </tr>
        <tr>
          <td><input type="text" value={values.race} name = "race" onChange = {handleInputChange} /></td>
          <td><input type="text" value={values.alignment} name = "alignment" onChange = {handleInputChange} /></td>
          <td><input type="text" value={values.experiencePoints} name="experiencePoints" onChange={handleInputChange} /></td>
        </tr>
      </table>
    </div>
  );

}
