import React from "react";
import { useState } from "react";
import {Message} from "./Message";


export function AddMovie() {
  const INITIAL_MOVIE_LIST=[{name:"Ratatouille",
  image:"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
  rating:"8",
  description:"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
  },
  {name:"Baahubali",
  image:"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
  rating:"8",
  description:"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
  },
  {name:"Jai Bhim",
  image:"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
  rating:"8.8",
  description:"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case."
  }];
  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);
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
    className="movie-input">
      <section><div
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
    </div>
    </section>
    <section>
    <div className="movie-list">
    {movieList.map((disp,index)=>(<Message key={index} name={disp.name} image={disp.image} rating={disp.rating} description={disp.description}/>))}  
    </div>
     </section>
  </div>;
}
