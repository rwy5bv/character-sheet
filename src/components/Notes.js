import "./Notes.css";
import React, { useState } from "react";

export function Notes({id, onChildData}) {
  const [values, setValues] = useState({
    notes: ''
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
    <div className="notes">
      <h2> Notes </h2>
      <form>
        <textarea 
        rows="10"
        cols="30"
        placeholder="Write Notes Here"
        name="notes"
        value={values.notes} 
        onChange={handleInputChange}
          />
      </form>
    </div>
  );

}
