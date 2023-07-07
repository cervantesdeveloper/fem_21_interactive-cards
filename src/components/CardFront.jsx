import bankLogo from "../assets/card-logo.svg";

export default function CardFront(){
    return(
        <div className="card-display__card-front">
            <img src={bankLogo} alt="logo of bank" />
            <p>
                <span>0000</span>
                <span>0000</span> 
                <span>0000</span> 
                <span>0000</span>
            </p>
            <div className="card-display__footer">
                <p>Felicia Leire</p>
                <p>09/26</p>
            </div>
        </div>
    )
    
}