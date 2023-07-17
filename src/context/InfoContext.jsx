import { createContext, useState} from "react";

const InfoContext = createContext();

const initialCardNumber = "0000000000000000";
const initialName = "Felicia Leire";
const initialMonth = "09";
const initialYear = "26";
const initialCvc = "000"

const InfoProvider = ({children})=>{
    const [cardNumber, setCardNumber] = useState(initialCardNumber);
    const [name, setName] =  useState(initialName);
    const [month, setMonth] = useState(initialMonth);
    const [year, setYear] = useState(initialYear);
    const [cvc, setCvc] = useState(initialCvc);
    const [sent, setSent] =  useState(false);

    const handleCardNumber = e =>{
        setCardNumber(e.target.value);
        if (e.target.value == ""){
            setCardNumber(initialCardNumber);
        }
    };

    const handleName = e =>{
        setName(e.target.value);
        if (e.target.value == ""){
            setName(initialName)
        }
    }

    const handleMonth = e =>{
        setMonth(e.target.value);
        if (e.target.value == ""){
            setMonth(initialMonth)
        }
    }

    const handleYear = e =>{
        setYear(e.target.value);
        if (e.target.value == ""){
            setYear(initialYear)
        }
    }

    const handleCvc = e =>{
        setCvc(e.target.value);
        if (e.target.value == ""){
            setCvc(initialCvc)
        }
    }

    const handleValidation = e=>{
        let input = e.target,
            sibling = input.parentNode.nextSibling;
        let pattern =  e.target.pattern;
        let regExp = new RegExp(pattern);
        if (input.value.trim() == ""){
            input.setAttribute("data-validation", "empty")
            sibling.innerHTML = "Can't be blank";
        } else if(!regExp.exec(input.value)){
            input.setAttribute("data-validation", "invalid")
            sibling.innerHTML = `Wrong format, ${input.inputMode == "numeric" ? "numbers" : "letters"} only`;
        } else {
            input.setAttribute("data-validation", "valid")
            sibling.innerHTML = "";
            input.classList.remove("wrong");
        }
    }

    const handleSubmit = e=>{
        e.preventDefault();
        let inputs = document.querySelectorAll("[data-validation]");
        let errors = 0;
        let form = document.querySelectorAll(".input-wrapper");

        inputs.forEach(input=>{
            if(input.dataset.validation != "valid"){
                errors += 1;
            }
        })

        if(errors > 0){
            inputs.forEach(element => {
                if(element.dataset.validation != "valid"){
                    element.parentNode.nextSibling.classList.remove("hidden");
                    element.classList.add("wrong");
                    
                } else{
                    element.parentNode.nextSibling.classList.add("hidden");
                }
            });
        } else{
            setSent(true);
            form.forEach(input =>{
                input.classList.add("hidden")
            });
        }

        if(sent){
            setSent(false);
            form.forEach(input =>{
                input.classList.remove("hidden")
                document.querySelector("form").reset();
                setCardNumber(initialCardNumber)
                setCvc(initialCvc)
                setMonth(initialCvc)
                setName(initialName)
                setYear(initialYear)
            });
        }
    }

    

    const data = {
        cardNumber, 
        handleCardNumber, 
        name, 
        handleName, 
        month, 
        handleMonth, 
        year, 
        handleYear,
        cvc,
        handleCvc,
        handleValidation,
        handleSubmit,
        sent
    };

    return(
        <InfoContext.Provider value={data}>
            {children}
        </InfoContext.Provider>
    )
}
export {InfoProvider};
export default InfoContext;