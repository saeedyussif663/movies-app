import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../Context"
import Loader from "../Loader"

const SingleMovie = () => {
    const {id} = useParams()
    const { fetchSingleMovie, state , fetchCast} = useGlobalContext();
    const {title, backdrop_path, homepage, overview, release_date, } = state.singleMovie


    useEffect(() => {
        fetchSingleMovie(id);
        fetchCast(id);
    }, [])

    if (state.isLoading) return <Loader/>

    return (
        <section className="singlemovie-container">
            <div className="img-container">
                <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title} />
                <h1>{ title }</h1>
            </div>
            <div className="sub-deatils-container">
                <p>{overview}</p>
                <div>
                    <span>Release Date : {release_date}</span>
                </div>
            </div>
        </section>
    )
}

export default SingleMovie