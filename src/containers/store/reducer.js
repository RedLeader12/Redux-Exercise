const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch( action.type ){
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1 
            return newState;
        case 'DECREMENT':
        return {
            ...state,
            counter: state.counter - 1 
        }
        case 'ADD5':
        return {
            ...state,
            counter: state.counter + action.val
        }
        case 'SUBTRACT5':
        return {
            ...state,
            counter: state.counter - action.val
        }
        case 'STORERESULT':
        return {
            ...state,
            results: state.results.concat({id: new Date(),val: state.counter})
        }
        case 'DELETERESULT':
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