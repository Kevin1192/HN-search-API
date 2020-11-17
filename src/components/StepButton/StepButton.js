import React from 'react';

import './StepButton.css';

const StepButton = ({ idx, current, onClick}) => {
    return (
        <div className={`${current ? 'current' : ''} pagination_item`} onClick={onClick}>
            <button>{idx}</button>
        </div>
    )
}


export default StepButton
