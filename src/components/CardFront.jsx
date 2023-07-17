import bankLogo from "../assets/card-logo.svg";

import { useContext } from "react";
import InfoContext from "../context/InfoContext";

export default function CardFront(){
    const {cardNumber, name, month, year} = useContext(InfoContext)

    return(
        <div className="card-display__card-front">
            <img src={bankLogo} alt="logo of bank" />
            <p>
                <span>{cardNumber.substring(0, 4) }</span>
                <span>{cardNumber.substring(4, 8) }</span> 
                <span>{cardNumber.substring(8, 12) }</span> 
                <span>{cardNumber.substring(12, 16) }</span>
            </p>
            <div className="card-display__footer">
                <p>{name}</p>
                <p>{`${month} / ${year}`}</p>
            </div>
        </div>
    )
    
}