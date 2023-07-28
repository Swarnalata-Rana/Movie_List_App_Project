import Movie_add from '@/Movie_add'
import React from 'react'

const New_movie = () => {
  return (
    <>
        <div className='new_movie_main'>
            <div className='row9'></div>
            <div className='row10' ></div>
            <div className='row'>
                <div className='add_movie'>Add A New Movie</div>
                <p className='movie_p'>To add a movie you have to fill a form. The added movie will appear in the list above</p>
            </div>
            <div className='new_movie'>
                <div className='movie_plus'>New Movie +
                {/* <Movie_add/> */}
                </div>
            </div> 
            <div className='row14'></div>
            <div className='row15'></div>
            <div className='row16'></div>
            <div className='row17'></div>
        </div>   
    </>
    )
}
export default New_movie