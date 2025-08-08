
import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: '', currency: '' };
  }

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  }

  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const rate = 80; // Euro conversion rate
    const result = parseInt(this.state.amount) * rate;
    alert(`Converting to ${this.state.currency} Amount is ${result}`);
  }

  render() {
    return (
      <div>
        <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Amount: </label>
          <input type="text" value={this.state.amount} onChange={this.handleAmountChange} /><br /><br />
          <label>Currency: </label>
          <textarea value={this.state.currency} onChange={this.handleCurrencyChange}></textarea><br /><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
