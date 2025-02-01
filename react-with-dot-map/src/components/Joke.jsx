
export default function Joke(props)
{
    return (
        <>
        <div>
            <h3>Setup:</h3>
            <p>{props.setup}</p>
        </div>
        <div>
            <h3>Punchline</h3>
            <p>{props.punchline}</p>
        </div>
        </>
    )
}