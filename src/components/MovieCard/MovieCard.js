import React from "react";
import { Link } from 'react-router-dom';
import "./MovieCard.css"

const MovieCard = ({ id, poster_path, title, release_date, genres }) => {
    return (
        <Link to={`/movies/:${id}`}>
            <div className="movie">
                <img src={poster_path} alt={title} />
                <div className="movies-info">
                    <h5>{title}</h5>
                    <span>{release_date}</span>
                </div>
                <h5 className="genres">{genres}</h5>
            </div>
        </Link>
    )
}
export default MovieCard;
<Link to="/" ><li>Home</li></Link>
