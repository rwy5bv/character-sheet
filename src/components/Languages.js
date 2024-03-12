import React, { useState } from "react";
import "./Languages.css";
export function Languages({id, onChildData}) {

    const [values, setValues] = useState({
        languages: ''
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
        <div className="languages">
            <h2> Languages </h2>
            <textarea
                rows="5"
                cols="30"
                placeholder="Languages"
                name="languages"
                value={values.languages} 
                onChange={handleInputChange} />
        </div>


    );
}