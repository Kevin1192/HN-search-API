import React from 'react';

import SearchBar from '../components/SearchBar/SearchBar';
import SearchResultsList from '../components/SearchResultsList/SearchResultsList';
function SearchPage() {

    return (
        <div>
        <SearchBar />
        <SearchResultsList />
        </div>
    );
}

export default SearchPage;