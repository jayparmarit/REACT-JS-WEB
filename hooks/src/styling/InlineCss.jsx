import React from 'react'

const InlineCSS = () => {
  return (

    <form style={{
      display: "flex", 
      flexDirection: "column", 
      gap: "30px",
      height: "300px",
      width: "300px",
      padding: "50px",
      // background: "linear-gradient(to right, #83a4d4, #b6fbff)",
      borderRadius: "10px",
      // boxshadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      // background: "#2A7B9B",
      background: "linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(37, 179, 96, 1) 44%, rgba(237, 221, 83, 1) 100%)",
    }}>
      <input type="email" placeholder="enter your email" 
       style={{
            height: "50px",
            border: "none",
            borderRadius: "10px",
            textAlign: "center",
          }}/>
      <input type="password" placeholder="enter your password" 
       style={{
            height: "50px",
            border: "none",
            borderRadius: "10px",
            textAlign: "center",
          }}/>
      <button
       style={{
            height: "50px",
            border: "none",
            borderRadius: "10px",
            textAlign: "center",
          }}>Login</button>
    </form>

  )
}

export default InlineCSS