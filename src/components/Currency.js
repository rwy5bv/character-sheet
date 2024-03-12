import React, { useState } from "react";
import "./Currency.css";
export function Currency({id, onChildData}) {
  const [values, setValues] = useState({
    copperPieces: '',
    silverPieces: '',
    electrumPieces: '',
    goldPieces: '',
    platinumPieces: ''

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
    <div className="currency">
    <table>
      <tr>
        <th>CP</th>
        <td><input type="text" value={values.copperPieces} name = "copperPieces" onChange = {handleInputChange} /></td>
      </tr>
      <tr>
        <th>SP</th>
        <td><input type="text" value={values.silverPieces} name = "silverPieces" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <th>EP</th>
        <td><input type="text" value={values.electrumPieces} name = "electrumPieces" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <th>GP</th>
        <td><input type="text" value={values.goldPieces} name = "goldPieces" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <th>PP</th>
        <td><input type="text" value={values.platinumPieces} name = "platinumPieces" onChange = {handleInputChange}/></td>
      </tr>
    </table>
  </div>

  );
}
