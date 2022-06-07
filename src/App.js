//import logo from "./logo.svg";
import "./App.css";
import { AddColor } from "./AddColor";
import React from "react";
import { AddMovie } from "./AddMovie";
import { useState } from "react";
import { Routes,Route,Link ,Navigate} from "react-router-dom";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { Movie } from "./Movie";


function App() {
  const INITIAL_MOVIE_LIST=[{name:"Ratatouille",
                image:"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
                rating:"8",
                description:"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him."
                },
                {name:"Baahubali",
                image:"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
                rating:"8",
                description:"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy."
                },
                {name:"Jai Bhim",
                image:"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
                rating:"8.8",
                description:"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case."
                },
                {name:"King Kong",
                image:"https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
                rating:"9",
                description:"Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor."
                },
               {name:"RRR",
               image:"https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
               rating:"8.8",
               description:"RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
               },
              {name:"Iron man 2",
              image:"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
              rating:"7",
              description:"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
              },
              {name:"Interstellar",
              image:"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
              rating:"8.6",
              description:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
              },
              {name:"M.S. Dhoni: The Untold Story",
              image:"https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
              rating:"7.9",
              description:"M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams."
              },]
  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);        
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/color-game">Color Game</Link>
          </li><li>
            <Link to="/Movies/add">Add Movie</Link>
          </li>
          <li>
            <Link to="/Movies">Movies</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/color-game" element={<AddColor/>}/>
        <Route path="/Movies" element={<Movie movieList={movieList} />}/>
        <Route path="/Movies/add" element={<AddMovie movieList={movieList} setMovieList={setMovieList}/>}/>
        <Route path="/404" element={<NotFound/>}/>
        <Route path="/films" element={<Navigate replace to="/movies"/>}/>
        <Route path="/*" element={<Navigate replace to="/404"/>}/>
      </Routes>
      {/* <div className="movie-list"> */}
    {/* {movies.map((disp)=>(<Message name={disp.name} image={disp.image} rating={disp.rating} description={disp.description}/>))} */}
    {/* <AddColor/> */}
    {/* <AddMovie/> */}

    {/* </div> */}
    </div>
  );
}

 export default App;