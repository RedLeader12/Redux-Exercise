import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch( action.type ){
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1 
            return newState;
        case actionTypes.DECREMENT:
        return {
            ...state,
            counter: state.counter - 1 
        }
        case actionTypes.ADD5:
        return {
            ...state,
            counter: state.counter + action.val
        }
        case actionTypes.SUBTRACT5:
        return {
            ...state,
            counter: state.counter - action.val
        }
        case actionTypes.STOREDRESULTS:
        return {
            ...state,
            results: state.results.concat({id: new Date(),val: state.counter})
        }
        case actionTypes.DELETERESULT:
        // const id = 2; 
        // const newArray = [...state.results]
        // newArray.splice(id, 1);
        const updatedArray = state.results.filter(result => result.id !== action.resultElementId)
        return {
            ...state,
            results: updatedArray
        }
    }
    return state;
}

export default reducer;