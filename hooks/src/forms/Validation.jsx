import React, { useState } from 'react'

const Validation = () => {

    const [inputData, setInputData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [error, setErrors] = useState({});

    const handleInputData = (field,e) => {
         setInputData ((data)=> {
            return {
                 ...data,
                [field]:e.target.value,
            };
        });
    };

      const validation = () => {

    const newErrors = {};

    if (!inputData.name.trim()) {
      newErrors.name = "name is required";
    }

    if (!inputData.email.includes("@")) {
      newErrors.email = "invalid email format";
    }

    if (inputData.password.length < 6) {
      newErrors.password = "password must contain at least 6 character";
    }

    return newErrors;
  };

const handleSubmit = (e) =>{
    e.preventDefault();

        const validateErrors = validation();

        if(Object.keys(validateErrors).length > 0){
            setErrors(validateErrors);
            return;
        }
        console.log("form submit",inputData)
}

    return (

        <>
        <form onSubmit={handleSubmit} style={{display:"flex",border:"1px solid red",flexDirection:"column",height:"320px",width:"400px",margin:"auto",alignItems:"center",justifyContent:"center",gap:"10px",background:"linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgb(125, 171, 214) 36%, rgb(174, 220, 228) 100%)"}}>
                 <input style={{width:"300px"}} type="text" placeholder="enter your name" value={inputData.name} onChange={(e) => handleInputData("name", e)} />
                 {error.name && <p style={{color:"red"}}>{error.name}</p>}
                 <input style={{width:"300px"}} type="email" placeholder="enter your email" value={inputData.email} onChange={(e) => handleInputData("email",e)} />
                 {error.email && <p style={{color:"red"}}>{error.email}</p>}
                 <input style={{width:"300px"}} type="password" placeholder="enter your password" value={inputData.password} onChange={(e) => handleInputData("password", e)} />
                 {error.password && <p style={{color:"red"}}>{error.password}</p>}

                 <button style={{width:"100px",height:"25px"}} type='submit'>submit</button>
        </form>
        </>

    )
}

export default Validation;