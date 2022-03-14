import "./App";
// console.log("@INGREDIENT: PROP:", prop);

export default function Ingredient({ name, addToBurger }) {
  return (
    <div
      className="ingredient"
      onClick={() => {
        addToBurger(name);
      }}
    >
      <header>
        <p>{name}</p>
      </header>
    </div>
  );
}

// class Ingredient extends Component {

//   render() {
//     return (
//       <div
//         className="ingredient"
//         onClick={() => {this.props.addToBurger(this.props.name)}}>
//         <header>

//         <p>{this.props.name}</p>
//         </header>
//       </div>
//     );
//   }
// }

// export default Ingredient;
