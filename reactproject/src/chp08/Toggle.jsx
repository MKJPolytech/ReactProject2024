import React from "react";

//이벤트 처리 함수에서 상태설정을 위해 사용하는 this를 bind해야만 한다
//bind하지 않으면 this 부분에서 undefined
class Toggle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {isToggleOn: true}

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleon ? "켜짐" : "꺼짐"}
            </button>
        );
    }
}

export default Toggle