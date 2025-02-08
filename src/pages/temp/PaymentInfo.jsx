import React, { useEffect, useState } from "react";

const PaymentInfo = () => {
    const [walletAddress, setWalletAddress] = useState("");
    const [qrCodeBase64, setQrCodeBase64] = useState("");
    const [error, setError] = useState("");

    // API 호출
    useEffect(() => {
        const fetchPaymentInfo = async () => {
            try {
                // 백엔드 API 호출 (http:// 스키마 추가)
                const response = await fetch("http://localhost:8080/api/payment/info");
                console.log(response);
                if (!response.ok) {
                    throw new Error("API 요청 실패");
                }
                const data = await response.json();
                setWalletAddress(data.walletAddress);
                setQrCodeBase64(data.qrCodeBase64);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchPaymentInfo();
    }, []);

    if (error) {
        return <div>에러 발생: {error}</div>;
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>암호화폐 결제 정보</h1>
            {walletAddress && (
                <div>
                    <p>
                        <strong>지갑 주소:</strong> {walletAddress}
                    </p>
                    {qrCodeBase64 && (
                        <img
                            src={`data:image/png;base64,${qrCodeBase64}`}
                            alt="QR Code"
                            style={{ marginTop: "20px", width: "200px", height: "200px" }}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default PaymentInfo;
