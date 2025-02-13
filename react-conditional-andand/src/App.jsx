import React from 'react'
import './App.css'


function App() {
  const [unreadMessages, setUnreadMessages] = React.useState(["a", "b", "c"])

  return (

    <div>
      {unreadMessages.length > 0 && <h1>You have {unreadMessages.length} unread messages!</h1>}

      {unreadMessages.length === 0 && <p>You have no unread messages!</p>}      
    </div>

  )
}

export default App
