import React from "react"


export default function App()
{
  let important = "Yes"

  const [isImportant, setIsImportant] = React.useState("No")
  
  // setIsImportant("Yes")

  function handleClick() {
    setIsImportant("Yes")
  }
  
  return (

    <main>
      <h1 className="title" >Is state important to know?</h1>
      <button onClick={handleClick} className="value" >{isImportant}</button>
    </main>
  )
}