import React, {  Fragment, useEffect } from 'react';
import './SearchBar.css';
import { connect } from 'react-redux';
import { changeSearch, queryResultsAsync, saveTerm } from '../../redux/actions/searchAction';


const SearchBar = ({ queryResults, saveTerm, search, changeSearch }) => {

    useEffect(() => {
        queryResults(search, 0);
    // eslint-disable-next-line 
    } , [search]);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        saveTerm(search)
    }

    const handleChange = (evt) => {
        const {value} = evt.target;
        changeSearch(value);
    }
    
    const handleClick = () => {
        saveTerm(search);
    }

    return (
        <Fragment>
            <form className='search-bar' onSubmit={handleSubmit}>
                <input type='text' name='search' id='search' value={search} placeholder='search stories by title, url or author' onChange={handleChange} />
                <button type='button' id='save-button' onClick={handleClick}>Save</button>
            </form>
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    queryResults: search => dispatch(queryResultsAsync(search, 0)),
    saveTerm: term => dispatch(saveTerm(term)),
    changeSearch: search => dispatch(changeSearch(search))
})

const mapStateToProps = ({ search: {search}}) => ({
    search
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
