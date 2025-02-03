import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";

const MainMenu = ({btnText}) => {
    const nav= useNavigate();

    return (
        <div>
            {btnText.map((item, index) => (
                <Button key={index} text={item.btnText} onClick={() => {nav(item.toUrl)}}/>
            ))}
        </div>
    )
}

export default MainMenu;