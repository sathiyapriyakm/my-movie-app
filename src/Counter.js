import {useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  
  return (
    <div className="counter-p">
       <IconButton aria-label="Like-button" color="primary" onClick={() => setLike(like + 1)}>
       <Badge badgeContent={like} color="primary">👍
       </Badge>
      </IconButton>
      <IconButton aria-label="dislike-button" color="error" onClick={() => setDislike(dislike + 1)}>
       <Badge badgeContent={dislike} color="error">👎
       </Badge>
      </IconButton>
    </div>
  );

}
