const initstate = {
    counter: 0,
    price: 1000,
}
const rootReducer = (state = initstate, action) => {
    let newState = state;
    switch (action.type) {
        case "INC":
            newState = {
                ...state,
                counter: state.counter + action.data,
            }
            break;
        case "DEC":
            newState = {
                ...state,
                counter: state.counter - action.data,
            }
            break;
        default:
            newState = state;
    }
    if (newState.counter < 0) {
        newState.counter = 0;
    }
    return newState;
}
export default rootReducer;