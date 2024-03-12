import React, { useState } from "react";
import "./ArmorAndHealth.css";
export function ArmorAndHealth({id, onChildData }) {
  const [values, setValues] = useState({
    AC: '',
    maxHP: '',
    tempHP: '',
    currentHP: ''
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


  return (<div className="armorAndHealth">
    <table>
      <tr>
        <td><label> AC</label></td>
        <td><input type="text" value={values.AC} name = "AC" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <td><label> Max HP</label></td>
        <td><input type="text" value={values.maxHP} name = "maxHP" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <td><label> Temp HP</label></td>
        <td><input type="text" value={values.tempHP} name= "tempHP" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <td><label> Current HP</label></td>
        <td><input type="text" value={values.currentHP} name = "currentHP" onChange = {handleInputChange}/></td>
      </tr>
    </table>
  </div>
  );
}
