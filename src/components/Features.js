//import React from "react";
import "./Features.css";
export function Features({id, onChildData, formData}) {

  function handleInputChange(event) {
    const { name, value } = event.target;
    onChildData(id, name, value);
  };


  return (
    <div className="features">
      <h2> Features</h2>
      <textarea
        rows="5"
        cols="30"
        placeholder="Features"
        name="features"
        value={formData?.features?.features||""} 
        onChange={handleInputChange}
        />
    </div>

  );
}
