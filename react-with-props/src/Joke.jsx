export default function Joke(props)
{
    console.log(props)

    return (
        <>
            {/* {props.setup && <p className="setup">Setup: {props.setup}</p> } */}
            <p style={{display: props.setup ? "block" : "none"}} className="setup">Setup: {props.setup}</p> 
            <p className="punchline">Punchline: {props.punchline}</p>
            <hr />
        </>
    )
}