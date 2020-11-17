import React from 'react';

import './SearchResult.css';

import { timeConverter } from '../../utils/timeConverter';

const SearchResult = ({ result }) => {
    const { title, url, author, num_comments, created_at, points } = result;

    const currentTime = new Date().getTime(),
    prevTime = new Date(created_at).getTime();
    const timeAgo = timeConverter(currentTime, prevTime);

    return (
        <div className="result">
            <div className='top-result'>
                <div className='title'><a href={url}>{title}</a></div>
                <div className='url'><a href={url}>({url})</a></div>
            </div>
            <div className='bottom-result'>
    <div className='points bottom-text'>{points} points</div>
                <div className='auther bottom-text'>{author}</div>
                <div className='created_at bottom-text'>{timeAgo}</div>
                <div className='num_comments bottom-text'>{num_comments} comments</div>

            </div>
        </div>
    )
}

export default SearchResult;
