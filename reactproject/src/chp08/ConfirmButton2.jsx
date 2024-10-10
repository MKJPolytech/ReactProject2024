import React from "react";
//bind 대신에
class ConfirmButton2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isConfirmed: false
        };
    }

    handleConfirm = () => {
        this.setState((prevState)=>({
            isConfirmed: !prevState.isConfirmed
        }));
    }

    render(){
        return(
            <button onClick={this.handleConfirm} disabled={this.state.isConfirmed}>
                ConfirmButton2
            </button>
        )
    }
}

export default ConfirmButton2