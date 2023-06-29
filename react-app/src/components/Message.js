import { Component } from "react";

//Class components in React
class Message extends Component {
  //đối với class phải sử dụng render() để khai báo
  render() {
    // props sử dụng this khi gọi class
    return <h1>Message: {this.props.messagecontent}</h1>;
  }
}

//export tương tự như gọi function
export default Message;
