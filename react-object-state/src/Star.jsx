import starEmpty from "/src/images/star-empty.png"
import starFilled from "/src/images/star-filled.png"

export default function Star(props) {

    let starIcon = props.isFilled ? starFilled : starEmpty

    return (
        <button
            onClick={props.handleClick}
            aria-pressed={props.isFilled}
            aria-label={props.isFilled ? "Remove from favorites" : "Add to  favorites"}
            className="favorite-button"           
        >
            <img 
                src={starIcon}
                // src=""
                alt={props.isFilled ? "filled star icon" : "empty star icon"}
                className="favorite"            
            />
      </button>
    )
}