import React from 'react'
import { movie_datas} from './data'
import Movie_row from './Movie_row'
import DeleteComponent from './DeleteComponent'
const Movie_data = () => {
  return (
    <div>
        {/* {movie_datas.map(item=>(
            <>
                <Movie_row item={item} key={item.id}/>
                <DeleteComponent onclick={props.onDelete}/>
            </>
        ))} */}
    </div>
  )
}
export default Movie_data;


