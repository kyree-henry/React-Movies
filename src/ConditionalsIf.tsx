import { useState } from "react"
import App from "./App";

export default function ConditionalsIf(){
    const [selectedRate, setSelectedRate] = useState(1);
    function displayResult(){
        if (selectedRate === 1){
            return <span>Nooo!</span>
        }else if (selectedRate === 2){
            return <>
                <span>Please tell us how to get better: </span>
                <input type="text" />
            </>
        }else if (selectedRate === 3){
            return <App />
        }else {
            return <span>Thanks!</span>
        }
    }
    return (
        <>
            <h1>Conditionals if example</h1>
            
            <div>Rate this website</div>
            <select onChange={(e) => {
                setSelectedRate(parseInt(e.currentTarget.value, 10));
            }}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>

            <div>
                {
                    displayResult()
                }
            </div>
        </>
    )
}