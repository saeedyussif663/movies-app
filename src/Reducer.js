

export const reducer = (state, action) => {
    if (action.type === "TOGGLEMODAL") {
        return {
            ...state,
            isModalShowing: !state.isModalShowing
       }
   }
   
    return state
}