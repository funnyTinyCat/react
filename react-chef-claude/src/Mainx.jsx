import React from "react"
import IngredientsList from "./components/IngredientsList.jsx"
import ClaudeRecipe from "./components/ClaudeRecipe"

export default function Mainx()
{
    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )
    // React.useState([]) // ["Chicken", "Oregano", "Tomatoes"]
    const [recipeShown, setRecipeShown] = React.useState(false)


    function addIngredient(event) {
        event.preventDefault()
        console.log("Form submitted!")

        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        // console.log(newIngredient)
        // ingredients.push(newIngredient)
        // console.log(ingredients)¨
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        // form.reset
    }

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }


    return (
        <main>
            <form onSubmit={addIngredient} className="add-ingredient-form">
                <input 
                    type="text" 
                    aria-label="Add Ingredient" 
                    placeholder="e.g. Oregano"
                    name="ingredient"
                />
                <button  >Add Ingredient</button>
            </form>
            { ingredients.length > 0 && <IngredientsList ingredients={ingredients} toggleRecipeShown={toggleRecipeShown} /> }
            
            { recipeShown && <ClaudeRecipe /> }
        </main>
    )
}