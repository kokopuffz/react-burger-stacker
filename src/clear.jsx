import { Component } from "react";
import "./App";

class Clear extends Component {
  state = {};
  render() {
    return <button onClick={this.props.clearBurger}>startover</button>;
  }
}

export default Clear;
