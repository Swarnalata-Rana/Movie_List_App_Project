"use client"
import FormsComponent from '@/app/FormsComponent';
import React, { useState } from 'react'
const New_movie = () => {
    
//     const [isFormVisible,setIsFormVisible]=useState(false);
//     const handleButttonClick=()=>{
//         setIsFormVisible(prevState => ! prevState);

  return (
    <>
        <div className='new_movie_main'>
            <div className='row9'></div>
            <div className='row10' ></div>
            <div className='row11'>
                <div className='add_movie'>Add A New Movie</div>
                <p className='movie_p'>To add a movie you have to fill a form. The added movie will appear in the list above</p>
            </div>
            {/* <div className='new_movie'>
                <button className='movie_plus' onClick={handleButttonClick}>New Movie +</button>
                {isFormVisible && <FormsComponent/>}
            </div>  */}
            {/* <div className='row14'></div>
            <div className='row15'></div>
            <div className='row16'></div>
            <div className='row17'></div> */}
        </div>   
    </>
    )
}
export default New_movie;