import React from "react";
import * as Yup from "yup"
import { Field, Form, Formik } from "formik"
import  FormError  from "./FormError";  

const FormikForm = () => {

    const validationShema = Yup.object ({

        name:Yup.string().min(2,"name must be at least 2 character").max(50,"name can't be exceed more thaan 50 character"),
        email:Yup.string().email("invalid email").required("email is required"),
        pincode:Yup.string().min(6,"pincode must be 6 character").max(7,"pincode can't exceed more than 7 character"),
        password:Yup.string().min(6,"password must contain at least 6 character").max(10,"password can't exceed more than 10 character").required("password is required")

    });

    return (
    <>
        <Formik initialValues={{
                name:"",
                email:"",
                pincode:"",
                password:"",  
        }}validationSchema={validationShema}
        onSubmit={(values,{ resetform })=>{
            console.log("form data",values);
            resetform();
        }}
        >
            <Form style={{display:"flex", flexDirection:"column", height:"550px", width:"400px", gap:"30px", margin:"auto",background:"linear-gradient(90deg,rgba(42, 123, 155, 1) 0%, rgba(37, 179, 96, 1) 44%, rgba(237, 221, 83, 1) 100%)",paddingTop:"10px",alignItems:"center"}} >
                <label htmlFor="name">name</label>
                <Field name="name" type="text"/>
                <FormError name="name"/>
               
                <label htmlFor="email">email</label>
            
                <Field name="email" type="email"/>
                <FormError name="email"/>
              
                <label htmlFor="pincode">pincode</label>
           
                <Field name="pincode" type="number"/>
                 <FormError name="pincode"/>
              
                <label htmlFor="password">password</label>
         
                <Field name="password" type="password"/>
                 <FormError name="password" />
              
                 <button  style={{
                                padding:"15px",
                                border: "none",
                                borderRadius: "10px",
                                textAlign: "center",
          }} type="submit">submit</button>
            </Form>
        </Formik>
    </>
   );
};

export default FormikForm;