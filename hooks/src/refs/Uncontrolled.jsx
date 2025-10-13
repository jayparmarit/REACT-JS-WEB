import React,{useRef} from "react";

const Uncontrolled = () => {

    const inputRef = useRef(null);

    const handleClick = () => {
        alert(inputRef.current.value);
    }

    return (
        <>
            <input type="text" placeholder="name" ref={inputRef} />
            <br />
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default Uncontrolled;    