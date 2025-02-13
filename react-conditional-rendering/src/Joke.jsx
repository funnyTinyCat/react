
import React from "react"


export default function Joke(props)
{
    const [isShown, setIsShown] = React.useState(false)


    function toggleShown() {
        setIsShown(prevShown => !prevShown )
    }

    console.log(isShown)

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown === true && <p >{props.punchline}</p>}
            {/* {isShown ? <p >{props.punchline}</p> : null} */}
            <button onClick={ toggleShown } >{isShown ? "Hide" : "Show" } Punchline</button>
            {/* {isShown && <button onClick={ toggleShown } >Hide Punchline</button>} */}
            <hr />
        </div>
    )
}