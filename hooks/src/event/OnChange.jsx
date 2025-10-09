import React, { useState } from "react";

const OnChange  = () => {

    const [input, setInput] = useState("")

    return (
        <>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>

            <h1>{input}</h1>
        </>
    )
}

    export default OnChange;