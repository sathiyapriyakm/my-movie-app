import { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export function TicTacToe(){
    return(
        <div>
            <h2>Welcome to the Game</h2>
           <Board/> 
        </div>
    );

}
export function Board(){
    const INITIAL_BOARD=[
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
    ];
    const [board,setBoard]=useState(INITIAL_BOARD);
    const [isXTurn,setisXTurn]=useState(true);
    const decideWinner=(board)=>{
        const lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let i=0;i<lines.length;i++){
        const [a,b,c]=lines[i];
        if((board[a]!==null)&&(board[a]===board[b])&&(board[b]===board[c]))
        {
            return board[a];   
        }
        }
        return null;
    }
    const winner=decideWinner(board);
    const handleClick=(index)=>{
        //Allow updating only if there is no winner and box is untouched.
        if(!board[index]&&(!winner)){
        
        const boardCopy=[...board];
        boardCopy[index]=isXTurn?"X":"O";
        setBoard(boardCopy);
        //changing turn
        setisXTurn(!isXTurn);
    }
    }
    const restart=()=>{
        setBoard(INITIAL_BOARD);
        setisXTurn(true);
    }
    const { width, height } = useWindowSize();
    return(
        <div>
           { winner?<Confetti width={width} height={height} gravity={0.02}/>:null}
        <div className="board">
         { board.map((val,index)=>(<GameBox key={index} val={val} onPlayerClick={()=>handleClick(index)}/>))} 
        </div>
        {winner?<h2>Winnier is: {winner}</h2>:null}
         <button onClick={restart}>Restart</button>
        </div>
    );
}
// const [val,setVal]=useState("");
export function GameBox({val,onPlayerClick}){
    // const [val,setVal]=useState("");
    const styles={color:val==="X"?"green":"red"}
    return(
        <div style={styles} 
        onClick={onPlayerClick} 
        className="game-box">{val}</div>
    );

}