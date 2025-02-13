import React from "react"
import ReactDOM from "react-dom/client"

function App()
{

  function signUp(event) {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")
    const employmentStatus = formData.get("employmentStatus")
    const dietaryRestrictions = formData.getAll("dietaryRestrictions")
    const favColor = formData.get("favColor")

    console.log(email + " " + password + " " + employmentStatus + " " + dietaryRestrictions + 
      " " + favColor)

    const data = Object.fromEntries(formData)
    const allData = {
      ...data,
      dietaryRestrictions
    }

    console.log(allData)

  }

  return (
    <section>
      <h1>Signup Form</h1>
      <form onSubmit={signUp} method="POST" >
        <label htmlFor="email">Email:</label>
        <input id="email" defaultValue="joe@schmoe.com" type="email" name="email" placeholder="joe@shomeo.com" />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" defaultValue="password123" type="password" name="password"  />
        <br />

        <label htmlFor="description" >Description:</label>
        <textarea id="description" defaultValue="This is a description" name="description"></textarea>
        <br />

        <fieldset>
          <legend >Employment Status:</legend>
          <label>
            <input type="radio" name="employmentStatus" value="unemployed" />  
            Unemployed
          </label>
          <br />
          <label>
            <input type="radio" name="employmentStatus" value="part-time" />
            Part-time
          </label>
          <br />
          <label>
            <input type="radio" name="employmentStatus" defaultChecked={true} value="full-time" />
            Full-time
          </label>
        </fieldset>
        <br />

        <fieldset>
          <legend>Dietary Restrictions:</legend>
          <label>
            <input type="checkbox" name="dietaryRestrictions"  value="kosher" />
            Kosher
          </label>
          <br />
          <label>
            <input type="checkbox" name="dietaryRestrictions" value="vegan" />
            Vegan
          </label>
          <br />
          <label>
            <input type="checkbox" name="dietaryRestrictions" defaultChecked={true} value="gluten-free" />
            Gluten-free
          </label>
        </fieldset>
        <br />

        <label htmlFor="favColor">What is your favorite color?</label>
        <br />
        <select id="favColor" name="favColor" defaultValue="" required>
          <option value="" disabled>-- Choose a color --</option>          
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
        </select>
        
        <br />
        <br />        
        <br />
        <br />
        {/* <input type="submit" value="Click" /> */}
        <button>Submit</button>
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
)