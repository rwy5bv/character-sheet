import "./Languages.css";
export function Languages({id, onChildData, formData}) {

  function handleInputChange(event) {
    const { name, value } = event.target;
    onChildData(id, name, value);
  };

    return (
        <div className="languages">
            <h2> Languages </h2>
            <textarea
                rows="5"
                cols="30"
                placeholder="Languages"
                name="languages"
                value={formData?.languages?.languages||""} 
                onChange={handleInputChange} />
        </div>


    );
}