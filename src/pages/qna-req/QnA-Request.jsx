import CenterField from "../../components/CenterField.jsx";
import Title from "../../components/Title.jsx";
import MainMenu from "../../components/MainMenu.jsx";
import {btnTextList} from "../../util/mainBtnList.js";
import Button from "../../components/Button.jsx";
import List from "../../components/List.jsx";

const QnARequest = () => {

    const mockData = [
        {
            num: 1,
            title: "temp request",
            date: "2020-05-01",
            author: "kim amugae"
        },
        {
            num: 2,
            title: "temp request2",
            date: "2024-05-01",
            author: "lim amugae"
        },
        {
            num: 3,
            title: "temp request3",
            date: "2018-05-01",
            author: "kim amugae"
        }
    ]

    return (
        <>
            <CenterField mainTxt={"demo-webapp4"} subTxt={"QnA/Request"}/>
            <MainMenu btnText={btnTextList}/>
            <Title text={"QnA"}/>
            <Button text={"글쓰기"}/>
            <List jsonData={mockData} showActivateButton={false}/>
        </>
    )
}

export default QnARequest;