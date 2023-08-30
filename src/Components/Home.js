import { Link } from "react-router-dom";


import { useGlobalContext } from "../Context"
import Loader from "../Loader";



const Home = () => {
    const { state, recieveGenre} = useGlobalContext();
    const { genres, isLoading, moviesGenres , genreToDisplay } = state;


    return (
        <main className="home-container">
            <section className="search-container">
                <form>
                    <input type="text" placeholder="Search for Movies" />
                </form>
            </section>
            <section className="genres-section">
                <h1>Genres</h1>
                {genres.map((genre) => {
                    return (
                        <button
                            className={genreToDisplay === genre.id ? "genres-button unique-button" : "genres-button"}
                            key={genre.id}
                            onClick={() => recieveGenre(genre.id)}
                        >
                                {genre.name}
                        </button>
                        )
                })}
            </section>
            <section className="movies-section">
                {isLoading ? <Loader/> : moviesGenres.map((movie) => {
                    return (
                        <Link key={movie.id} to={`/moviedetail/${movie.id}`} className="movie-container">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <div className="favourite-container">
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <div className="movie-details">
                                <h1>{movie.title}</h1>
                                <span>{movie.vote_average}</span>
                            </div>
                        </Link>
                    )
                })}
            </section>
         </main>
    )
}

export default Home 