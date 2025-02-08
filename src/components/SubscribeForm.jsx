import React, { useState } from 'react';
import Button from "./Button.jsx";

const SubscribeForm = ({ onSubmit }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [apiKey, setApiKey] = useState('');
    const [secKey, setSecKey] = useState('');
    const [selectedExchange, setSelectedExchange] = useState('');

    const mockExchanges = ['Exchange A', 'Exchange B', 'Exchange C'];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (startDate && endDate && apiKey && secKey && selectedExchange) {
            onSubmit({
                startDate,
                endDate,
                apiKey,
                secKey,
                selectedExchange,
            });
        } else {
            alert("모든 필드를 입력해주세요.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                시작:
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </label>
            <label>
                종료:
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </label>
            <label>
                API key:
                <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
            </label>
            <label>
                Sec key:
                <input type="text" value={secKey} onChange={(e) => setSecKey(e.target.value)} />
            </label>
            <label>
                거래소 명:
                <select value={selectedExchange} onChange={(e) => setSelectedExchange(e.target.value)}>
                    <option value="" disabled>거래소를 선택하세요</option>
                    {mockExchanges.map((exchange, index) => (
                        <option key={index} value={exchange}>{exchange}</option>
                    ))}
                </select>
            </label>
            <Button text={"다음 버튼"} onClick={handleSubmit} />
        </form>
    );
};

export default SubscribeForm;
