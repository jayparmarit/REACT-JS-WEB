import React from "react";

import "./External.css";

const External = () => {
  return (
    <form>
         <h1>Login form</h1>
      <input className="input" type="email" placeholder="enter your email" />

      <input
        className="input"
        type="password"
        placeholder="enter your password"
      />

      <button>Login</button>
    </form>
  );
};

export default External;