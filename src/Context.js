import { createContext, useContext, useEffect, useReducer } from "react";

import { reducer } from "./Reducer";

const AppContext = createContext();

const modalStatus = window.innerWidth > 770 ? true : false;
let favourite;
let user;

const initialState = {
    user: null,
    isModalShowing: modalStatus,
    isLoading: false,
    genres: [],
    genreToDisplay: 28,
    moviesGenres: [],
    singleMovie: {},
    trendingMovies: [],
    upcomingMovies: [],
    favouriteMovies: [],
    casts: [],
    searchedMovies: []
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getItemsFromLocalStorage = ()  =>{
         favourite = localStorage.getItem("favourite");
        if (favourite) {
           dispatch({type: "SETFAVOURITEWITHLOCALSTORAGE", favourite})
        } else {
            localStorage.setItem("favourite", JSON.stringify([]))
        }
    }

    const getUserFromLocalStorage = () => {
        user = localStorage.getItem("user");
        if (user) {
            dispatch({type: "SETUSERWITHLOCALSTORAGE", user})
        } else {
            localStorage.setItem("user", JSON.stringify(null))
        }
    }

    const setDetails = (name) => {
        dispatch({type: "SETUSERNAME", name})
    }

    const fetchGenres = async () => {
        dispatch({ type: "SETLOADER" });
        const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=837ddd7bf3645dab7c2e0b4d81c44b22")
        const data = await response.json();
        dispatch({ type: "SETGENRES", data: data.genres });
        dispatch({ type: "REMOVELOADER" });
    }

    const fetchSingleMovie = async (id) => {
        dispatch({ type: "SETLOADER" });
        const response = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=837ddd7bf3645dab7c2e0b4d81c44b22`)
        const data = await response.json();
        dispatch({type: "SINGLEMOVIE", data})
        dispatch({ type: "REMOVELOADER" });
    }

    const fetchCast = async (id) => {
        dispatch({ type: "SETLOADER" });
        const response = await fetch (`https://api.themoviedb.org/3/movie/${id}/credits?api_key=837ddd7bf3645dab7c2e0b4d81c44b22`)
        const data = await response.json();
        dispatch({type: "SETCAST", cast: data.cast})
        dispatch({ type: "REMOVELOADER" });
    }

    const fetchDefaultMovies = async () => {
        dispatch({ type: "SETELOADER" });
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${state.genreToDisplay}&api_key=837ddd7bf3645dab7c2e0b4d81c44b22`);
        const data = await response.json();
        dispatch({ type: "SETMOVIESGENRES", movies: data.results });
        dispatch({ type: "REMOVELOADER" });
    }

    const recieveGenre = async (genreNum) => {
        dispatch({ type: "CHANGEGENRETODISPLAY", genreNum });
        dispatch({ type: "SETLELOADER" });
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreNum}&api_key=837ddd7bf3645dab7c2e0b4d81c44b22`);
        const data =  await response.json();
        dispatch({ type: "SETMOVIESGENRES", movies: data.results });
        dispatch({ type: "REMOVELOADER" });
    }

    const fetchTrendingMovies = async () => {
        dispatch({ type: "SETLELOADER" });
        const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=837ddd7bf3645dab7c2e0b4d81c44b22");
        const data = await response.json();
        dispatch({type: "SETTRENDINGMOVIE", movies: data.results})
        dispatch({ type: "REMOVELOADER" });
    }

    const fetchUpcomingMovies = async () => {
        dispatch({ type: "SETLELOADER" });
        const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=837ddd7bf3645dab7c2e0b4d81c44b22");
        const data = await response.json();
        dispatch({type: "SETUPCOMIMGMOVIE", movies: data.results})
        dispatch({ type: "REMOVELOADER" });
    }

    const pushToFavourite = async (id) => {
        const response = await fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=837ddd7bf3645dab7c2e0b4d81c44b22`)
        const data = await response.json();
        if (state.favouriteMovies.length === 0) {
            dispatch({type: "SETFAVOURITE", movies: data})
        } else {
            for (let index = 0; index < state.favouriteMovies.length; index++) {
                const element = state.favouriteMovies[index];
                if (element.id === data.id) {
                    dispatch({type: "REMOVEFAVOURITE", data})
                } else {
                    dispatch({type: "SETFAVOURITE", movies: data})
                }
                return state
            }
        }
    }

    const searchHandler = async (searchTerm) => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=837ddd7bf3645dab7c2e0b4d81c44b22&query=${searchTerm}&`)
        const data = await response.json()
        dispatch({type: "SETSEARCHEDMOVIES", movies: data.results})
    }

    const toggleModal = () => {
        dispatch({type: "TOGGLEMODAL"})
    }

    const logout = () => {
        dispatch({type: "LOGOUT"})
    }

    useEffect(() => {
        fetchGenres();
        fetchDefaultMovies();
        getItemsFromLocalStorage();
        getUserFromLocalStorage();
    }, [])


    return(
        <AppContext.Provider value={{
            state,
            toggleModal,
            recieveGenre,
            fetchSingleMovie,
            fetchCast,
            fetchTrendingMovies,
            fetchUpcomingMovies,
            pushToFavourite,
            setDetails,
            logout,
            searchHandler
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }

export const useGlobalContext = () => {
    return useContext(AppContext)
}