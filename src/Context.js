import { createContext, useContext, useReducer } from "react";

import { reducer } from "./Reducer";

const AppContext = createContext();

const modalStatus = window.innerWidth > 770 ? true : false

const initialState = {
    isModalShowing: modalStatus
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const toggleModal = () => {
        dispatch({type: "TOGGLEMODAL"})
    }

    return(
        <AppContext.Provider value={{
            state,
            toggleModal
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }

export const useGlobalContext = () => {
    return useContext(AppContext)
}