//import logo from "./logo.svg";
import "./App.css";
import { AddColor } from "./AddColor";
import React from "react";
import { AddMovie } from "./AddMovie";
import { useState } from "react";
import { Routes,Route ,Navigate, useNavigate} from "react-router-dom";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { Movie } from "./Movie";
import { MovieDetails } from "./MovieDetails";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import {TicTacToe} from "./TicTacToe";
import {EditMovie} from "./EditMovie";
import { BasicForm } from "./BasicForm";

function App() {

  
   const navigate=useNavigate();
   const [mode,setMode]=useState("dark")
   
const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper elevation={4} style={{minHeight:"100vh",borderRadius:"0px"}} >
    <div className="App">
    <AppBar position="static">
    <Toolbar>
      <Button color="inherit" onClick={()=>navigate("/")}>Home</Button>
      <Button color="inherit" onClick={()=>navigate("/movies")}>Movies</Button>
      <Button color="inherit" onClick={()=>navigate("/movies/add")}>Add Movies</Button>
      <Button color="inherit" onClick={()=>navigate("/color-game")}>Color Game</Button>
      <Button color="inherit" onClick={()=>navigate("/Tic-tac-toe-game")}>TicTacToe Game</Button>
      <Button 
      style={{marginLeft:"auto"}}
      startIcon={mode==="dark"?<Brightness7Icon/>:<Brightness4Icon/>}
      color="inherit" 
      onClick={()=>{setMode(mode==="light"?"dark":"light")}}>
      {mode==="light"?"dark":"light"}theme</Button>    
    </Toolbar>
    </AppBar>
    <section className="routes-container">
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails />}/>
        <Route path="/color-game" element={<AddColor/>}/>
        <Route path="/Tic-tac-toe-game" element={<TicTacToe/>}/>
        <Route path="/movies" element={<Movie/>}/>
        <Route path="/movies/add" element={<AddMovie />}/>
        <Route path="/movies/edit/:id" element={<EditMovie/>}/>
        <Route path="/404" element={<NotFound/>}/>
        <Route path="/films" element={<Navigate replace to="/movies"/>}/>
        <Route path="/*" element={<Navigate replace to="/404"/>}/>
        <Route path="/basic-form" element={<BasicForm/>}/>
      </Routes>
    </section>     
    </div>
    </Paper>
    </ThemeProvider>
  );
}

 export default App;

