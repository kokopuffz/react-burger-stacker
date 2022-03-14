import "./App";
// console.log("@INGREDIENT: PROP:", prop);

export default function BurgerIngredient({ ingredient }) {
  return (
    <div
      className="ingredient"
    >
      <header>
        <p>{ingredient}</p>
      </header>
    </div>
  );
}
