import React, {useState} from "react";
import "./SignUp.css";//CSS import

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("남자");
    const [interests, setInterests] = useState("");


const handleSubmit = (event) => {
    alert(`
        입력한 이름: ${name} 
        이메일: ${email}
        선택한 성별: ${gender}
        선택한 관심: ${interests}
        `);
}

const handleChange = (event) => {
    const {target} = event;
    switch (target.id) {
        case "name":
            setName(target.value.toUpperCase());
            break;
        case "email":
            setEmail(target.value);
            break;
        case "password":
            setPassword(target.value);
            break;
        case "gender":
            setGender(target.value);
            break;
        case "interests":
            setInterests(target.value);
            break;
    }
}

    return(
        <div className="signup-container">
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <label>
                    이름:
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    이메일:
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    비밀번호:
                    <input
                        id="password"
                        type="text"
                        value={password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    성별:
                    <select id="gender" value={gender} onChange={handleChange}>
                    <option value="남자">남자</option>
                    <option value="남자">여자</option>
                    <option value="남자">기타</option>
                    </select>
                </label>
                <label>
                    관심사:
                    <textarea
                        id="interests"
                        value={interests}
                        onChange={handleChange}
                        placeholder={"관심사를 입력하세요"}
                    />
                </label>

                <button type="submit">제출</button>
            </form>
        </div>
    );
}
export default SignUp;