import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export function AddMovie({movieList,setMovieList}) {
  const [name, setName] = useState('');
  const [poster, setPoster] = useState('');
  const [rating, setRating] = useState('');
  const [summary, setSummary] = useState('');
  const [trailer, setTrailer] = useState('');
  const handleSubmit = event => {
    setMovieList([...movieList, {"name": name,"poster":poster,"rating":rating,"summary":summary,"trailer":trailer}]);
    event.preventDefault(); //prevent page refresh
    // clear all input values in the form
    setName('');
    setPoster('');
    setRating('');
    setSummary('');
    setTrailer('');
  };
  return <div
      className="add-movie-spec">
      <form  className="add-movie-form" onSubmit={handleSubmit}>
        
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
        {/* <button className="add-movie-btn" type="submit">ADD MOVIE</button> */}
        <Button className="add-movie-btn" variant="contained" type="submit">ADD MOVIE</Button>
      </form> 
    </div>;
}
