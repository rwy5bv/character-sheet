import React, { useState } from "react";
import "./Proficiencies.css";
export function Proficiencies({ id, onChildData, formData }) {
  function handleInputChange(event) {
    const { name, value } = event.target;
    onChildData(id, name, value);
  };

  return (
    <div className="proficiencies">
      <h2> Proficiencies </h2>
      <textarea
        rows="5"
        cols="30"
        placeholder="Proficiencies"
        name="proficiencies"
        value={formData?.proficiencies?.proficiencies||""}
        onChange={handleInputChange}
      />
    </div>
  );

}
