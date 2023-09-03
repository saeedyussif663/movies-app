import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useGlobalContext } from "../Context"
import Loader from "../Loader"

const SingleMovie = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const { fetchSingleMovie, state , fetchCast} = useGlobalContext();
    const {title, backdrop_path, homepage, overview, release_date, } = state.singleMovie


    useEffect(() => {
        fetchSingleMovie(id);
        fetchCast(id);
    }, [])

    const navigateToHome = () => {
        navigate('/')
    }


    return (
        state.isLoading ? <Loader /> : (
            <section className="singlemovie-container">
                <div className="img-container">
                    <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt={title} />
                    <i className="fa-solid fa-arrow-left" onClick={navigateToHome}></i>
                <h1>{ title }</h1>
            </div>
            <div className="sub-deatils-container">
                <p>{overview}</p>
                <div>
                    <span>Release Date : {release_date}</span>
                </div>
                </div>
                <h1 className="cast-text">Cast</h1>
            <div className="cast-container">
                    {state.casts.map((cast) => {
                        return (
                            <div key={cast.id} className="single-cast">
                                <div className="single-cast-img-container">
                                    <img src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt={cast.name} />
                                </div>
                                <div className="single-cast-other-details">
                                    <h1>{ cast.character }</h1>
                                    <span>({ cast.name })</span>
                                </div>
                            </div>
                    )
                    })}
                </div>
                <div className="view-homepage">
                    <a href={homepage} target="_blank" rel="noreferrer">View Homepage</a>
                </div>
        </section>)
    )
}

export default SingleMovie