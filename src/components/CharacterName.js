import "./CharacterName.css"
import React, { useState } from "react";
export function CharacterName({id, onChildData}) {
  const [values, setValues] = useState({
    characterName: ''
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
    <div className="characterName">
      <h2> Character Name</h2>
      <form>
        <input type="text"
          value={values.characterName} 
          name="characterName"
          onChange={handleInputChange}
          />
      </form>
    </div>
  );
}
