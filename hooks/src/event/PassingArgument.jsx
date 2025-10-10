
// import { useState } from "react";

//  const PassingArgument = () => {
//     const handleClick = (e) => {
//         alert(`hii ${e}`)
//     }
//   return (
//     <button onClick={()=>handleClick("bapa sitaram")}>click</button>
//   )
// }

// export default PassingArgument;


// example-2


// const PassingArgument = () => {

//     const [input,setInput] = useState("")

//     const handleClick = () => {
//         alert(`hii ${input}`)
//     }

//     return (
//         <>
//             <input type="text" value={input} placeholder="enter your name" onChange={(e) => setInput(e.target.value)}/> &nbsp;
//             <button onClick={handleClick}>click</button>
//         </>

//     )
// }

// export default PassingArgument;

// example-3

const PassingArgument = ({name}) => {
    const handleClick = (name) => {
        alert(`hii ${name}`)
    }

    return (
        <button onClick={() => handleClick(name)}>click</button>
    )
}

export default PassingArgument;