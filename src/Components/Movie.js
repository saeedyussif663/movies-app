import { useNavigate } from "react-router-dom";

import { useGlobalContext } from "../Context";

const Movie = ({ id, title, poster_path, vote_average}) => {
    const {pushToFavourite} = useGlobalContext()
    const navigate = useNavigate()
    
    const navigateToSingleMovie = () => {
            navigate(`/moviedetail/${id}`)
    }
    
    const favouriteClick = (e) => {
        const item = e.target
        if (item.classList.contains("fa-regular")) {
            item.classList.remove("fa-regular");
            item.classList.add("fa-solid");
        } else {
             item.classList.remove("fa-solid");
             item.classList.add("fa-regular")
        }
      pushToFavourite(id)
    }
    
    return (
        <div className="movie-container" >
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} onClick={navigateToSingleMovie}/>
            <div className="favourite-container">
                <i className="fa-regular fa-star" onClick={favouriteClick}></i>
            </div> 
            <div className="movie-details">
            <h1>{title}</h1>
            <span>{vote_average.toFixed(1)}</span>
            </div>
         </div>
    )
}

export default Movie