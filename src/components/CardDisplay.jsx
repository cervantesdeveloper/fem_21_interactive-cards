import CardBack from "./CardBack"
import CardFront from "./CardFront"

export default function CardDisplay(){
    return(
        <div className="card-display">
            <CardFront />
            <CardBack />
        </div>
    )
}