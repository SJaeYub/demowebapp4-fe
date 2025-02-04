import CenterField from "../../components/CenterField.jsx";
import Title from "../../components/Title.jsx";
import MainMenu from "../../components/MainMenu.jsx";
import {btnTextList} from "../../util/mainBtnList.js";
import List from "../../components/List.jsx";

const Strategy = () => {

    const jsonData = [
        { strName: 'tstStr1' },
        { strName: 'tstStr2' },
        { strName: 'tstStr3' },
    ];

    const activateMockData = [
        { strName: 'tstStr2' },
    ]

    return (
        <>
            <CenterField mainTxt={"demo-webapp4"} subTxt={"strategy"}/>
            <MainMenu btnText={btnTextList}/>
            <Title text={"strategy List"}/>
            <List jsonData={jsonData} showActivateButton={true} />
            <Title text={"current activate Strategy"}/>
            <List jsonData={activateMockData} showActivateButton={false} />
        </>
    )
}

export default Strategy;