import CenterField from "../../components/CenterField.jsx";
import Header from "../../components/Header.jsx";
import MainMenu from "../../components/MainMenu.jsx";
import {btnTextList} from "../../util/mainBtnList.js";

const Strategy = () => {
    return (
        <>
            <CenterField mainTxt={"demo-webapp4"} subTxt={"strategy"}/>
            <MainMenu btnText={btnTextList}/>
            <Header text={"strategy List"} />
        </>
    )
}

export default Strategy;