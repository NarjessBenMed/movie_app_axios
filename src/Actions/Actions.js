import axios from 'axios'


import {
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  SEARCH_MOVIE,
  SEARCH_Rating,
  FETCH_MOVIE,
  

} from "./ActionsType";



export const addMovie = (
  newmovie
) => ({
  type: ADD_MOVIE,
  payload: newmovie
    
  
});


export const deleteMovie = (id) => (
    {
        type: DELETE_MOVIE,
        payload: id

    })


export const editMovie = (id, newMovie) =>({

  type: EDIT_MOVIE,
  payload: { id, newMovie }
    })





    export const searchMovie = movie => ({
      type: SEARCH_MOVIE,
      payload: movie
    });



   export const searchMovieRating = rate=> ({
            type: SEARCH_Rating,
            payload: rate
          });


    
export const fetchMovies=()=> (dispatch)=>
{ 
  axios({ method: 'get', url: 'https://tv-v2.api-fetch.website/movies/1' })
    .then(res => res.data)
    .then(data => {
      dispatch({
        type: FETCH_MOVIE,
        payload: data,
      });
    })






  }
