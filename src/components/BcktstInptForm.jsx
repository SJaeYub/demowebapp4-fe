import React, { useState, useEffect } from 'react';

const BcktstInptForm = ({ strList }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [dynamicInputs, setDynamicInputs] = useState({});
    const [inputValues, setInputValues] = useState({});

    // 드롭다운 변경 핸들러
    const handleDropdownChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
    };

    // 동적 입력 필드 값 변경 핸들러
    const handleInputChange = (fieldName, value) => {
        setInputValues(prev => ({ ...prev, [fieldName]: value }));
    };

    // 백엔드 통신 모킹 함수
    const mockFetchVariables = (selected) => {
        // 실제 구현시 여기서 API 호출
        const mockData = {
            tstStr1: ['변수1', '변수2'],
            tstStr2: ['승수', '기간'],
            tstStr3: ['항목A', '항목B', '항목C']
        };
        console.log('mockData', mockData['tstStr1']);
        return mockData[selected] || [];
    };

    // 날짜 유효성 검사
    const validateDates = () => {
        if (!startDate || !endDate) return true;
        return new Date(endDate) >= new Date(startDate);
    };

    // 드롭다운 선택 시 동적 필드 생성
    useEffect(() => {
        if (selectedOption) {
            const variables = mockFetchVariables(selectedOption);
            console.log(variables);
            const newInputs = {};
            variables.forEach(varName => {
                newInputs[varName] = '';
            });
            setDynamicInputs(newInputs);
            setInputValues(newInputs);
        }
    }, [selectedOption]);

    return (
        <div className="bcktst-form">
            {/* 드롭다운 선택기 */}
            <select
                value={selectedOption}
                onChange={handleDropdownChange}
                className="form-dropdown"
            >
                <option value="">선택하세요</option>
                {strList.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>

            {/* 날짜 입력 영역 */}
            <div className="date-section">
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="date-input"
                />
                <span>~</span>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    min={startDate}
                    className="date-input"
                />
                {!validateDates() && (
                    <p className="error-message">종료일은 시작일 이후여야 합니다</p>
                )}
            </div>

            {/* 동적 입력 필드 생성 */}
            <div className="dynamic-inputs">
                {Object.keys(dynamicInputs).map((fieldName, index) => (
                    <div key={index} className="input-group">
                        <label>{fieldName}:</label>
                        <input
                            type="text"
                            value={inputValues[fieldName] || ''}
                            onChange={(e) => handleInputChange(fieldName, e.target.value)}
                            className="dynamic-input"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BcktstInptForm;
