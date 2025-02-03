import CenterField from "../../components/CenterField.jsx";
import BcktstInptForm from "../../components/BcktstInptForm.jsx";
import MainMenu from "../../components/MainMenu.jsx";
import {useNavigate} from "react-router-dom";
import {btnTextList} from "../../util/mainBtnList.js";
import SimulGraph from "../../components/SimulGraph.jsx";

const Main = () => {
    const nav = useNavigate();
    const tmpStrList = ['tstStr1', 'tstStr2', 'tstStr3'];

    const tmpCumulativeReturnMockData = [
        {"date": "2023-01-31", "cumulative_return": 1044835.7076505617},
        {"date": "2023-02-28", "cumulative_return": 1058509.2478557227},
        {"date": "2023-03-31", "cumulative_return": 1113958.6481783239},
        {"date": "2023-04-30", "cumulative_return": 1221067.4351408659},
        {"date": "2023-05-31", "cumulative_return": 1231192.930808533},
        {"date": "2023-06-30", "cumulative_return": 1241403.401112861},
        {"date": "2023-07-31", "cumulative_return": 1364253.4771477128},
        {"date": "2023-08-31", "cumulative_return": 1443887.3215772056},
        {"date": "2023-09-30", "cumulative_return": 1438871.6623259138},
        {"date": "2023-10-31", "cumulative_return": 1506682.8091637397},
        {"date": "2023-11-30", "cumulative_return": 1501905.2917858716},
        {"date": "2023-12-31", "cumulative_return": 1496969.298550124}
    ];

    return (
        <>
            <CenterField mainTxt={"demo-webapp4"} subTxt={"main"}/>
            <BcktstInptForm strList={tmpStrList}/>
            <MainMenu btnText={btnTextList}/>
            <SimulGraph simulData={tmpCumulativeReturnMockData}/>
        </>
    )
}
export default Main;