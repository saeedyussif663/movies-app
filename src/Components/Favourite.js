import { useGlobalContext } from "../Context"

import Movie  from "./Movie";

const Favourite = () => {
    const { state } = useGlobalContext();


    return (
        <section className="favourite-section">
            <h1>favourite</h1>
            <div className="favourite-movies">
                {state.favouriteMovies.length === 0 && <h1>you have no favourite movies at the moment</h1>}
                    {state.favouriteMovies.map((movie) => {
                    return <Movie key={movie.id} {...movie} />
                })}
            </div>
        </section>
        
    )
}


export default Favourite