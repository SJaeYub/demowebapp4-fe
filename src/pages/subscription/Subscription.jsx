import CenterField from "../../components/CenterField.jsx";
import MainMenu from "../../components/MainMenu.jsx";
import {btnTextList} from "../../util/mainBtnList.js";
import List from "../../components/List.jsx";
import Title from "../../components/Title.jsx";

const Subscription = () => {

    const mockSubscribePlan = [
        {
            plan_list: "monthly",
            price: "10 USDT"
        },
        {
            plan_list: "yearly",
            price: "108 USDT"
        }
    ];

    const currentMockPlan = [
        {
            plan: "monthly",
        }
    ]

    const onClickActivate = () => {
        // 결제 페이지 이동
        console.log("activate");
    }

    return (
        <>
            <CenterField mainTxt={"demo-webapp4"} subTxt={"Subscription"}/>
            <MainMenu btnText={btnTextList}/>
            <Title text={"subscribe plan"}/>
            <List jsonData={mockSubscribePlan} showActivateButton={true} onItemClick={onClickActivate}/>
            <Title text={"current plan"}/>
            <List jsonData={currentMockPlan} showActivateButton={false}/>
        </>
    )
}

export default Subscription;