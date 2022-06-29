import React, { useEffect } from "react";
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addMovies } from "../../features/movies/movieSlice";
import { getAllMovies } from "../../features/movies/movieSlice";
import '../MovieDetail/MovieDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import MovieListing from "../MovieListing/MovieListing";
const MovieDetail = () => {
  //  {console.log("hello")}.
  const { id } = useParams()
  //console.log(id.replace(":",""))
  //console.log(id)
  const movies = useSelector(getAllMovies)
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      await axios.get(`https://reactjs-cdp.herokuapp.com/movies/${id.replace(":", "")}`)
        .then(res => {
          //console.log(res.data)
          dispatch(addMovies(res.data))
          //console.log("data")
          //console.log(res.data)
        })

    }
    fetchMovies();

  }, [dispatch]);
  // {dispatch(fetchAsyncMovies())}
  return (
    <>
      <div className="image-contianer1">
        <div className="content-blur1">
          <div className="all">
            <div className="movie">
              <img src={movies.poster_path} alt={movies.title} />
            </div>
            <div className="info">
              <Link to="/">
              <div className="fontAwesome"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
              </Link>
              <div><h4 className="rating">{movies.vote_average}</h4></div>
              <div className=""><h2 className="title1">{movies.title}</h2></div>
              <h5 className="divgenres">{movies.genres}</h5>
             <div className="divreleasedate "><h4 className="release_date">{movies.release_date}</h4></div>
             <div className="divruntime">  <h4 className="runtime">{movies.runtime} mins</h4></div>
               <div><i className="itag">{movies.overview}</i></div>
               
            </div>

          </div>

          <div className='sort'>
            {/* <h4 className='second-header'>movies Found</h4> */}
          </div>
        </div>
      </div>


    </>
  )

}
export default MovieDetail;