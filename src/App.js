import React from "react";
import Cash from "../src/components/Cash.js";
import "../src/App.css";
import plflag from "../src/svg/pl.svg";
import euroflag from "../src/svg/eu.png";
import usaflag from "../src/svg/usa.svg";
import gbflag from "../src/svg/gb.svg";

const flags = [
  {
    name: euroflag,
    alt: "europe flag",
    class: "flag"
  },
  {
    name: usaflag,
    alt: "usa flag",
    class: "flag"
  },
  {
    name: gbflag,
    alt: "gb flag",
    class: "flag"
  }
];

class App extends React.Component {
  intervalId = 0;

  state = {
    amount: "",
    currencies: []
  };

  componentDidMount() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.updateData.bind(this), 15000);
    this.updateData.bind(this)();
  }

  async updateData() {
    const buffer = await fetch(
      "https://api.exchangeratesapi.io/latest?symbols=EUR,USD,GBP&base=PLN"
    );
    const json = await buffer.json();
    this.setState({
      currencies: Object.entries(json.rates).map((entry, index) => {
        return { title: entry[0], ratio: entry[1], id: index };
      })
    });
  }

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };

  render() {
    const { amount, currencies } = this.state;
    return (
      <div className="container">
        <div className="header">
          <p className="logo">
            Exchanger <i className="fas fa-comments-dollar"></i>
          </p>
          <img className="pl-flag" src={plflag} alt="poland flag" />
          <p className="pln">PLN</p>
          <input
            className="input"
            type="number"
            pattern="\d*"
            value={amount}
            onChange={this.handleChange}
          />
        </div>
        <div className="cta-container">
          {currencies.map(currency => (
            <div className="currency" key={currency.id}>
              <img
                src={flags[currency.id].name}
                alt={flags[currency.id].alt}
                className={flags[currency.id].class}
              />
              <Cash
                ratio={currency.ratio}
                title={currency.title}
                cash={amount}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default App;
