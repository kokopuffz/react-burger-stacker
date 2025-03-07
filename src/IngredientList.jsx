import { Component } from "react";
import "./App.css";
import Ingredient from "./Ingredient";

export default function IngredientList({ ingredients, addToBurger }) {
  const ingredientItems = ingredients.map((ingredient, idx) => {
    return (
      <Ingredient
        ingredient={ingredient}
        name={ingredient.name}
        addToBurger={addToBurger}
        key={`key-${idx}`}
      />
    );
  });
  return (
    <section className="ingredients-list">
      <h1>ingredient list</h1>
      {ingredientItems}
    </section>
  );
}

// class IngredientList extends Component {

//   render() {
//     //create a list of burger items
//     const ingredients=this.props.ingredients.map((ingredient, idx) => {
//       return (
//       <Ingredient
//         ingredient={ingredient}
//         name={ingredient.name}
//         addToBurger={this.props.addToBurger}
//         key={`key-${idx}`}
//       />)
//     })
//     return (
//       <section className="ingredients-list">
//         <h1>ingredient list</h1>
//         {ingredients}
//       </section>
//     );
//   }
// }
// export default IngredientList;
