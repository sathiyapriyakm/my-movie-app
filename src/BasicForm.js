import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema=yup.object({
  email:yup.string()
  .email()
  .min(5)
  .required(),
  password:yup.string()
  .min(8,"Need a bigger password")
  .max(12)
  .required(),
})
export function BasicForm() {
  const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
    initialValues:{email:"anusha",password:""},
    validationSchema:formValidationSchema,
    onSubmit:(values)=>{
      console.log("onSubmit",values);
    },
  })
  return (
    <div style={{height:"60px", width:"200px"}}>
      <h1>Basic Form</h1>
      <form onSubmit={handleSubmit}>
        <input 
        value={values.email} 
        type="email" 
        placeholder="Enter Email"
        name="email"
        onChange={handleChange}
        onBlur={handleBlur}
        >
        {touched.email&&errors.email?errors.email:""}
        </input>
        {errors.email}
        <input 
        value={values.password}
        type="password" 
        placeholder="Enter Password"
        name="password"
        onChange={handleChange}
        >
         </input>
         {touched.password&&errors.password?errors.password:""}
        <button type="submit">Submit</button>
      {JSON.stringify(values)}
      </form>
    </div>
  );
}
