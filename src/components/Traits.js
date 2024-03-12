import "./Traits.css";
import React, { useState } from "react";
export function Traits({ id, onChildData }) {
    const [values, setValues] = useState({
        traits: ''
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
        <div className="traits">
            <h2> Traits </h2>
            <form>
                <textarea
                    placeholder="Traits"
                    rows="5"
                    cols="30"
                    name="traits"
                    value={values.traits}
                    onChange={handleInputChange} />
            </form>
        </div>
    );
}
