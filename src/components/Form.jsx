import thanksImage from "../assets/icon-complete.svg";

export default function Form(){
    return(
        <form className="form">
            <div className="input-wrapper">
                <label htmlFor="name">CARDHOLDER NAME</label>
                <div className="input-wrapper__inputs">
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="e.g. Jane Appleseed"
                        required
                    />
                </div>
                <p className="alert hidden">{`Can't be blank`}</p>
            </div>

            <div className="input-wrapper">
                <label htmlFor="number">CARD NUMBER</label>
                <div className="input-wrapper__inputs">
                    <input 
                        type="number" 
                        name="number" 
                        id="number" 
                        placeholder="e.g. 1234 5678 9123 0000"
                    />
                </div>
                
                
                <p className="alert hidden">{`Can't be blank`}</p>
            </div>

            <div className="input-wrapper">
                <label htmlFor="date">{`EXP. DATE (MM/YY)`}</label>
                <div className="input-wrapper__inputs">
                    <input 
                        type="number" 
                        name="month" 
                        id="date" 
                        placeholder="MM"
                        required
                    />
                    <input 
                        type="number" 
                        name="year" 
                        placeholder="YY"
                        required
                    />
                </div>
                <p className="alert hidden">{`Can't be blank`}</p>
            </div>

            <div className="input-wrapper">
                <label htmlFor="cvc">CVC</label>
                <div className="input-wrapper__inputs">
                    <input 
                        type="number" 
                        name="cvc" 
                        id="cvc" 
                        placeholder="e.g 123"
                    />
                </div>
                
                
                <p className="alert hidden">{`Can't be blank`}</p>
            </div>

            {/* <div className="thanks">
                <img src={thanksImage} alt="Than you" />
                <h1>THANK YOU!</h1>
                <p>We've added your card details</p>
            </div> */}

            <input type="submit" value="Confirm" />
        </form>
    )
}