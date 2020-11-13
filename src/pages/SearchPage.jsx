import React, { Fragment } from 'react';

import SearchBar from '../components/SearchBar/SearchBar';
import SearchResultsList from '../components/SearchResultsList/SearchResultsList';
function SearchPage() {

    return (
        <Fragment>
        <SearchBar />
        <SearchResultsList />
        </Fragment>
    );
}

export default SearchPage;