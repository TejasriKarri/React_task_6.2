import "../Header/Header.css"
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
//import MovieListing from "../MovieListing/MovieListing";
import { useSelector } from "react-redux";
import movieSlice, { addMovies,getAllMovies} from "../../features/movies/movieSlice";
const Header = () => {
  const [searchByTitle, setTitle] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchByGenres, setGenres] = useState('');
 const movies = useSelector(getAllMovies)
 {console.log("yes");}
 {console.log(movies.limit)}
  const dispatch = useDispatch();
  const handleOnChange = (e) => {

    setSearchTerm(e.target.value)
  }
  const handleOnClickOfTitle = (e) => {
    //console.log(e.target.value)
    setTitle(e.target.value)

  }
  const handleOnClickOfGenres = (e) => {
    setGenres(e.target.value)
  }
  const search = async () => {
    // console.log(searchTerm)
    if (searchByTitle === "title")
      await axios.get(`https://reactjs-cdp.herokuapp.com/movies?search=${searchTerm}&searchBy=${searchByTitle}`)
        .then(res => {
         // console.log(res.data)
          dispatch(addMovies(res.data))
         // console.log(movies.limit)
          
        })
    else {
      await axios.get(`https://reactjs-cdp.herokuapp.com/movies?search=${searchTerm}&searchBy=${searchByGenres}`)
        .then(res => {
          dispatch(addMovies(res.data))
        })
    }
  }
  const sort = async () => {
    var k=window.confirm("DO YOU WANT GET RESULT IN Desending order ORDER")
    if(k){
    await axios.get(`https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&sortOrder=desc`)
      .then(res => {
       //console.log(res.data)
        dispatch(addMovies(res.data))
      })
    }
    else{
      await axios.get(`https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&sortOrder=asc`)
      .then(res => {
        dispatch(addMovies(res.data))
      })
    }
  }
  const sortByRating = async () => {
    var k=window.confirm("DO YOU WANT GET RESULT IN Desending order ORDER")
    if(k){
    await axios.get(`https://reactjs-cdp.herokuapp.com/movies?sortBy=vote_average&sortOrder=desc`)
      .then(res => {
       console.log(res.data)
        dispatch(addMovies(res.data))
      })
    }
    else{
      await axios.get(`https://reactjs-cdp.herokuapp.com/movies?sortBy=vote_average&sortOrder=asc`)
      .then(res => {
        console.log(res.data)
        dispatch(addMovies(res.data))
      })
    }
  }
  return (
    <>
    <div className='image-contianer'>
      <div className='content-blur'>
        <h2 className='title'>FIND YOUR MOVIE</h2>
        <header className="header">
          <input type="text" placeholder="Search" className="search_box"  onChange={handleOnChange}></input>
          <button onClick={search} className="search-button" type="button">Search</button>
        </header>
        <div>
          <h5 className='type'>SEARCH BY</h5>
          <button className="search-titlebutton" type="button" value="title" onClick={handleOnClickOfTitle}>TITLE</button>
          <button className="search-generesbutton" type="button" value="genres"  onClick={handleOnClickOfGenres} >GENRES</button>
        </div>
        <div className='sort'>
          <h4 className='second-header' >{movies.total} movies Found</h4>
          <h5 className='sort_by'>SORT BY</h5>
          <button className="sort-ByReleaseDate" type="button" value="ReleaseDate" onClick={sort} >ReleaseDate</button>
          <button className="sort-ByRating" type="button" value="rating" onClick={sortByRating}>Rating</button>
        </div>
      </div>
    </div>
    </>
   
  )
}
export default Header;