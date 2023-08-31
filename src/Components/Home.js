
import { useGlobalContext } from "../Context"
import Loader from "../Loader";
import Movie from "./Movie";



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
                    return <Movie key={movie.id} {...movie} />
                })}
            </section>
         </main>
    )
}

export default Home 