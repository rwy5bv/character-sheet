import "./Traits.css";
export function Traits({ id, onChildData, formData}) {

    function handleInputChange(event) {
        const { name, value } = event.target;
        onChildData(id, name, value);
    };

    return (
        <div className="traits">
            <h2> Traits </h2>
            <form>
                <textarea
                    placeholder="Traits"
                    rows="5"
                    cols="30"
                    name="traits"
                    value={formData?.traits?.traits || ""}
                    onChange={handleInputChange} />
            </form>
        </div>
    );
}
