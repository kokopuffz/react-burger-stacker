import { Component } from "react";
import Ingredient from "./Ingredient";
import Clear from "./Clear";

class BurgerPane extends Component {
  state = {};
  render() {
    const ingredients = this.props.burgerIngredient.map((layer, idx) => {
      return (
      <Ingredient 
        ingredient={layer}
        name={layer}
        addToBurger={this.props.addToBurger}
        key={`key-${idx}`}
      />)
    },);
    return (
      <section class="burger-pane">
        <h1>burger panel</h1>
        {ingredients}
        <Clear clearBurger={this.props.clearBurger} />
      </section>
    );
  }
}

export default BurgerPane;
