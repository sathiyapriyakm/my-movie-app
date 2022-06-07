import React from "react";
import { Message } from "./Message";

export function Movie({ movieList }) {
  return <div className="movie-list">
    {movieList.map((disp, index) => (<Message key={index} name={disp.name} image={disp.image} rating={disp.rating} description={disp.description} />))}
  </div>;
}
