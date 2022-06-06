import { useState } from "react";

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="counter-container">
      <button className="like-button" onClick={() => setLike(like + 1)}>👍<span>{like}</span></button>
      <button className="dislike-button" onClick={() => setDislike(dislike + 1)}>👎<span>{dislike}</span></button>
      {/* <p>{like}</p> */}
    </div>
  );
}
