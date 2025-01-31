import "./LoginForm.css"

const LoginForm = ({id, setId, password, setPassword}) => {
    return (
        <>
            <div className="input-group">
                <label htmlFor="id">ID</label>
                <input
                    id="id"
                    className="input-field"
                    placeholder="아이디 입력"
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </div>
            <div className="input-group">
                <label htmlFor="password">PW</label>
                <input
                    id="password"
                    className="input-field"
                    placeholder="비밀번호 입력"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </>
    )
}

export default LoginForm