import React, { useState } from "react";
import "./HitDice.css";
export function HitDice({id, onChildData}) {
  const [values, setValues] = useState({
    d6Max: '',
    d6Current:'',
    d8Max:'',
    d8Current:'',
    d10Max: '',
    d10Current: '',
    d12Max: '',
    d12Current: ''
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
    <div className="hitDice">
       <table>
      <tr className="form-row">
        <td><input type="text" placeholder="Max" value={values.d6Max} name = "d6Max" onChange = {handleInputChange}/></td>
        <td><p>d6</p></td>
        <td><input type="text" placeholder="Current" value={values.d6Current} name = "d6Max" onChange = {handleInputChange} /></td>
      </tr>
      <tr className="form-row">
        <td><input type="text" placeholder="Max" value={values.d8Max} name = "d8Max" onChange = {handleInputChange} /></td>
        <td><p>d8</p></td>
        <td><input type="text" placeholder="Current" value={values.d8Current} name = "d8Current" onChange = {handleInputChange} /></td>
      </tr>
      <tr className="form-row">
        <td><input type="text" placeholder="Max" value={values.d10Max} name = "d10Max" onChange = {handleInputChange} /></td>
        <td><p>d10</p></td>
        <td><input type="text" placeholder="Current" value={values.d10Current} name = "d10Current" onChange = {handleInputChange} /></td>
      </tr>
      <tr className="form-row">
        <td><input type="text" placeholder="Max" value={values.d12Max} name = "d12Max" onChange = {handleInputChange} /></td>
        <td><p>d12</p></td>
        <td><input type="text" placeholder="Current" value={values.d12Current} name = "d12Current" onChange = {handleInputChange} /></td>
      </tr>
    </table>
    </div>
  );

}
