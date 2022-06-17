import React from "react";
import { Message } from "./Message";
import {useState,useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export function Movie() {

  const [movieList, setMovieList] = useState([]);
  const getMovies=()=>{
  fetch("https://62aa7f0d371180affbd633f8.mockapi.io/movies",{
    method:"GET",
  }
  )
  .then((data)=>(data.json()))
  .then((mvs)=>setMovieList(mvs));
  }   
  useEffect(()=>getMovies(),[]);
  const handleDelete=(deletionId)=>{
    fetch(`https://62aa7f0d371180affbd633f8.mockapi.io/movies/${deletionId}`,{
    method:"DELETE",
  }).then(()=>getMovies());
  }
  
  return <div className="movie-list">
    {movieList.map((disp, index) => (<Message 
    key={disp.id} 
    name={disp.name} 
    poster={disp.poster} 
    rating={disp.rating} 
    summary={disp.summary} 
    id={disp.id} 
    movieList={movieList} 
    setMovieList={setMovieList}
    deleteButton={<IconButton 
    aria-label="Movie-delete-button" 
    color="error" 
    onClick={()=>handleDelete(disp.id)}>
    <DeleteIcon />
  </IconButton>}
      />))}
  </div>;
}
  