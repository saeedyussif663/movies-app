import Form from "./Form"
import Movie from "./Movie";
import Loader from "../Loader";
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../Context";

const SearchMovie = () => {
    const {state} = useGlobalContext()
    const {searchTerm}= useParams();

    return (
        <section className="search-movie-container">
            <Form />
            <h1>Results for "{searchTerm}"</h1>
              <section className="movies-section">
                {state.isLoading ? <Loader/> : state.searchedMovies.map((movie) => {
                    return <Movie key={movie.id} {...movie} />
                })}
            </section>
        </section>
    )
}


export default SearchMovie