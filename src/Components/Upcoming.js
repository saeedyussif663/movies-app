import { useEffect } from "react";
import { useGlobalContext } from "../Context";
import Movie from "./Movie";

const Upcoming = () => {
    const { state, fetchUpcomingMovies} = useGlobalContext();

    useEffect(() => {
        fetchUpcomingMovies();
    }, [])

    return (
        <section className="upcoming-container">
            <h1>Upcoming Movies</h1>
             <div className="trending-movies">
                    {state.upcomingMovies.map((movie) => {
                    return <Movie key={movie.id} {...movie} />
                })}
               </div>
        </section>
    )
}

export default Upcoming;