import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const nums = [1,2,3,4,5]
const names = ["alice", "bob", "charlie", "danielle"]
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]


const squares = nums.map(function(num) {
  return num * num
})

const capitalized = names.map((name) =>  {
  return name[0].toUpperCase() + name.slice(1)
})

const paragraphs = pokemon.map(mon => `<p>${mon}</p>`)

console.log(paragraphs)

createRoot(document.getElementById('root')).render(
  // <div>
  //   <div>{squares}</div>
  
  // <div>{capitalized}</div>
  // <div>{paragraphs}</div>
  // </div>
  <>
    <App />
  </>
)
