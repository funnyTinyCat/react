import ReactDOM from 'react-dom/client'
import './index.css'

function App() {

  function handleClick() {
    console.log("I was clicked!")
  }

  function handleMouseOver() {
    console.log("I was hovered!")
  }

  return (
    <main className='container' >
      <img 
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseOver={handleMouseOver}
      />
      <button onClick={handleClick} >Click Me</button>
    </main>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
