import { useState } from "react";
import Props from "./Props";

const State = () =>{
    const [count, setCount] = useState(5)

    // const handleClick = () => {
    //     setCount ( count + 1 )
    // }
    return(
        <>
            <h1>{count}</h1>
            {/* <button onClick={ () => setCount(count + 1)}>increas</button> */}
            <button onClick={()=> setCount(count + 1)}>increas</button>

            <props greeting={"good afternoon"} count={count}/>
        </>
    )
}

export default State