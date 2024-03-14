import "./CharacterPicture.css";

export function CharacterPicture({id, onChildData, formData, characterImageURL, setCharacterImageURL}){

    function handleInputChange(event) {
        if(!event.target.files[0]){
            console.error("Image must be non-empty");
            return;
        }
        if(event.target.files[0].size > 10485760){
            console.error("Image is too large! Must be less than 10MB in size. ");
            return;
        }
        const file = event.target.files[0];
        const reader = new FileReader();
        debugger;

        reader.onloadend = () => {
            onChildData(id, event.target.name, reader.result);
            setCharacterImageURL(URL.createObjectURL(file));
          };
        reader.readAsDataURL(file);
    }

    return(<div className="characterPicture">
        <h2> Upload Image </h2>
        <img src={characterImageURL} alt="character">
        </img>
        <br />
        <label>Accepted Image Types: jpg, jpeg, png, webp</label>
        <br />
        <input type="file" accept=".jpg,.jpeg,.png,.webp" name="characterPicture" onChange={handleInputChange} />
    </div>

    );
};