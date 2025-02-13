import React from "react"


export default function Pad(props)
{
    // const [on, setOn] = React.useState(props.on)


    return (
        <button 
            key={props.id} 
            style={{backgroundColor: props.color}} 
            className={ props.on ? "on" : ""}
            onClick={() => props.toggle(props.id)}
        ></button>
    )
}