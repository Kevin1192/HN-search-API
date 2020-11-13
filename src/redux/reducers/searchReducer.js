import { SAVE_RESULTS, QUERY_RESULTS, RETRIVE_TERM, CHANGE_SEARCH } from '../actionTypes';

const initial_state = {
    results: [],
    terms: [],
    search: ''
}

const searchReducer = (state = initial_state, action) => {
    switch (action.type) {
        case QUERY_RESULTS:
            return {
                ...state,
                results: action.payload
            }
        case CHANGE_SEARCH:
            return {
                ...state,
                search: action.payload
            }
        case SAVE_RESULTS:
            return {
                ...state,
                terms: [...state.terms, action.payload]
            }
        case RETRIVE_TERM:

        default:
            return state;
    }
}
console.log(searchReducer, 'reducer');
export default searchReducer;