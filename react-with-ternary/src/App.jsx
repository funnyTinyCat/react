
import './App.css'

function App() {

  const isGoingOut = true

  // const answer = (isGoingOut === true) ? "Yes" : "No"

  // if (isGoingOut === true) {
  //   answer = "Yes"
  // } else {
  //   answer = "No"
  // }


  return (
    <main>
      <h1>Do I feel like going out tonight?</h1>
      <button className='value' >{isGoingOut ? "Yes" : "No"}</button>
    </main>
  )
}

export default App
