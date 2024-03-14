import "./Notes.css";

export function Notes({id, onChildData, formData}) {
  function handleInputChange(event) {
    const { name, value } = event.target;
    onChildData(id, name, value);
  };

  return (
    <div className="notes">
      <h2> Notes </h2>
      <form>
        <textarea 
        rows="10"
        cols="30"
        placeholder="Write Notes Here"
        name="notes"
        value={formData?.notes?.notes||""} 
        onChange={handleInputChange}
          />
      </form>
    </div>
  );

}
