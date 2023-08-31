import { Link } from "react-router-dom"

const Movie = ({ id, title, poster_path, vote_average}) => {
    return (
        <Link to={`/moviedetail/${id}`} className="movie-container">
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            <div className="favourite-container">
                <i className="fa-regular fa-star"></i>
            </div> 
            <div className="movie-details">
            <h1>{title}</h1>
            <span>{vote_average}</span>
            </div>
         </Link>
    )
}

export default Movie