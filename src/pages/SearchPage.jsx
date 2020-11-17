import React, { Fragment } from 'react';

import SearchBar from '../components/SearchBar/SearchBar';
import SearchResultsList from '../components/SearchResultsList/SearchResultsList';
import SavedTerms from '../components/SavedTerms/SavedTerms';
import StepBar from '../components/StepBar/StepBar';
function SearchPage() {

    return (
        <Fragment>
        <SearchBar />
        <SavedTerms />
        <SearchResultsList />
        <StepBar />
        </Fragment>
    );
}

export default SearchPage;