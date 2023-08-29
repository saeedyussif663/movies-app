

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
   
    return state
}