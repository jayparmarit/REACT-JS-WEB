// conditional example - 1 

import React, { useState } from 'react'

const Conditional = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)


  return (
    <>
        <h1>
            {isLoggedIn ? "welcome" : "click to login"}
        </h1>

        <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "logout" : "login"}
        </button>
    </>
   
  )
}

export default Conditional;