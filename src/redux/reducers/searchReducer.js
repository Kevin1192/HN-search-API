import { SAVE_RESULTS, QUERY_RESULTS } from '../actionTypes';

const initial_state = {
    results: []
}

const searchReducer = (state = initial_state, action) => {
    switch (action.type) {
        case QUERY_RESULTS:
            console.log('action payload results', action.payload);
            return {
                ...state,
                results: action.payload
            };
        default:
            return state;
    }
}
console.log(searchReducer, 'reducer');
export default searchReducer;