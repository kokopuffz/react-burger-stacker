import { Component } from "react";
import "./App";

class BurgerPane extends Component {
  render() {
    return <button onClick={this.props.clearBurger} className="clearbutton">clear button</button>;
  }
}

export default BurgerPane;
