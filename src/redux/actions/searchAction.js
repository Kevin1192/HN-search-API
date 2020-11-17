import { SAVE_RESULTS, QUERY_RESULTS, RETRIVE_TERM, CHANGE_SEARCH } from '../actionTypes';
import { queryResultsFromApi } from '../../utils/queryResults';

export const queryResults = (resultsWithNbPages) => ({
    type: QUERY_RESULTS,
    payload: resultsWithNbPages
})

export const saveTerm = term => ({
    type: SAVE_RESULTS,
    payload: term
})

export const retriveTerm = term => ({
    type: RETRIVE_TERM,
    payload: term
})

export const changeSearch = search => ({
    type: CHANGE_SEARCH,
    payload: search
})

// thunk action creator
export const queryResultsAsync = (search, page) => {
    return async dispatch => {
        try {
            const resultsWithNbPages = await queryResultsFromApi(search, page);
            return dispatch(queryResults(resultsWithNbPages));
        } catch (err) {
            console.log(err);
        }
    }
}