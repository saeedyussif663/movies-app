

export const reducer = (state, action) => {
    if (action.type === "TOGGLEMODAL") {
        return {
            ...state,
            isModalShowing: !state.isModalShowing
       }
    }
    
    if (action.type === "TOGGLELOADER") {
        return {
            ...state,
            isLoading: !state.isLoading
        }
    }

    if (action.type === "SETGENRES") {
        return {
            ...state,
            genres: [...action.data]
       }
   }

    if (action.type === "SETMOVIESGENRES") {
        return {
            ...state, 
            moviesGenres: [...action.movies],
        }
    }

    if (action.type === "CHANGEGENRETODISPLAY") {
        return {
            ...state,
            genreToDisplay: action.genreNum
        }
    }

    if (action.type === "SINGLEMOVIE") {
        return {
            ...state,
            singleMovie: {...action.data}
        }
    }

    if (action.type === "SETCAST") {
        return {
            ...state, 
            cast: [...action.cast]
        }
    }
    
    return state
}