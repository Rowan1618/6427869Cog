
import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  sayHello() {
    alert("Hello! Member1");
  }

  sayWelcome(msg) {
    alert(msg);
  }

  handleClick(e) {
    alert("I was clicked");
  }

  render() {
    return (
      <div style={{ margin: "20px" }}>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={() => this.sayWelcome("welcome")}>Say welcome</button>
        <button onClick={this.handleClick}>Click on me</button>
        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
