import { useContext } from "react";
import InfoContext from "../context/InfoContext";

export default function CardBack(){
    const {cvc} = useContext(InfoContext);
    return(
        <div className="card-display__card-back">
            <p>
                {cvc}
            </p>
        </div>
    )
}