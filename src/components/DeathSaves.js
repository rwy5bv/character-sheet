
import "./DeathSaves.css";
export function DeathSaves({id, onChildData, formData}) {

  function handleInputChange(event) {
    const { name, checked } = event.target;
    onChildData(id, name, checked);
  };

  return (
    <div className="deathSaves">
      <h2>Death Saves</h2>
      <table>
        <tr>
          <td>Successes</td>
          <td>
            <input type="checkbox" checked={formData?.deathSaves?.success1||false} name="success1"  onChange = {handleInputChange}/>
            <input type="checkbox" checked={formData?.deathSaves?.success2||false} name="success2"  onChange = {handleInputChange}/>
            <input type="checkbox" checked={formData?.deathSaves?.success3||false} name="success3"  onChange = {handleInputChange}/>
          </td>
        </tr>
        <tr>
          <td>Failures</td>
          <td>
            <input type="checkbox" checked={formData?.deathSaves?.failure1||false} name="failure1"  onChange = {handleInputChange}/>
            <input type="checkbox" checked={formData?.deathSaves?.failure2||false} name="failure2"  onChange = {handleInputChange}/>
            <input type="checkbox" checked={formData?.deathSaves?.failure3||false} name="failure3"  onChange = {handleInputChange}/>
          </td>
        </tr>
      </table>
    </div>
  );
}
