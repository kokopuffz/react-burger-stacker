import { Component } from "react";
import Ingredient from "./Ingredient";
import Clear from "./Clear";
import BurgerIngredient from "./BurgerIngredient";

export default function BurgerPane({burgerIngredients, addToBurger,clearBurger}) {
  const ingredients = burgerIngredients.map((layer, idx) => {
    console.log("@BURGEPANE ingredients:", layer)
    return (
      <BurgerIngredient 
        ingredient={layer}
        key={`key-${idx}`}
      />
    )
  })

  return (
    <section className="burger-pane">
      <h1>burger boopanel</h1>
      {ingredients}
      <Clear clearBurger={clearBurger} />
    </section>
  )
}


// class BurgerPane extends Component {
//   state = {};
//   render() {
//     const ingredients = this.props.burgerIngredient.map((layer, idx) => {
//       return (
//       <Ingredient 
//         ingredient={layer}
//         name={layer}
//         addToBurger={this.props.addToBurger}
//         key={`key-${idx}`}
//       />)
//     },);
//     return (
//       <section class="burger-pane">
//         <h1>burger panel</h1>
//         {ingredients}
//         <Clear clearBurger={this.props.clearBurger} />
//       </section>
//     );
//   }
// }

// export default BurgerPane;
