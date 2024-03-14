import "./Currency.css";
export function Currency({id, onChildData, formData}) {
  function handleInputChange(event) {
    const { name, value } = event.target;
    onChildData(id, name, value);
  };

  return (
    <div className="currency">
    <table>
      <tr>
        <th>CP</th>
        <td><input type="number" value={formData?.currency?.copperPieces||""} placeholder="0" name = "copperPieces" onChange = {handleInputChange} /></td>
      </tr>
      <tr>
        <th>SP</th>
        <td><input type="number" value={formData?.currency?.silverPieces||""} placeholder="0" name = "silverPieces" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <th>EP</th>
        <td><input type="number" value={formData?.currency?.electrumPieces||""} placeholder="0" name = "electrumPieces" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <th>GP</th>
        <td><input type="number" value={formData?.currency?.goldPieces||""} placeholder="0" name = "goldPieces" onChange = {handleInputChange}/></td>
      </tr>
      <tr>
        <th>PP</th>
        <td><input type="number" value={formData?.currency?.platinumPieces||""} placeholder="0" name = "platinumPieces" onChange = {handleInputChange}/></td>
      </tr>
    </table>
  </div>

  );
}
