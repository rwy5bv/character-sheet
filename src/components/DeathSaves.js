import React, { useState } from "react";
import "./DeathSaves.css";
export function DeathSaves({id, onChildData}) {

  const [values, setValues] = useState({
    failure1: false,
    failure2: false,
    failure3: false,
    success1: false,
    success2: false,
    success3: false,
  });

  function handleInputChange(event){
    const {name, checked} = event.target;
    setValues(prevValue => ({
      ...prevValue,
      [name]: checked,
    }));
  }

  React.useEffect(() => {
    onChildData(id, values);
  }, [id, values, onChildData]);

  return (
    <div className="deathSaves">
      <h2>Death Saves</h2>
      <table>
        <tr>
          <td>Successes</td>
          <td>
            <input type="checkbox" checked={values.success1} name="success1"  onChange = {handleInputChange}/>
            <input type="checkbox" checked={values.success2} name="success2"  onChange = {handleInputChange}/>
            <input type="checkbox" checked={values.success3} name="success3"  onChange = {handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Failures</td>
          <td>
            <input type="checkbox" checked={values.failure1} name="failure1"  onChange = {handleInputChange}/>
            <input type="checkbox" checked={values.failure2} name="failure2"  onChange = {handleInputChange}/>
            <input type="checkbox" checked={values.failure3} name="failure3"  onChange = {handleInputChange}/>
          </td>
        </tr>
      </table>
    </div>
  );
}
