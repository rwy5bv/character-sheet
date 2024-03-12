import React, { useState } from "react";
import "./Features.css";



export function Features({id, onChildData}) {

  const [values, setValues] = useState({
    features: ''
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
    <div className="features">
      <h2> Features</h2>
      <textarea
        rows="5"
        cols="30"
        placeholder="Features"
        name="features"
        value={values.features} 
        onChange={handleInputChange}
        />
    </div>

  );
}
