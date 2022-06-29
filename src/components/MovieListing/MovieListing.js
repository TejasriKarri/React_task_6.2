import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.css"
const MovieListing=()=>{
    const movies=useSelector(getAllMovies)
    console.log("list")
    console.log(movies.data)
    let renderMovies="";
    renderMovies=movies.limit > 0 &&
    movies.data.map(movie => (
      
      <MovieCard key={movie.id} {...movie} />
    
      ))
    return(
        <div className='movie-container'>
            {renderMovies}
        </div>
    )
}

export default MovieListing;