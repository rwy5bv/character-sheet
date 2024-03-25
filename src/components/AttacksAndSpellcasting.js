import "./AttacksAndSpellcasting.css";

export function AttacksAndSpellcasting({id, onChildData, rowData, setRowData}) {
  const columnLabels = ["Name", "Attack Modifier or DC", "Damage", "Range", "Ammo"];
  //camelcase names which are set in formData
  const propertyNames = ["name", "attackModifierOrDC", "damage", "range", "ammo"];
  debugger;
  const handleInputChange = (index, column, target) => {
    const updatedRowData = [...rowData];
    updatedRowData[index][column] = target.value;
    setRowData(updatedRowData);


    const {name, value} = target;
    onChildData(id, index, name, value);
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
            <input type="text"
              value={row[column] || ''}
              name= {String(propertyNames[columnIndex] + rowIndex)}
              onChange={(e) => handleInputChange(rowIndex, column, e.target)} />
          </td>
        ))}
      </tr>
    ));
  };

  const handleAddRow = () => {
    setRowData([...rowData, {}]);
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
