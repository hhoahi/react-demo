import { Component } from "react";
class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }
  //Khi được gọi, phương thức counter sẽ thực hiện việc cập nhật state của component
  //bằng cách sử dụng phương thức setState()
  // increment() => {
  increment() {
    console.log(this);
    this.setState({
      counter: this.state.counter + 1,
    });
  }
  render() {
    return (
      <div>
        <h3>Count value is: {this.state.counter}</h3>
        <button onClick={this.increment}>Increment</button>

        {/* phương thức bình thường đơn giản */}
        {/* <button onClick={() => this.increment()}></button> */}
      </div>
    );
  }
}

export default Counter;
