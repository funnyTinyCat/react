import React from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = React.useState(["a", "b"])

  
  function determineText() {

    if (messages.length === 0) {

      return "You're all caught up!"
    } else if (messages.length === 1) {

      return "You have 1 unread message."
    } else {

      return `You have ${messages.length} unread messages.`
    }
  }


  return (
    <div>
      <h1>{determineText()}</h1>
    </div>
  )
}

export default App
