import cardBackBackground from "../assets/bg-card-back.png"
import { useContext } from "react";
import InfoContext from "../context/InfoContext";

export default function CardBack(){
    const {cvc} = useContext(InfoContext);
    return(
        <div className="card-display__card-back" style={{backgroundImage : `url(${cardBackBackground})`}}>
            <p>
                {cvc}
            </p>
        </div>
    )
}