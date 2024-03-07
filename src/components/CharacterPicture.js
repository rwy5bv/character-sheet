import "./CharacterPicture.css";
import myImage from "../images/dndPortraitTest.webp";
export function CharacterPicture({}){
    return(<div className="characterPicture">
        <img src={myImage} alt="picture of character">
        </img>
    </div>

    );
};