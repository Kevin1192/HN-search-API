import { SAVE_RESULTS, QUERY_RESULTS } from '../actionTypes';
import { queryResultsFromApi } from '../../utils/queryResults';

export const queryResults = (results) => ({
    type: QUERY_RESULTS,
    payload: results
})

// thunk action creator
export const queryResultsAsync = search => {
    return async dispatch => {
        try {
            const results = await queryResultsFromApi(search);
            return dispatch(queryResults(results));
        } catch (err) {
            console.log(err);
        }
    }
}