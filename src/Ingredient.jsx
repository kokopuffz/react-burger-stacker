import { Component } from "react";
import "./App";
// console.log("@INGREDIENT: PROP:", prop);
class Ingredient extends Component {
  
  render() {
    return (
      <div 
        className="ingredient" 
        onClick={() => {this.props.addToBurger(this.props.name)}}>
        <header>

        <p>{this.props.name}</p>
        </header>
      </div>
    );
  }
}

export default Ingredient;