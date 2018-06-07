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
        
    }
    return state;
}

export default reducer;