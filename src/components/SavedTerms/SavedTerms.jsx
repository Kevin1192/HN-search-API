import React from 'react';
import { connect } from 'react-redux';
import { changeSearch } from '../../redux/actions/searchAction';

import './SavedTerms.css';

const SavedTerms = ({ terms, dispatch }) => {

    const handleClick = (evt) => {
        const search = evt.target.innerText;
        dispatch(changeSearch(search));

    }

    return (
        <div className='side-bar'>
            <h5>Saved Terms</h5>
            <ul>
            {terms.map((term, idx) => <li key={idx} onClick={handleClick}>{term}</li>)}
            </ul>
        </div>
    )
}

const mapStateToProps = ({ search: {terms, search}}) => ({
    terms,
    search
})

export default connect(mapStateToProps)(SavedTerms)
