import React, { useState, Fragment, useEffect } from 'react';
import './SearchBar.css';
import { connect } from 'react-redux';
import { queryResultsAsync } from '../../redux/actions/searchAction';

const SearchBar = ({ queryResults }) => {
    const initialState = {
        search: '',
    }
    const [state, setState] = useState(initialState);

    // query results from api whenever search term changes
    useEffect(() => {
            queryResults(state.search)
        }, [state.search])


    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    const handleChange = (evt) => {
        const {value, name} = evt.target;
        setState({ [name]: value});
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className='search-bar'>
                <input type='text' name='search' id='search' value={state.search} placeholder='search stories by title, url or author' onChange={handleChange} />
                <button type='submit' id='search-button'>Search</button>
            </form>
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    queryResults: search => dispatch(queryResultsAsync(search))
})

export default connect(null, mapDispatchToProps)(SearchBar);
