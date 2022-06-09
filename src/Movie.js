import React from "react";
import { Message } from "./Message";

export function Movie({ movieList }) {
  return <div className="movie-list">
    {movieList.map((disp, index) => (<Message key={index} name={disp.name} poster={disp.poster} rating={disp.rating} summary={disp.summary} id={index} />))}
  </div>;
}
