import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";


export function EditMovie() {
  const { id } = useParams();
  const [movie,setMovie]=useState(null);
  const getMovie=()=>{
    fetch(`https://62aa7f0d371180affbd633f8.mockapi.io/movies/${id}`,{
      method:"GET",
    }
    )
    .then((data)=>(data.json()))
    .then((mv)=>setMovie(mv));
    }   
  useEffect(()=>getMovie(),[]);

  return (movie?<EditForm movie={movie}/>:"Loading...");
  }
  const movieValidationSchema=yup.object({
    name:yup.string().required("why not fill this name?"),
    poster:yup.string().required("why not fill this poster?").min(5,"Need a bigger poster"),
    rating:yup.number().required("why not fill this rating?").min(1,"Need a better rating").max(10,"Too much rating"),
    summary:yup.string().required("why not fill this summary?").min(20,"Need a bigger summary"),
    trailer:yup.string().required("why not fill this trailer?").min(5,"Need a bigger trailer"),
  })
  

  function EditForm({movie}){

  const navigate = useNavigate();

    // const [name, setName] = useState(movie.name);
    // const [poster, setPoster] = useState(movie.poster);
    // const [rating, setRating] = useState(movie.rating);
    // const [summary, setSummary] = useState(movie.summary);
    // const [trailer, setTrailer] = useState(movie.trailer);
  
    // const updatedMovie={"name": name,"poster":poster,"rating":rating,"summary":summary,"trailer":trailer};
    const editMovie =(updatedMovie) => {
      fetch(`https://62aa7f0d371180affbd633f8.mockapi.io/movies/${movie.id}`,
      {
        method:"PUT",
        body: JSON.stringify(updatedMovie),
        headers:{"Content-Type":"application/json"},
    }).then(()=>{navigate("/Movies")}).catch((e)=>console.log("ERROR"));
    //  navigate("/Movies");
    };

    const {handleBlur,handleChange,handleSubmit,values,errors,touched}=useFormik({
      initialValues:{
        name:movie.name,
        poster:movie.poster,
        rating:movie.rating,
        summary:movie.summary,
        trailer:movie.trailer,
      },
      validationSchema:movieValidationSchema ,
      onSubmit:(updatedMovie)=>{
        console.log("onSubmit",updatedMovie);
        editMovie(updatedMovie);
      },
    });
  
  return <div
      className="add-movie-spec">
      <form  
      onSubmit={handleSubmit}
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
        variant="contained">SAVE</Button>
      </form> 
    </div>;
}
