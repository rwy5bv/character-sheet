import React, { useState } from "react";
import "./Proficiencies.css";
export function Proficiencies({ id, onChildData }) {
  const [values, setValues] = useState({
    proficiencies: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setValues(prevValue => ({
      ...prevValue,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    onChildData(id, values);
  }, [id, values, onChildData]);

  return (
    <div className="proficiencies">
      <h2> Proficiencies </h2>
      <textarea
        rows="5"
        cols="30"
        placeholder="Proficiencies"
        name="proficiencies"
        value={values.proficiencies}
        onChange={handleInputChange}
      />
    </div>
  );

}
