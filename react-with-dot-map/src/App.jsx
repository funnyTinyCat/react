import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Joke from "/src/components/Joke"
import jokesData from './jokesData'

function App() {

  console.log(jokesData)

  const jokeElements = jokesData.map((joke) => {
    return <Joke 
      setup={joke.setup}
      punchline={joke.punchline} 
    />
  })

  // const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]
  const ninjaTurtles = [<h2>Donatello</h2>, <h2>Michaelangelo</h2>, <h2>Rafael</h2>, <h2>Leonardo</h2>]
  return (
    <main>
      {jokeElements}
    </main>
  )
}

export default App
