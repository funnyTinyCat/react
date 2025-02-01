import React from "react"
import ReactDOM from "react-dom/client"

function App()
{

  function signUp(event) {
    event.preventDefault()
    
    const formData = new FormData(event.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")
    console.log(email + " " + password)

  }

  return (
    <section>
      <h1>Signup Form</h1>
      <form onSubmit={signUp} method="POST" >
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@shomeo.com" />
        <br />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password"  />
        <br />

        <textarea></textarea>
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