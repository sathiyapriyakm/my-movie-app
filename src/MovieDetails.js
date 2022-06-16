import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const movie = movieList[id];
  const navigate = useNavigate();
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };
  return <div className="movie-detail-container">
    <iframe
      width="100%"
      height="650"
      src={movie.trailer}
      title="Youtube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
    <div className="movie-detail-container">
      <div className="movie-specs">
        <h2 className="movie-name">{movie.name}</h2>
        <p style={styles} className="movie-rating">
          ⭐{movie.rating}</p>
      </div>
      <p className="movie-summary">{movie.summary}</p>
      <Button variant="contained" startIcon={<ArrowBackIosIcon />}onClick={() => navigate(-1)}>
  BACK
</Button>
     
    </div>
  </div>;


}
