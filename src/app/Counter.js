"use client"
import React from 'react';
import { useState } from 'react'  
const Counter = () => {
//     const [count, setCount] = useState(0);
//     const increment = () => {
//         setCount(count + 1);
//     };
//     const decrement = () => {
//         if (count > 0){
//             setCount(count - 1);
//         }
//         else{
//             setCount(0); 
//         }
//   };
  return (
      <div>
            <button className='like' onClick={handleLike}>
                <img src="Like_icon.png"/>
            </button> 
                <span className='count'>{count}</span>       
            <button className='diclike' onClick={handleDislike}>        
                <img src="Diclike_icon.png"/>
            </button>
      </div>
  )
}
export default Counter;




// import React from 'react'

// const Counter = () => {
//     return (
//         <div>
//           <button onClick={sortMoviesByLikes}>Sort by Likes</button>
//           <button onClick={sortMoviesByDislikes}>Sort by Dislikes</button>
//           {movies.map((movie) => (
//             <div key={movie.id}>
//               <h3>{movie.title}</h3>
//               <p>Likes: {movie.likes}</p>
//               <p>Dislikes: {movie.dislikes}</p>
//               <button onClick={() => handleLike(movie.id)}>Like</button>
//               <button onClick={() => handleDislike(movie.id)}>Dislike</button>
//             </div>
//           ))}
//         </div>
//       );
// }

// export default Counter
