import "./CharacterName.css"
export function CharacterName({id, onChildData, formData}) {

  function handleInputChange(event) {
    const { name, value } = event.target;
    onChildData(id, name, value);
  };

  return (
    <div className="characterName">
      <h2> Character Name</h2>
      <form>
        <input type="text"
          value={formData?.characterName?.characterName||""} 
          name="characterName"
          onChange={handleInputChange}
          />
      </form>
    </div>
  );
}
