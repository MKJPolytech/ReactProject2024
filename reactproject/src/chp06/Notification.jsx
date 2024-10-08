import React from "react";
import "./Notification.css";
// const styles = {
//     wrapper:{
//         margin: 8,
//         padding: 8,
//         display: "flex",
//         flexDirection: "row",
//         border: "1px solid grey",
//         borderRadius: 16,
//     },
//     messageText: {
//         color:"magenta",
//         fontSize: 16,
//
//     }
// }Notification.css 외부 꺼 사용

class Notification extends React.Component {
    constructor(props) {
        super(props); //Component 가 생성될 때 props 를 전달받을 수 있는 매개변수를 갖는 생성자가 호출된다.

        this.state = {

        };
    }

componentDidMount() {
        console.log(`${this.props.id}: this.componentMount() called`);
    }

componentDidUpdate(){
        console.log(`${this.props.id}: this.componentDidUpdate() called`);
    }

componentWillUnmount(){
        console.log(`${this.props.id}: this.componentWillUnmount() called`);
    }

    render() {
        return (
            <div className="wrapper">
              <span className="messageText">
                  {this.props.message}
              </span>
            </div>
        );
    }
}

export default Notification;

// render() {
//     return (
//         <div style={styles.wrapper}>
//               <span style={styles.messageText}>
//                   {this.props.message}
//               </span>
//         </div>
//     ); render 과거버전2