import React from 'react'
const FormsComponent = () => {
  return (
    <>
        <div className='main_div'>
            <div className='row13'>
                <div className='movie_form_main'>
                    <div className='moive_rwo1'></div>
                    <div className='movie_row2'>
                        <h1 className='movie_form'>Fill this form to add</h1>
                        <form className='form1'>
                            <label className='movie_name'>Name of Movie:<br></br>
                                <input type="text" />
                            </label>
                        </form>
                        <form className='form2'>
                            <label className="movie_release">Year of Release:<br></br>
                                <input type="text" />
                            </label>
                        </form>
                        <form className='form3'>
                            <label className='movie_duration' >Movie Duration:<br></br>
                                <input type="text" />Hours
                                <input type="text" />Min
                            </label>
                        </form>
                        <div>
                            <h3 className='movie_genre'>Movie Genre</h3>
                            <h5 className='movie_applicabale'>Select all that is applicabale</h5>
                            <form className='form4'>
                                <input type="checkbox" id="Drama" value="Drama"></input>
                                <label for="darma">Drama</label><br></br>
                                <input type="checkbox" id="Biography"></input>
                                <label for="html">Biography</label><br></br>
                                <input type="checkbox" id='Comedy'></input>
                                <label for="html">Romance</label><br></br>
                                <input type="checkbox" id="Drama" value="Drama"></input>
                                <label for="darma">Comedy</label><br></br>
                                <input type="checkbox" id="Biography"></input>
                                <label for="html">Adventure</label><br></br>
                                <input type="checkbox" id='Comedy'></input>
                                <label for="html">Fimily</label><br></br>
                                <input type="checkbox" id='Comedy'></input>
                                <label for="html">Documentary</label>
                            </form>
                        </div>
                        <form className='form5'>
                            <label className='movie_discription'>Discription:<br></br>
                                <input className='discription_box' type="text" />
                            </label>
                        </form>  
                        <div>
                            <div className='Image_uplord'>Upload Image of Movie</div>
                            <button className='uplord'>Upload</button>
                        </div>     
                        <div className='add_movie2'>
                            <div className=''>add Movie</div>
                        </div>       
                    </div>                    
                </div>
            </div> 
        </div>
    </>
  )
}
export default FormsComponent;