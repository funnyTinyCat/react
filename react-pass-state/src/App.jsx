import React from 'react'
import Header from './Header'
import Body from './Body'
import './App.css'

function App() {

  const [userName, setUserName] = React.useState("Joe")

  return (
    <main>
      <Header userName={userName} />
      <Body userName={userName} />
    </main>
  )
}

export default App
