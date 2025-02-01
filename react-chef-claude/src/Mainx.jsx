import React from "react"

export default function Mainx()
{
    const [ingredients, setIngredients] = React.useState([]) // ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient} >{ingredient}</li>
    ))

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
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}