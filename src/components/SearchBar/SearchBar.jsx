import React, { useState } from 'react';

import './SearchBar.css';

const apiUrl = 'http://hn.algolia.com/api/v1/';
//search?query=foo&tags=story'
const SearchBar = () => {
    const initialState = {
        search: '',
    }
    const [state, setState] = useState(initialState);
    const handleSubmit = (evt) => {
        evt.preventDefault();
    }

    const handleChange = async (evt) => {
        const {value, name} = evt.target;
        setState({ [name]: value});
        try {
            const res = await fetch(`${apiUrl}search?query=${state.search}&tags=story`)
            const list = await res.json()
            console.log(list);
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='search' id='search' value={state.search} placeholder='search stories by title, url or author' onChange={handleChange} />
                <button type='submit' id='search-button'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;
