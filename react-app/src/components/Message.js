import { Component } from "react";

//Class components in React
class Message extends Component {
  //đối với class phải sử dụng render() để khai báo
  render() {
    return <h1>This is a Class Components</h1>;
  }
}

//export tương tự như gọi function
export default Message;
