import React from "react";
import { useState } from "react";

export function AddMovie({movieList,setMovieList}) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const handleSubmit = event => {
    setMovieList([...movieList, {"name": name,"image":image,"rating":rating,"description":description}]);
    event.preventDefault(); //prevent page refresh
    // clear all input values in the form
    setName('');
    setImage('');
    setRating('');
    setDescription('');
  };
  return <div
      className="add-movie-spec">
      <form  className="add-movie-form" onSubmit={handleSubmit}>
        <input
         className="add-movie-name"
          placeholder="Name" value={name}
          onChange={event => setName(event.target.value)}
        />
        <input
          className="add-movie-name"
          placeholder="Poster" value={image}
          onChange={event => setImage(event.target.value)}
        />
        <input
        className="add-movie-name"
        placeholder="Rating" value={rating}
        onChange={event => setRating(event.target.value)}
       />
       <input
         className="add-movie-name"
         placeholder="Summary" value={description}
         onChange={event => setDescription(event.target.value)}
       />

        <button className="add-movie-btn" type="submit">ADD MOVIE</button>
      </form> 
    </div>;
}
