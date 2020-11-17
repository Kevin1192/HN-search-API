import { SAVE_RESULTS, QUERY_RESULTS,CHANGE_SEARCH } from '../actionTypes';

const initial_state = {
    results: [],
    terms: [],
    search: '',
    nbPages: 0,
    currentPage: 0
}

const searchReducer = (state = initial_state, action) => {
    switch (action.type) {
        case QUERY_RESULTS:
            return {
                ...state,
                results: action.payload.results,
                nbPages: action.payload.nbPages,
                currentPage: action.payload.currentPage
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
        default:
            return state;
    }
}
export default searchReducer;