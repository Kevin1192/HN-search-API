import React from 'react'
 
import { connect } from 'react-redux';
import './StepBar.css';

import { queryResultsAsync} from '../../redux/actions/searchAction';
import StepButton from '../StepButton/StepButton';

const StepBar = ({ nbPages, currentPage, search, queryResultsAsync }) => {
    const firstHalf = [],
        lastHalf = [];

    let iValue = (5 - currentPage) > 0 ? 0 : currentPage - 5;

    const stepButtonGenerator = (idx, search, current=false) => (
        <StepButton idx={idx} key={idx} search={search} current={current} onClick={() => queryResultsAsync(search, idx)} />
    )

    for (let i = iValue; i < currentPage; i++) {
        firstHalf.push(stepButtonGenerator(i, search))
    }

    iValue = (nbPages - currentPage) > 5 ? currentPage + 5 : nbPages;

    for (let i = currentPage + 1; i < iValue; i++) {
        lastHalf.push(stepButtonGenerator(i, search))
    }
    const stepButtons = [...firstHalf, stepButtonGenerator(currentPage, search, true), ...lastHalf];
    return (
        <div className='pagination'>
            <StepButton idx={'<<'} onClick={() => queryResultsAsync(search, 0)} />
            {stepButtons}
        </div>
    )
}

const mapStateToProps = ({ search: { nbPages, currentPage, search }}) => ({
    nbPages,
    currentPage,
    search
})

const mapDispatchToProps = dispatch => ({
    queryResultsAsync: (search, page) => dispatch(queryResultsAsync(search, page))
})

export default connect(mapStateToProps, mapDispatchToProps)(StepBar)
