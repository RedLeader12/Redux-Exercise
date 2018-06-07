import * as actionTypes from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch( action.type ){
        case actionTypes.STOREDRESULTS:
        return {
            ...state,
            results: state.results.concat({id: new Date(),val: action.result})
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
