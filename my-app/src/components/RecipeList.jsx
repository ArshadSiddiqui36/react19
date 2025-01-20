import { recipes } from "./recipe-data";

export default function RecipeList() {
  const cardStyles = {
    border: "1px solid #f1f1f1",
    borderRadius: "8px",
    padding: "0 20px",
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    textAlign: "left",
  };

  const headingStyle = {
    display: "block",
    width: "100%",
    textAlign: "center",
    border: "1px solid #2c2c2c",
    background: "#1f1f1f",
    borderRadius: "8px 8px 0 0",
    margin: "20px 0 0 0",
    paddingBottom: "10px",
  };

  const fragmentStyle = {
    display: "block", width: "100%"
  };
  const subHeadingStyle = {
    background: "#1f1f1f", padding: "0 10px"
  };
  const listStyle = {
    textTransform: "capitalize"
  };

  return (
    <div style={cardStyles}>
      <h1 style={headingStyle}>Recipes</h1>
      {recipes.length ? recipes.map((recipe) => (
        <fragment key={recipe.id} style={fragmentStyle}>
          <h2 style={subHeadingStyle}>
            {recipe.name}
          </h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient} style={listStyle}>{ingredient}</li>
            ))}
          </ul>
        </fragment>
      )) : <h2>Recipes list is empty 🙁.</h2>}
    </div>
  );
}
