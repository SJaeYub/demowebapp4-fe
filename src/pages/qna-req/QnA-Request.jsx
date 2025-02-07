import React, {useState} from 'react';
import CenterField from "../../components/CenterField.jsx";
import Title from "../../components/Title.jsx";
import MainMenu from "../../components/MainMenu.jsx";
import {btnTextList} from "../../util/mainBtnList.js";
import Button from "../../components/Button.jsx";
import List from "../../components/List.jsx";
import PostInfo from "../../components/PostInfo.jsx";
import {useNavigate} from "react-router-dom";

const QnARequest = () => {
    const [selectedId, setSelectedId] = useState(null); // 선택된 항목의 ID를 저장하는 상태
    const nav = useNavigate();
    const mockData = [
        {
            id: 1,
            title: "temp request",
            date: "2020-05-01",
            author: "kim amugae"
        },
        {
            id: 2,
            title: "temp request2",
            date: "2024-05-01",
            author: "lim amugae"
        },
        {
            id: 3,
            title: "temp request3",
            date: "2018-05-01",
            author: "kim amugae"
        }
    ];

    const handleItemClick = (obj) => {
        setSelectedId(obj.id); // 항목 클릭 시 해당 ID를 상태에 저장
    };

    return (
        <>
            <CenterField mainTxt={"demo-webapp4"} subTxt={"QnA/Request"}/>
            <MainMenu btnText={btnTextList}/>
            {selectedId === null ? (
                // 선택된 항목이 없을 때는 Title, Button, List 컴포넌트를 렌더링
                <>
                    <Title text={"QnA"}/>
                    <Button text={"글쓰기"}/>
                    <List jsonData={mockData}
                          showActivateButton={false}
                          onRowClick={handleItemClick}/>
                </>
            ) : (
                // 선택된 항목이 있을 때는 PostInfo 컴포넌트를 렌더링
                <>
                    <Button text={"back"} onClick={() => {
                        setSelectedId(null);
                    }}/>
                    <PostInfo postId={selectedId} useMock={true}/>
                </>
            )}
        </>
    );
};

export default QnARequest;
