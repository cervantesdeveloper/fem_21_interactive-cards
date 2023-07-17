import thanksImage from "../assets/icon-complete.svg";

import { useContext } from "react";
import InfoContext from "../context/InfoContext";

export default function Form(){
    const {
        handleCardNumber, 
        handleName, 
        handleMonth, 
        handleYear, 
        handleCvc,
        handleValidation,
        handleSubmit,
        sent
    } = useContext(InfoContext);

    return(
        <form className="form" onSubmit={handleSubmit} noValidate>
        
            <div className="input-wrapper">
                <label htmlFor="name">CARDHOLDER NAME</label>
                <div className="input-wrapper__inputs">
                    <input 
                        pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="e.g. Jane Appleseed"
                        onChange={handleName}
                        onBlur={handleValidation}
                        data-validation="empty"
                    />
                </div>
                <p className="alert hidden" >{`Can't be blank`}</p>
            </div>

            <div className="input-wrapper">
                <label htmlFor="number">CARD NUMBER</label>
                <div className="input-wrapper__inputs">
                    <input 
                        pattern="\d{16}"
                        type="text" 
                        name="number" 
                        id="number" 
                        placeholder="e.g. 1234 5678 9123 0000"
                        inputMode="numeric"
                        maxLength="16"
                        onChange={handleCardNumber}
                        onBlur={handleValidation}
                        data-validation="empty"
                    />
                </div>
                
                <p className="alert hidden" >{`Can't be blank`}</p>
            </div>

            <div className="input-wrapper">
                <label htmlFor="date">{`EXP. DATE (MM/YY)`}</label>
                <div className="input-wrapper__inputs">
                    <input 
                        pattern="^(01|02|03|04|05|06|07|08|09|10|11|12)$"
                        type="text" 
                        name="month" 
                        id="date" 
                        placeholder="MM"
                        inputMode="numeric"
                        maxLength="2"
                        max={12}
                        onChange={handleMonth}
                        onBlur={handleValidation}
                        data-validation="empty"
                    />
                    <input 
                        pattern="\d{2}"
                        type="text" 
                        inputMode="numeric"
                        name="year" 
                        placeholder="YY"
                        maxLength="2"
                        max={2}
                        onChange={handleYear}
                        onBlur={handleValidation}
                        data-validation="empty"
                    />
                </div>
                <p className="alert hidden" >{`Can't be blank`}</p>
            </div>

            <div className="input-wrapper">
                <label htmlFor="cvc">CVC</label>
                <div className="input-wrapper__inputs">
                    <input 
                        pattern="\d{3}"
                        type="text" 
                        name="cvc" 
                        id="cvc" 
                        placeholder="e.g 123"
                        inputMode="numeric"
                        maxLength="3"
                        onChange={handleCvc}
                        onBlur={handleValidation}
                        data-validation="empty"
                    />
                </div>
                
                <p className="alert hidden">{`Can't be blank`}</p>
            </div>

            {
                sent && 
                <div className="thanks">
                    <img src={thanksImage} alt="Than you" />
                    <h1>THANK YOU!</h1>
                    <p>We've added your card details</p>
                </div>
            }

            

            <input type="submit" value={sent ? "Continue" : "Confirm"} />
        </form>
    )
}