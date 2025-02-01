import React from "react"
import './App.css'

function App() {

  const [myFavoriteThings, setMyFavoriteThings] = React.useState([])
  // const allFavoriteThings = ["", "", "", "", "", "", "", "", ""]
  const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁", 
    "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]

  const thingsElements = myFavoriteThings.map(thing => <p key={thing}> {thing}</p>)

  // function addFavoriteThing() {
  //   setMyFavoriteThings(prevFavThings => [...prevFavThings, "Test"])
  // }
  function addFavoriteThing() {
    setMyFavoriteThings(prevFavThings => 
      [
        ...prevFavThings, 
        allFavoriteThings[prevFavThings.length]
      ]
    )
  }

  return (
    <main>
      <button onClick={addFavoriteThing} >Add Item</button>
      <section aria-live="polite" >
        {thingsElements}
      </section>
    </main>
  )
}

export default App
