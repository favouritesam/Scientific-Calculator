import React, {Component} from 'react';
import './scientificCalculator.css'

class ScientificCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayValue: "0",
      expression: "",
    };
  }

  handleNumberClick = (number) => {
    const { displayValue } = this.state;
    let newDisplayValue = displayValue === "0" ? "" : displayValue;
    newDisplayValue += number;
    this.setState({ displayValue: newDisplayValue });
  };

  handleDecimalClick = () => {
    const { displayValue } = this.state;
    if (!displayValue.includes(".")) {
      this.setState({ displayValue: displayValue + "." });
    }
  };

  handleOperatorClick = (operator) => {
    const { displayValue, expression } = this.state;
    this.setState({
      expression: expression + displayValue + operator,
      displayValue: "0",
    });
  };

  handleEqualsClick = () => {
    const { expression, displayValue } = this.state;
    const newExpression = expression + displayValue;
    const result = eval(newExpression);
    this.setState({ displayValue: result.toString(), expression: "" });
  };

  handleClearClick = () => {
    this.setState({ displayValue: "0", expression: "" });
  };

  handleDeleteClick = () => {
    const { displayValue } = this.state;
    if (displayValue.length > 1) {
      this.setState({ displayValue: displayValue.slice(0, -1) });
    } else {
      this.setState({ displayValue: "0" });
    }
  };

  handleFunctionClick = (func) => {
    const { displayValue } = this.state;
    let result;
    switch (func) {
      case "sqrt":
        result = Math.sqrt(parseFloat(displayValue));
        break;
      case "sin":
        result = Math.sin(parseFloat(displayValue));
        break;
      case "cos":
        result = Math.cos(parseFloat(displayValue));
        break;
      case "tan":
        result = Math.tan(parseFloat(displayValue));
        break;
      default:
        result = "";
        break;
    }
    this.setState({ displayValue: result.toString() });
  };

  render() {
    const { displayValue } = this.state;

    return (
      <div className="calculator">
        <div className="display">{displayValue}</div>
        <div className="buttons">
          <div className="row">
            <button id='a' onClick={() => this.handleFunctionClick("sqrt")}>C</button>
            <button id='b' onClick={() => this.handleFunctionClick("sin")}>sin</button>
            <button id='c' onClick={() => this.handleFunctionClick("cos")}>cos</button>
            <button id='d' onClick={() => this.handleFunctionClick("tan")}>tan</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick("7")}>7</button>
            <button onClick={() => this.handleNumberClick("8")}>8</button>
            <button onClick={() => this.handleNumberClick("9")}>9</button>
            <button id='e' onClick={() => this.handleOperatorClick("/")}>÷</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick("4")}>4</button>
            <button onClick={() => this.handleNumberClick("5")}>5</button>
            <button onClick={() => this.handleNumberClick("6")}>6</button>
            <button id='f' onClick={() => this.handleOperatorClick("*")}>×</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick("1")}>1</button>
            <button onClick={() => this.handleNumberClick("2")}>2</button>
            <button onClick={() => this.handleNumberClick("3")}>3</button>
            <button id='g' onClick={() => this.handleOperatorClick("-")}>-</button>
          </div>
          <div className="row">
            <button onClick={() => this.handleNumberClick("0")}>0</button>
            <button onClick={this.handleDecimalClick}>.</button>
            <button onClick={this.handleEqualsClick}>=</button>
            <button id='f' onClick={() => this.handleOperatorClick("+")}>+</button>
          </div>
          <div className="row">
            <button onClick={this.handleClearClick}>√</button>
            <button id='g' onClick={this.handleDeleteClick}>DEL</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ScientificCalculator;