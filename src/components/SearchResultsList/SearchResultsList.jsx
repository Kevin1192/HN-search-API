import React from 'react'

 import SearchResult from '../SearchResult/SearchResult';
import list from '../../assets/listTemplate';
const SearchResultsList = () => {
   
    return (
        <div>
            {list.map((result, idx) => <SearchResult key={idx} result={result} />)}
        </div>
    )
}

export default SearchResultsList;
