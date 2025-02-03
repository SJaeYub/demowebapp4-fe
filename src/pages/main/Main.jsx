import CenterField from "../../components/CenterField.jsx";
import BcktstInptForm from "../../components/BcktstInptForm.jsx";
import MainMenu from "../../components/MainMenu.jsx";
import {useNavigate} from "react-router-dom";
import {btnTextList} from "../../util/mainBtnList.js";

const Main = () => {
    const nav = useNavigate();
    const tmpStrList = ['tstStr1', 'tstStr2', 'tstStr3'];

    return (
        <>
            <CenterField mainTxt={"demo-webapp4"} subTxt={"main"}/>
            <BcktstInptForm strList={tmpStrList}/>
            <MainMenu btnText={btnTextList}/>
        </>
    )
}
export default Main;