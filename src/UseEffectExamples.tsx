import { useEffect, useState } from "react"

export default function UseEffectExamples(){

    const [clicks, setClickes] = useState(0);

    useEffect(() => {
        //Executed immediatly
        console.log("Component loaded");

        return () => {
            // Run before the the compenent is destroyed
            console.log("the component will be destroyed")
        }
    }, []);

    useEffect(() => {
        document.title = `${clicks} times`;
    }, [clicks]);
    return (
        <>
            <h1>UseEffect Examples</h1>
            <div>
                <button onClick={() => setClickes(clicks + 1)}>You have clicked {clicks} times</button>
            </div>
        </>
    )
}