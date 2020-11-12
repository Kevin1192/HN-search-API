import React from 'react';

import './SearchResult.css';

const SearchResult = ({ result }) => {
    const { title, url, auther, num_comments, created_at, points } = result;
    return (
        <div className='result'>
            <div className='top-result'>
                <div className='title'><a href={url}>{title}</a></div>
                <div className='url'><a href={url}>({url})</a></div>
            </div>
            <div className='bottom-result'>
    <div className='points bottom-text'>{points}</div>
                <div className='auther bottom-text'>{auther}</div>
                <div className='created_at bottom-text'>{created_at}</div>
                <div className='num_comments bottom-text'>{num_comments} comments</div>

            </div>
        </div>
    )
}

export default SearchResult
