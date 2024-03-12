import "./AttacksAndSpellcasting.css";
import React, { useState } from 'react';

export function AttacksAndSpellcasting({id, onChildData}) {
  const columnLabels = ["Name", "Attack Modifier or DC", "Damage", "Range", "Ammo"];
  const [rowData, setRowData] = useState([{}]);

  const [values, setValues] = useState({
  });

  const handleInputChange = (index, column, target) => {
    const updatedRowData = [...rowData];
    updatedRowData[index][column] = target.value;
    setRowData(updatedRowData);


    const {name, value} = target;
    setValues(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  };


  React.useEffect(() => {
    onChildData(id, values);
  }, [id, values, onChildData]);

  const renderHeader = () => {
    return (
      <tr>
        {columnLabels.map((label, index) => (
          <th key={index}>{label}</th>
        ))}
      </tr>
    );
  };
  const renderRows = () => {
    return rowData.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {columnLabels.map((column, columnIndex) => (
          <td key={columnIndex}>
            <input type="text"
              value={row[column] || ''}
              name= {String(columnLabels[columnIndex].replace(/\s/g, "").toLowerCase() + rowIndex)}
              onChange={(e) => handleInputChange(rowIndex, column, e.target)} />
          </td>
        ))}
      </tr>
    ));
  };

  const handleAddRow = () => {
    setRowData([...rowData, {}]); // Add a new row with empty values
  };

  return (
    <div className="attacksAndSpellcasting">
      <table>
        <thead>{renderHeader()}</thead>
        <tbody>{renderRows()}</tbody>
      </table>
      <button onClick={handleAddRow}>Add Row</button>
    </div>
  );
}
