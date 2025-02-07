import { useState } from 'react';
import Button from './Button';
import {useNavigate} from "react-router-dom";
// import './Post.css';

const Post = ({ types, onCancel }) => {
    const [formData, setFormData] = useState({});
    const nav = useNavigate();

    const handleInputChange = (type, value) => {
        setFormData(prev => ({
            ...prev,
            [type]: value
        }));
    };

    const handlePost = () => {
        // pageId는 백엔드에서 DB에 자동으로 입력해야 함
        const postData = {
            ...formData,
            author: '', // 세션에서 조회한 유저 아이디로 설정
            date: new Date().toISOString(),
        };

        // API 호출 로직 구현
        console.log('Post Data:', postData);
    };

    const handleCancel = () => {
        setFormData({});
        if (onCancel) {
            onCancel();
        }
    };

    const renderInput = (type) => {
        const value = formData[type] || '';

        switch(type) {
            case 'title':
                return (
                    <div className="input-group" key={type}>
                        <label>제목</label>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => handleInputChange(type, e.target.value)}
                            placeholder="제목을 입력하세요"
                            className="post-input"
                        />
                    </div>
                );
            case 'content':
                return (
                    <div className="input-group" key={type}>
                        <label>내용</label>
                        <textarea
                            value={value}
                            onChange={(e) => handleInputChange(type, e.target.value)}
                            placeholder="내용을 입력하세요"
                            className="post-textarea"
                        />
                    </div>
                );
            default:
                return (
                    <div className="input-group" key={type}>
                        <label>{type}</label>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => handleInputChange(type, e.target.value)}
                            placeholder={`${type}을(를) 입력하세요`}
                            className="post-input"
                        />
                    </div>
                );
        }
    };

    return (
        <div className="post-container">
            {types.map(type => renderInput(type))}
            <div className="button-group">
                <Button text="post" onClick={handlePost} />
                <Button text="cancel" onClick={handleCancel} />
            </div>
        </div>
    );
};

export default Post;
