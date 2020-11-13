import React, { Fragment } from 'react';

import SearchBar from '../components/SearchBar/SearchBar';
import SearchResultsList from '../components/SearchResultsList/SearchResultsList';
import SavedTerms from '../components/SavedTerms/SavedTerms';
function SearchPage() {

    return (
        <Fragment>
        <SearchBar />
        <SavedTerms />
        <SearchResultsList />
        </Fragment>
    );
}

export default SearchPage;