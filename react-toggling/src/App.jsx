import './App.css'
import React from "react"


function App() {

  const [isGoingOut, setIsGoingOut] = React.useState(false)

  function changeMind()
  {
    setIsGoingOut(prev => !prev)
  }

  return (
    <main>
      <h1 className='title' >Do I feel like going out tonight?</h1>
      {/* <button onClick={() => setIsGoingOut(!isGoingOut)} className='value' >{isGoingOut ? "Yes" : "No"}</button> */}
      <button 
        onClick={changeMind} 
        className='value' 
        aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
      >{isGoingOut ? "Yes" : "No"}</button>
    </main>
  )
}

export default App
