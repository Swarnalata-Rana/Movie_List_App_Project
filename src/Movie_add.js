import React from 'react'
const Movie_add = () => {
  return (
    <>
        <div className='main_div'>
            <div className='row13'>
                <div className='movie_form_main'>
                    <h1 className=''>Fill this form to add</h1>
                    <form>
                        <label>Name of Movie:<br></br>
                            <input type="text" />
                        </label>
                    </form>
                    <form>
                        <label>Year of Release:<br></br>
                            <input type="text" />
                        </label>
                    </form>
                    <form>
                        <label>Movie Duration:<br></br>
                            <input type="text" />Hours
                            <input type="text" />Min
                        </label>
                    </form>
                    <div>
                        <h3>Movie Genre</h3>
                        <h5>Select all that is applicabale</h5>
                        <form>
                            <input type="checkbox" id="Drama" value="Drama"></input>
                            <label for="darma">Drama</label><br></br>
                            <input type="checkbox" id="Biography"></input>
                            <label for="html">Biography</label><br></br>
                            <input type="checkbox" id='Comedy'></input>
                            <label for="html">Comedy</label>
                        </form>
                    </div>
                    <form>
                        <label>Discription:<br></br>
                            <input type="text" />
                        </label>
                    </form>  
                    <div>
                        <div>Upload Image of Movie</div>
                        <div>Upload</div>
                    </div>     
                    <div className='add_movie'>
                        <div className=''>add Movie</div>
                    </div>                            
                </div>
            </div> 
        </div>
    </>
  )
}
export default Movie_add;