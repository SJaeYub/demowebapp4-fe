import React, {useEffect, useState} from "react";
import Button from "./Button.jsx";

const PaymentInfo = ({formData}) => {
    const [walletAddress, setWalletAddress] = useState("");
    const [qrCodeBase64, setQrCodeBase64] = useState("");
    const [error, setError] = useState("");
    const [paymentAmount, setPaymentAmount] = useState(""); // 결제 금액 상태 추가

    useEffect(() => {
        const fetchPaymentInfo = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/payment/info");
                if (!response.ok) throw new Error("API 요청 실패");
                const data = await response.json();
                setWalletAddress(data.walletAddress);
                setQrCodeBase64(data.qrCodeBase64);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPaymentInfo();
    }, []);

    const handleCalculateAmount = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/calculate/amount", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({startDate: formData.startDate, endDate: formData.endDate}),
            });
            if (!response.ok) throw new Error("금액 계산 실패");
            const data = await response.json();
            setPaymentAmount(data.amount); // 리턴받은 금액 설정
        } catch (err) {
            alert(`에러 발생: ${err.message}`);
        }
    };

    const handleSubscribe = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/subscribe", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error("구독 신청 실패");
            alert("구독 신청이 완료되었습니다.");
        } catch (err) {
            alert(`에러 발생: ${err.message}`);
        }
    };

    if (error) return <div>에러 발생: {error}</div>;

    return (
        <div>
            <h1>암호화폐 결제 정보</h1>
            {walletAddress && (
                <>
                    <p><strong>지갑 주소:</strong> {walletAddress}</p>
                    {qrCodeBase64 && (
                        <img
                            src={`data:image/png;base64,${qrCodeBase64}`}
                            alt="QR Code"
                        />
                    )}
                    {/* 결제 금액 및 금액 계산 버튼 */}
                    <div>
                        <label>
                            <strong>결제 금액:</strong>
                            <input
                                type="text"
                                value={paymentAmount || "계산되지 않음"}
                                readOnly
                            />
                        </label>
                        <Button text={"calculate paymentAmount"} onClick={handleCalculateAmount}/>
                    </div>
                    {/* 결제 시 유의사항 */}
                    <div>
                        <strong>결제 시 유의사항:</strong>
                        <textarea
                            value={`1. 결제를 완료한 후에는 환불이 불가능합니다.
2. 정확한 지갑 주소로 송금해야 합니다.
3. 결제가 완료되기까지 최대 10분이 소요될 수 있습니다.`}
                            readOnly
                        />
                    </div>
                    {/* 구독 신청 버튼 */}
                    <Button text={"enter plan"} onClick={handleSubscribe}/>
                </>
            )}
        </div>
    );
};

export default PaymentInfo;
