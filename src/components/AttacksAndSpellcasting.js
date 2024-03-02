import { useState } from 'react';

export function AttacksAndSpellcasting({ name, attackModifier, damage, range, ammo, used }) {
  const columnLabels = ["Name", "Attack Modifier", "Damage", "Range", "Ammo", "Used?"];
  const [rowData, setRowData] = useState([{}]);

  const handleInputChange = (index, column, value) => {
    // Update the state with the new value for the specified row and column
    const updatedRowData = [...rowData];
    updatedRowData[index][column] = value;
    setRowData(updatedRowData);
  };

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
            <textarea
              value={row[column] || ''}
              onChange={(e) => handleInputChange(rowIndex, column, e.target.value)} />
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
