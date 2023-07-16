"use client"
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import Movie_add from "@/Movie_add";
import React, { useState } from 'react';
import {movie_datas} from "./data.js";
import Movie_row from "./Movie_row";
import Counter from "./Counter";


const Page = () => {
const [movies, setMovies] = useState(movie_datas)
const handleDeleteBtn = (movieId) => {
    const updatedMovies = movies.filter(movie => movie.id !== movieId);
    setMovies(updatedMovies);
  };


const [count, setCount] = useState([]);
const handleLike=(moviesId)=>{
  setCount((prevMovies)=>
    prevMovies.map((runu)=>
      runu.id === moviesId ?{...runu,likes:runu.likes + 1}  :runu
    )
  )
}
const handleDislike=(moviesId)=>{
  setCount((prevMovies)=>
    prevMovies.map((runu)=>
      runu .id ===moviesId ? {...runu,dislikes:runu.dislikes} :runu
    )
  )

}

// const increment = (id) => {
//     const newcount={...count}
//       setCount();
//     };
// const decrement = (id) => {
// const newcount={...count}
//     setCount();
//     }
//   };


  return (
    <div>
        <Header/>
            {movies.map(movie => (
                <Movie_row
                    title={movie.title}
                    desc={movie.desc}
                    image={movie.img}
                    year={movie.year}
                    vote={movie.count}
                    onDelete={() => handleDeleteBtn(movie.id)}
                />
                
            ))}
            
            {/* {runu.map((hlo)=>
              Likes={hlo.likes}
            )} */}

           
        <Movie_add/>
        <Footer/>
    </div>  
  );
};
export default Page;

 
