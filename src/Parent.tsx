import { useContext } from "react";
import Child from "./Child";
import ValueContext from "./ValueContext";

export default function Parent(){
    const value = useContext(ValueContext)

    return (
        <>
        <h2>Parent component</h2>
        <div>
            The value is {value.toString()}
        </div>
        <br />
        <Child />
        </>
    )
}