import axios from 'axios';
import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {addMovies } from '../../features/movies/movieSlice';
import MovieListing from '../MovieListing/MovieListing';
const featuredApi = "https://reactjs-cdp.herokuapp.com/movies";

const Home=()=>{
    const dispatch=useDispatch();
    useEffect(() => {
   const fetchMovies=async()=>{ 
      await axios.get(featuredApi)
      .then(res => {
        dispatch(addMovies(res.data))
      })
  }
  fetchMovies();
}, [dispatch]);
return (
    <div>
        <div className='banner-img'>
            <MovieListing/>
        </div>
    </div>
)
};
export default Home;