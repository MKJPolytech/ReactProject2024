import React, {useState} from "react";

function NameForm() {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(`입력한 이름: ${name}`); //1옆의 `이고 L옆의 ' 아님
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                성명:
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default NameForm;