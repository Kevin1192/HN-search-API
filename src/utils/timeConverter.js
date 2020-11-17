export const timeConverter = (current, previous) => {
    
    const msPerSecond = 1000;
    const msPerMinute = msPerSecond * 60;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;

    const elapsed = current - previous;

    if (elapsed < msPerMinute) {
        const timeCount = Math.floor(elapsed/msPerSecond);
        return `${timeCount} ${timeCount === 1 ? 'second' : 'seconds'} ago`;
    } else if (elapsed < msPerHour) {
        const timeCount = Math.floor(elapsed/msPerMinute);
        return `${timeCount} ${timeCount === 1 ? 'minute' : 'minutes'} ago`;
    } else if (elapsed < msPerDay) {
        const timeCount = Math.floor(elapsed/msPerHour);
        return `${timeCount} ${timeCount === 1 ? 'hour' : 'hours'} ago`;
    } else if (elapsed < msPerMonth) {
        const timeCount = Math.floor(elapsed/msPerDay)
       return `${timeCount} ${timeCount === 1 ? 'day' : 'days'} ago`;
    } else if (elapsed < msPerYear) {
        const timeCount = Math.floor(elapsed/msPerMonth)
       return `${timeCount} ${timeCount === 1 ? 'month' : 'months'} ago`;
    } else {
        const timeCount = Math.floor(elapsed/msPerYear);
       return `${timeCount} ${timeCount === 1 ? 'year' : 'years'} ago` 
    }
}

