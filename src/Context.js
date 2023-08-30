import { createContext, useContext, useEffect, useReducer } from "react";

import { reducer } from "./Reducer";

const AppContext = createContext();

const modalStatus = window.innerWidth > 770 ? true : false

const initialState = {
    isModalShowing: modalStatus,
    isLoading: false,
    genres: [],
    genreToDisplay: 28,
    moviesGenres: [],
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchGenres = async () => {
        dispatch({ type: "TOGGLELOADER" });
        const response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=837ddd7bf3645dab7c2e0b4d81c44b22")
        const data = await response.json();
        dispatch({ type: "SETGENRES", data: data.genres });
        dispatch({ type: "TOGGLELOADER" });
    }

    const fetchDefaultMovies = async () => {
        dispatch({ type: "TOGGLELOADER" });
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${state.genreToDisplay}&api_key=837ddd7bf3645dab7c2e0b4d81c44b22`);
        const data = await response.json();
        dispatch({ type: "SETMOVIESGENRES", movies: data.results });
        dispatch({ type: "TOGGLELOADER" });
    }

    const recieveGenre = async (genreNum) => {
        dispatch({ type: "CHANGEGENRETODISPLAY", genreNum });
        dispatch({ type: "TOGGLELOADER" });
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genreNum}&api_key=837ddd7bf3645dab7c2e0b4d81c44b22`);
        const data =  await response.json();
        dispatch({ type: "SETMOVIESGENRES", movies: data.results });
        dispatch({ type: "TOGGLELOADER" });
    }

    useEffect(() => {
        fetchGenres();
        fetchDefaultMovies();
    }, [])

    const toggleModal = () => {
        dispatch({type: "TOGGLEMODAL"})
    }

    return(
        <AppContext.Provider value={{
            state,
            toggleModal,
            recieveGenre 
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }

export const useGlobalContext = () => {
    return useContext(AppContext)
}