import { useEffect } from "react";
import { useGlobalContext } from "../Context"
import Loader from "../Loader";
import Movie from "./Movie";

const Trending = () => {
    const { fetchTrendingMovies, state } = useGlobalContext();


    useEffect(() => {
        fetchTrendingMovies()
    }, [])



    return (
            state.isLoading ? <Loader /> :
            <section className="trending-container">
                <h1>Trending Movies</h1>
                <div className="trending-movies">
                    {state.trendingMovies.map((movie) => {
                    return <Movie key={movie.id} {...movie} />
                })}
               </div>
            </section>
    )
}

export default Trending