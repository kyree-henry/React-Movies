import React, { useState } from "react";

export default function Events(){
    const [canSee, setCanSee] = useState(false);
    const [text, setText] = useState('');

    function handleCheckboxChanged() {
        setCanSee(!canSee)
    }

    function handleKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
        setText(e.currentTarget.value);
    }

    return (
        <>
            <h1>Events Example</h1>
            <div>
                <input type="checkbox" onChange={handleCheckboxChanged} />
            </div>
            <div>
                <button onClick={() => {
                    alert("boom!!!");
                }}>Click me</button>
            </div>
            <div>
                <input type="text" onKeyUp={(e) => handleKeyUp(e)} />
            </div>
            <div>
                {text}
            </div>

            {
                canSee ?
                    <div>Secret Key: wjoe8932039kjsd990w</div>
                    :
                    <div>Access Denied</div>
            }
        </>
    )
}