import React from "react";

class MyButton extends React.Component {
    //클래스 필드 문법
    constructor(props) {
        super(props);

        this.state = {isToggleOn: true}
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={() => this.handleClick()}>
                {this.state.isToggleon ? "켜짐" : "꺼짐"}
            </button>
        );
    }
}

export default MyButton