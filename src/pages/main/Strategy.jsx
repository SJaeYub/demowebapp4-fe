import React, { useState } from 'react';
import CenterField from "../../components/CenterField.jsx";
import Title from "../../components/Title.jsx";
import MainMenu from "../../components/MainMenu.jsx";
import {btnTextList} from "../../util/mainBtnList.js";
import List from "../../components/List.jsx";
import { useNavigate } from "react-router-dom";

// Mock 데이터: 구독 여부 확인 API 대신 사용
const checkSubscription = async () => {
    // 테스트를 위해 mock 데이터를 사용합니다.
    // 실제로는 백엔드 API를 호출해야 합니다.
    const response = {
        // hasSubscription: true, // 구독한 경우
        hasSubscription: false, // 구독하지 않은 경우
    };
    return response.hasSubscription;
};

const Strategy = () => {
    const navigate = useNavigate();

    const jsonData = [
        { strName: 'tstStr1' },
        { strName: 'tstStr2' },
        { strName: 'tstStr3' },
    ];

    const activateMockData = [
        { strName: 'tstStr2' },
    ];

    const handleActivateClick = async () => {
        const hasSubscription = await checkSubscription();
        if (!hasSubscription) {
            navigate("/subscribe");
        } else {
            // 구독 권한이 있는 경우, 활성화 로직을 수행합니다.
            console.log('Activate button clicked');
        }
    };

    return (
        <>
            <CenterField mainTxt={"demo-webapp4"} subTxt={"strategy"}/>
            <MainMenu btnText={btnTextList}/>
            <Title text={"strategy List"}/>
            <List
                jsonData={jsonData}
                showActivateButton={true}
                onItemClick={handleActivateClick}
            />
            <Title text={"current activate Strategy"}/>
            <List jsonData={activateMockData} showActivateButton={false} />
        </>
    )
}

export default Strategy;
