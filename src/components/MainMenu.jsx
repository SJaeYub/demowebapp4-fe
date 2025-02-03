import Button from "./Button.jsx";

const MainMenu = ({btnText, onClick}) => {
    return (
        <div>
            {btnText.map((item, index) => (
                <Button key={index} text={item} onClick={onClick}/>
            ))}
        </div>
    )
}

export default MainMenu;