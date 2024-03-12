import "./CharacterPicture.css";
import React, {useState} from "react";
import myImage from "../images/placeholderCharacter.webp";
export function CharacterPicture({id, onChildData}){
    const [values, setValues] = useState({
        characterImageURL: myImage,
        imageData: null
    });

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
            setValues({
              characterImageURL: URL.createObjectURL(file),
              imageData: reader.result, 
            });
          };
        reader.readAsDataURL(file);
    }

    React.useEffect(() => {
        onChildData(id, values);
      }, [id, values, onChildData]);

    return(<div className="characterPicture">
        <h2> Upload Image </h2>
        <img src={values.characterImageURL} alt="picture of character">
        </img>
        <br />
        <label>Accepted Image Types: jpg, jpeg, png, webp</label>
        <br />
        <input type="file" accept=".jpg,.jpeg,.png,.webp" onChange={handleInputChange} />
    </div>

    );
};