import { useState } from "react"
import App from "./App";
import ConditionalsIf from "./ConditionalsIf";
import MapExample from "./MapExample";
import ProjectContent from "./ProjectContent";
import SelectNumber from "./SelectNumber";

export default function ConditionalsIfSeveralComponent(){
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
            <SelectNumber selectContent={(value) => `Select ${value}`} maxValue={40} onSelected={setSelectedRate} />

            <div>
                {
                    displayResult()
                }
            </div>
            <div>
                <ProjectContent bottomPart={<><span>Welcome to vision city</span></>}>
                    <>
                        <button>This is a button as a parameter</button>
                    </>
                </ProjectContent>
            </div>
        </>
    )
}