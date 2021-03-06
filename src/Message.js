import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export function Message({ name, poster, rating, summary ,id, deleteButton,editButton}) {
  const styles = {
    color: rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  // const paraStyle = {
  //   display: show ? "block" : "none",
  // };
  const navigate=useNavigate();
 

  return (<Card className="movie-container" sx={{height:"min-content"}}>
    <img className="movie-poster" src={poster} alt={name} />
    <CardContent>
    <div className="movie-specs">
      <h3 className="movie-name">
        {name}
      <IconButton aria-label="Movie Details" color="primary" onClick={()=>navigate(`/movies/${id}`)}>
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
    </CardContent>
      <CardActions>
      <div className="movie-counter-del">
       <Counter />
     {deleteButton}
     {editButton}
      </div>
      </CardActions>
    </Card>
    );
}
