import CenterField from "../../components/CenterField.jsx";
import BcktstInptForm from "../../components/BcktstInptForm.jsx";
import MainMenu from "../../components/MainMenu.jsx";

const Main = () => {
    const tmpStrList = ['tstStr1', 'tstStr2', 'tstStr3'];
    const btnTextList = ["Main", "Strategy", "Subscribe", "QnA", "Setting"];

    return (
        <>
            <CenterField mainTxt={"demo-webapp4"} subTxt={"main"}/>
            <BcktstInptForm strList={tmpStrList}/>
            <MainMenu btnText={btnTextList}/>
        </>
    )
}
export default Main;