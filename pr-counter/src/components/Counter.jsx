import React, { useState } from 'react'

 const Counter = () => {
    const [counter, SetCounter] = useState(0)
    const [input, SetInput] = useState(0)

    const handleInput = (e) => {
        SetInput(Number(e.target.value))
    }

  return (
    <>
        <div className='border w-25 mx-auto p-2 m-5 bg-dark text-white rounded-1'>
            <h1 className=''>counter App</h1>
            <input type="number" value={input} onChange={handleInput} className='mt-4 mb-2'/>

           <h1>{counter}</h1>

           <button onClick={() => SetCounter(counter-input)} className="btn bg-secondary-subtle mx-3 pe-5 ps-5">
              - 
            </button>&nbsp;

           <button onClick={() => SetCounter(counter+input)} className="btn bg-secondary-subtle mx-3 pe-5 ps-5">
              + 
            </button>&nbsp;

           <button onClick={() => SetCounter(0)} className="btn bg-secondary mx-3 pe-5 ps-5">
               Reset
            </button>
        </div>
    </>
  )
}
 export default Counter;
