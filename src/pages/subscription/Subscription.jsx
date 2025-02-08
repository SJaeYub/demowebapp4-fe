import CenterField from "../../components/CenterField.jsx";
import MainMenu from "../../components/MainMenu.jsx";
import {btnTextList} from "../../util/mainBtnList.js";
import List from "../../components/List.jsx";
import Title from "../../components/Title.jsx";
import SubscribeForm from "../../components/SubscribeForm.jsx";
import {useState} from "react";
import PaymentInfo from "../../components/PaymentInfo.jsx";

const Subscription = () => {
    const [isFormActive, setIsFormActive] = useState(false); // 폼 활성화 상태 관리
    const [isPaymentInfoActive, setIsPaymentInfoActive] = useState(false); // PaymentInfo 활성화 여부
    const [formData, setFormData] = useState(null); // SubscribeForm 데이터 저장

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
            plan: "tstStr2",
        }
    ]

    const onClickActivate = () => {
        // 결제 페이지 이동
        setIsFormActive(true);
        console.log("activate");
    }

    const handleFormSubmit = (data) => {
        setFormData(data); // SubscribeForm 데이터를 저장
        setIsFormActive(false);
        setIsPaymentInfoActive(true); // PaymentInfo 활성화
    };

    return (
        <>
            <CenterField mainTxt={"demo-webapp4"} subTxt={"Subscription"}/>
            <MainMenu btnText={btnTextList}/>
            {!isFormActive && !isPaymentInfoActive && (
                <>
                    <Title text={"subscribe plan"}/>
                    <List jsonData={mockSubscribePlan} showActivateButton={true} onItemClick={onClickActivate}/>
                    <Title text={"current plan"}/>
                    <List jsonData={currentMockPlan} showActivateButton={false}/>
                </>
            )} {isFormActive && (
            <SubscribeForm onSubmit={handleFormSubmit}/>
        )} {isPaymentInfoActive && (
            <PaymentInfo formData={formData}/>
        )}

        </>
    )
}

export default Subscription;