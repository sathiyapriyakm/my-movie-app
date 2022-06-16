import { useState } from "react";
import { Counter } from "./Counter";
import { useNavigate } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

// import DeleteIcon from '@mui/icons-material/Delete';

export function Message({ name, poster, rating, summary ,id,movieList,setMovieList}) {
  const styles = {
    color: rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  // const paraStyle = {
  //   display: show ? "block" : "none",
  // };
  const navigate=useNavigate();
 const handleDelete=(deletionId)=>{
    // const removeElemWithIdAndValue = (arr = [], targetId, targetValue) => {
    //   const index = arr.findIndex(({ id, value }) => id === targetId && value === targetValue);
    //   if(index >= 0) arr.splice(index, 1);
    // }
    
    // const arr = [ {id: 145, value: '$ 1.024.100'}, {id: 146, value: '$ 679.200'}, {id: 147, value: '$ 679.200'} ];
    // removeElemWithIdAndValue(arr, 1461, '$ 679.200');
    // console.log(arr);
     const copyMovie=movieList.filter((mv)=>(mv.id !== deletionId));
    setMovieList(copyMovie);
    
  }

  return <Card className="movie-container" sx={{height:"min-content"}}>
    <img className="movie-poster" src={poster} alt={name} />
    <CardContent>
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
    </CardContent>
      <CardActions>
    <Counter />
    <IconButton aria-label="Movie-delete-button" color="primary" onClick={()=>handleDelete(id)}>
        <DeleteIcon />
      </IconButton>
      </CardActions>
    </Card>;
}
