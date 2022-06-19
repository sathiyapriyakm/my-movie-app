import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


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

  function EditForm({movie}){

  const navigate = useNavigate();

    const [name, setName] = useState(movie.name);
    const [poster, setPoster] = useState(movie.poster);
    const [rating, setRating] = useState(movie.rating);
    const [summary, setSummary] = useState(movie.summary);
    const [trailer, setTrailer] = useState(movie.trailer);
  
    const updatedMovie={"name": name,"poster":poster,"rating":rating,"summary":summary,"trailer":trailer};
    const editMovie =() => {
      fetch(`https://62aa7f0d371180affbd633f8.mockapi.io/movies/${movie.id}`,
      {
        method:"PUT",
        body: JSON.stringify(updatedMovie),
        headers:{"Content-Type":"application/json"},
    }).then(()=>{navigate("/Movies")}).catch((e)=>console.log("ERROR"));
    //  navigate("/Movies");
    };
  
  return <div
      className="add-movie-spec">
      <form  className="add-movie-form" >
        
        <TextField
        className="add-movie-name"
        label="Name"
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
        />
        <TextField
        className="add-movie-name"
        label="Poster"
        type="text"
        value={poster}
        onChange={event => setPoster(event.target.value)}
        />
       <TextField
       className="add-movie-name"
       label="Rating"
       type="text"
       value={rating}
       onChange={event => setRating(event.target.value)}
       />
       <TextField
          className="add-movie-name"
          label="Summary"
          type="text"
          value={summary}
          onChange={event => setSummary(event.target.value)}
        />
       <TextField
          className="add-movie-name"
          label="Trailer"
          type="text"
          value={trailer}
          onChange={event => setTrailer(event.target.value)}
        />
        <Button className="add-movie-btn" onClick={editMovie} variant="contained" type="submit" color="success">SAVE</Button>
      </form> b
    </div>;
}
