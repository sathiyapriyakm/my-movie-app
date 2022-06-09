import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// import DeleteIcon from '@mui/icons-material/Delete';

export function Message({ name, poster, rating, summary ,id}) {
  const styles = {
    color: rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  // const paraStyle = {
  //   display: show ? "block" : "none",
  // };
  const navigate=useNavigate();

  return <div className="movie-container">
    <img className="movie-poster" src={poster} alt={name} />
    <div className="movie-specs">
      <h3 className="movie-name">
        {name}
      <IconButton aria-label="Movie Details" color="primary" onClick={()=>navigate(`/Movies/${id}`)}>
        <InfoIcon />
      </IconButton> 
      <IconButton aria-label="Movie Details" color="primary" onClick={() => setShow(!show)}>
        {show?<ExpandLessIcon/>:<ExpandMoreIcon/>}
      </IconButton>
      </h3> 
      <p style={styles} className="movie-rating">
        ⭐{rating}</p>
    </div>
    {/* Conditional styling */}
    {/* <p style={paraStyle} className="movie-summary">{summary}</p> */}

    {/*Conditional rendering  */}
    {show ? <p className="movie-summary">{summary}</p> : null}
    <Counter />
  </div>;
}
