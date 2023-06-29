import { Component } from "react";
class ClassEvent extends Component {
  handleClick() {
    console.log("Class based event handling");
  }

  render() {
    return (
      <div>
        This is a Class based components
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default ClassEvent;
