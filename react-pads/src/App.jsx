import React from "react"
import padsData from './pads'
import './App.css'
import Pad from "./Pad"

function App() {

  const [pads, setPads] = React.useState(padsData)

  function toggle(id) {

    setPads(prevPads => prevPads.map(
      item => {
        return item.id === id ? {...item, on: !item.on} : item
      }
    ))
  }

  const buttonElements = pads.map(pad => (
    <Pad toggle={toggle} id={pad.id} key={pad.id} color={pad.color} on={pad.on} />
  ))

  return (
    <main>
      <div className='pad-container' >
        {buttonElements}
      </div>
      {/* <button className="all-off" onClick={turnAllPadsOff} >Turn All Off</button> */}
    </main>
  )
}

export default App
