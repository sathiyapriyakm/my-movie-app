import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";


export function AddMovie() {
  
  const navigate=useNavigate();
  
  const movieValidationSchema=yup.object({
    name:yup.string().required("why not fill this name?"),
    poster:yup.string().required("why not fill this poster?").min(5,"Need a bigger poster"),
    rating:yup.number().required("why not fill this rating?").min(1,"Need a better rating").max(10,"Too much rating"),
    summary:yup.string().required("why not fill this summary?").min(20,"Need a bigger summary"),
    trailer:yup.string().required("why not fill this trailer?").min(5,"Need a bigger trailer"),
  })
  
  const addMovie =(newMovie) => {
    fetch("https://62aa7f0d371180affbd633f8.mockapi.io/movies", {
    method: "POST",
    body: JSON.stringify(newMovie),
    headers: {
      "Content-Type" : "application/json",
    },
  }).then(() => navigate("/Movies"));
  };
  
  const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
    initialValues:{
      name:"",
      poster:"",
      rating:"",
      summary:"",
      trailer:"",
    },
    validationSchema:movieValidationSchema ,
    onSubmit:(newMovie)=>{
      console.log("onSubmit",newMovie);
      addMovie(newMovie);
    },
  });
  
  return <div
      className="add-movie-spec">
      <form onSubmit={handleSubmit}
      className="add-movie-form" >
        
        <TextField
        className="add-movie-name"
        label="Name"
        type="text" 
        value={values.name} 
        name="name"
        onChange={handleChange}
        onBlur={handleBlur}
        />
         {touched.name&&errors.name?errors.name:""}
        <TextField
        className="add-movie-name"
        label="Poster"
        type="text"
        value={values.poster} 
        name="poster"
        onChange={handleChange}
        onBlur={handleBlur}
        />
         {touched.poster&&errors.poster?errors.poster:""}
       <TextField
       className="add-movie-name"
       label="Rating"
       type="text"
       value={values.rating} 
       name="rating"
       onChange={handleChange}
       onBlur={handleBlur}
       />
        {touched.rating&&errors.rating?errors.rating:""}
       <TextField
          className="add-movie-name"
          label="Summary"
          type="text"
          value={values.summary} 
          name="summary"
          onChange={handleChange}
           onBlur={handleBlur}
        />
         {touched.summary&&errors.summary?errors.summary:""}
       <TextField
          className="add-movie-name"
          label="Trailer"
          type="text"
          value={values.trailer} 
          name="trailer"
          onChange={handleChange}
          onBlur={handleBlur}
        />
         {touched.trailer&&errors.trailer?errors.trailer:""}
        <Button className="add-movie-btn" 
        type="submit"
        variant="contained">ADD MOVIE</Button>
      </form> 
    </div>;
}
