import { useGlobalContext } from "../Context"
import Loader from "../Loader";



const Home = () => {
    const { state } = useGlobalContext();
    const { genres, isLoading, moviesGenres } = state


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
                    return <button className="genres-button" key={genre.id}>{genre.name}</button>
                })}
            </section>
            <section className="movies-section">
                {/* {isLoading ? <Loader/> : <h1>movies</h1>} */}
                {moviesGenres.map((movie) => {
                    return (
                        <div key={movie.id} className="movie-container">
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <div className="favourite-container">
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <div className="movie-details">
                                <h1>{movie.title}</h1>
                                <span>{movie.vote_average}</span>
                            </div>
                        </div>
                    )
                })}
            </section>
         </main>
    )
}

export default Home 