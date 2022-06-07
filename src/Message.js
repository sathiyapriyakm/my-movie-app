import { useState } from "react";
import { Counter } from "./Counter";

export function Message({ name, image, rating, description }) {
  const styles = {
    color: rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  // const paraStyle = {
  //   display: show ? "block" : "none",
  // };

  return <div className="movie-container">
    <img className="movie-poster" src={image} alt={name} />
    <div className="movie-specs">
      <h3 className="movie-name">{name}</h3>
      <p style={styles} className="movie-rating">
        ⭐{rating}</p>
    </div>
    <button onClick={() => setShow(!show)}>Toggle Summary</button>
    {/* Conditional styling */}
    {/* <p style={paraStyle} className="movie-summary">{description}</p> */}

    {/*Conditional rendering  */}
    {show ? <p className="movie-summary">{description}</p> : null}
    <Counter />
  </div>;
}
