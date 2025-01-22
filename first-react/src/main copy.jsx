import { StrictMode } from 'react'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



const root = createRoot(document.getElementById('root'))
const reactElement = createElement("h3", null, "Hey, Ho...")

const h1 = document.createElement("h1")

h1.textContent = "This is imperative coding"
h1.className = "header"
//document.getElementById("root").appendChild(h1)


function Component01() 
{
  return (<div>test 02</div>)
}

function Component02() 
{
  return (<div>test 03</div>)
}


root.render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
//  createElement("h1", null, "HEllo from createElement!!!"),
//  reactElement,
  <div>
    <Component01 />  
    <Component02 />
    <img src="/src/assets/react.svg" />
  </div>  
)

