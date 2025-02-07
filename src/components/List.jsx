import React from 'react';
import Button from './Button';

const List = ({ jsonData, showActivateButton, onItemClick }) => {
    // 데이터가 배열이 아니면 에러를 던짐
    if (!Array.isArray(jsonData)) {
        throw new Error('Invalid data type. Data must be a JSON array.');
    }

    // 헤더를 추출하기 위해 첫 번째 객체의 키를 사용
    const headers = Object.keys(jsonData[0]);

    // 임시 onClick 함수 (activate 버튼용)
    // const tempOnClick = () => {
    //     console.log('Activate button clicked');
    // };

    return (
        <table>
            <thead>
            <tr>
                {headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
                {showActivateButton && <th>Activate</th>}
            </tr>
            </thead>
            <tbody>
            {jsonData.map((row, rowIndex) => (
                <tr key={rowIndex} onClick={() => onItemClick && onItemClick(row)}>
                    {headers.map((header, columnIndex) => (
                        <td key={columnIndex}>{row[header]}</td>
                    ))}
                    {showActivateButton && (
                        <td>
                            <Button text="activate" onClick={onItemClick} />
                        </td>
                    )}
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default List;
