import CenterField from "../../components/CenterField.jsx";
import BcktstInptForm from "../../components/BcktstInptForm.jsx";

const Main = () => {
    const tmpStrList = ['tstStr1', 'tstStr2', 'tstStr3'];

    return (
        <>
            <div>
                <CenterField mainTxt={"demo-webapp4"} subTxt={"main"}/>
            </div>
            <div>
                <BcktstInptForm strList={tmpStrList}/>
            </div>
        </>
    )
}
export default Main;