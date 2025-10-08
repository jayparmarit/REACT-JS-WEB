import { useEffect, useState } from "react";

const lifeCycle = () => {

    const [count,setCount] = useState(0);

    const [input,setInput] = useState("");


    useEffect(()=>{
        console.log("this is a lifecyle")

        return() => {
            console.log("this is will unmount")
        };
    },[count]);

    return (
        <>
            {count}
            <br />
            <button onClick={()=>setCount((count)=>count+1)}>Add</button>
            <br />
            <br />
            <input type="text" value={input}  onChange={(e)=>setInput(e.target.value)}/>
            <br />
            {input}
        </>
    )
}

export default lifeCycle;