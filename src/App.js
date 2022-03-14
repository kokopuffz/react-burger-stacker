import "./App.css";
import React, { useState } from "react";
import IngredientList from "./IngredientList";
import BurgerPane from "./BurgerPane";
// import Index from "./index";
// import Clear from "./Clear";

const ingredientsList = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
];


export default function App() {
  const [burgerIngredients, setBurgerIngredients] = useState([]);

  const [ingredients, setIngredients] = useState(ingredientsList);

  const clearBurger = () => {
    setBurgerIngredients([]);
  };

  const addToBurger = (ingredient) => {
    // let newBurgerList = burgerIngredients;
    //passed by value passed by reference...pointing to same memory
    setBurgerIngredients([...burgerIngredients, ingredient]);
    // console.log("@APP ADD2BURGER:", newBurgerList)
  };

  console.log("App.render()")

  return (
    <>
      <h1>BurgerStacker</h1>
      <main>
        <IngredientList
          ingredients={ingredients}
          addToBurger={addToBurger}
        />
        <BurgerPane
          burgerIngredients={burgerIngredients}
          clearBurger={clearBurger}
        />
      </main>
    </>
  );
}

// class App extends Component {
//   state = {
//     burgerIngredients: [],
//   };

//   clearBurger = () => {
//     this.setState({burgerIngredients: []})
//   }

//   addToBurger = (ingredient) => {
//     // add the selected ingredient to the burgerIngredients state
//     // this.setState((prevState, props)=>{
//     //   return {burgerIngredients: [...prevState.burgerIngredients, {name, color}]}
//     // })
//     let newBurgerList = this.state.burgerIngredients;
//     newBurgerList.unshift(ingredient);
//     this.setState({ burgerIngredients: newBurgerList });
//   };

//   render() {
//     return (
//       <>
//         <h1>Burgerstacker</h1>
//         <main>
//           <IngredientList
//             ingredients={this.props.ingredientsList}
//             addToBurger={this.addToBurger}
//           />
//           <BurgerPane
//             burgerIngredient={this.state.burgerIngredients}
//             clearBurger={this.clearBurger}
//           />
//         </main>
//       </>
//     );
//   }
// }

// export default App;
