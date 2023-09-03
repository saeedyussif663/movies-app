

export const reducer = (state, action) => {
    if (action.type === "TOGGLEMODAL") {
        return {
            ...state,
            isModalShowing: !state.isModalShowing
       }
    }

    if (action.type === "SETUSERNAME") {
        localStorage.setItem("user", JSON.stringify(action.name))
        return {
            ...state, 
            user: action.name
        }
    }

    if (action.type === "LOGOUT") {
        localStorage.setItem("user", JSON.stringify(null))
        return {
            ...state,
            user: null
        }
    }
    
    if (action.type === "SETLOADER") {
        return {
            ...state,
            isLoading: true
        }
    }

    
    if (action.type === "REMOVELOADER") {
        return {
            ...state,
            isLoading: false
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
            casts: [...action.cast]
        }
    }

    if (action.type === "SETTRENDINGMOVIE") {
        return {
            ...state,
            trendingMovies: [...action.movies]
        }
    }

    if (action.type === "SETUPCOMIMGMOVIE") {
        return {
            ...state,
            upcomingMovies: [...action.movies]
        }
    }

    if (action.type === "SETFAVOURITE") {
        let newFavouriteArr = [...state.favouriteMovies, { ...action.movies }]
        localStorage.setItem("favourite", JSON.stringify(newFavouriteArr))
        return {
            ...state,
            favouriteMovies: newFavouriteArr,
        }
    }

    if (action.type === "REMOVEFAVOURITE") {
        const newFavouriteMovies = state.favouriteMovies.filter(movie => movie.id !== action.data.id);
        localStorage.setItem("favourite", JSON.stringify(newFavouriteMovies))
            return {
                ...state,
                favouriteMovies: newFavouriteMovies,
            };
    }

    if (action.type === "SETFAVOURITEWITHLOCALSTORAGE") {
        return {
            ...state,
            favouriteMovies: JSON.parse(action.favourite)
        }
    }

    if (action.type === "SETUSERWITHLOCALSTORAGE") {
        return {
            ...state,
            user: JSON.parse(action.user)
        }
    }

    if (action.type === "SETSEARCHEDMOVIES") {
        return {
            ...state,
            searchedMovies: action.movies
        }
    }
    return state
}