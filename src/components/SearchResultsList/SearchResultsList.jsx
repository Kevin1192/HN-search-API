import React, { Fragment} from 'react';
import { connect } from 'react-redux';

import SearchResult from '../SearchResult/SearchResult';

const SearchResultsList = ({ results }) => {
   
    return (
        <Fragment>
            {results.map((result, idx) => <SearchResult key={idx} result={result} />)}
        </Fragment>
    )
}

const mapStateToProps = ({ search: {results}}) => ({
    results,
})
export default connect(mapStateToProps)(SearchResultsList);
