import React from "react";
import { Message } from "./Message";
import {useState,useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import { API } from "./global";


export function Movie() {

  const [movieList, setMovieList] = useState([]);
  const navigate=useNavigate();
  const getMovies=()=>{
  fetch(`${API}/movies`,{
    method:"GET",
  }
  )
  .then((data)=>(data.json()))
  .then((mvs)=>setMovieList(mvs));
  }   
  useEffect(()=>getMovies(),[]);
  const handleDelete=(deletionId)=>{
    fetch(`${API}/movies/${deletionId}`,{
    method:"DELETE",
  }).then(()=>getMovies());
  }
  
  return <div className="movie-list">
    {movieList.map((disp, index) => (<Message 
    key={disp._id} 
    name={disp.name} 
    poster={disp.poster} 
    rating={disp.rating} 
    summary={disp.summary} 
    id={disp._id} 
    movieList={movieList} 
    setMovieList={setMovieList}
    deleteButton={<IconButton 
      style={{marginLeft:"auto"}}
    aria-label="Movie-delete-button" 
    color="error" 
    onClick={()=>handleDelete(disp._id)}>
    <DeleteIcon />
  </IconButton>}
  editButton={<IconButton 
    aria-label="Movie-edit-button" 
    color="secondary" 
    onClick={()=>navigate(`/Movies/edit/${disp._id}`)}>
    <EditIcon />
  </IconButton>}
      />))}
  </div>;
}
  