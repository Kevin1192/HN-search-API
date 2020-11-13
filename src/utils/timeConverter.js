export const timeConverter = (current, previous) => {
    
    const msPerSecond = 1000;
    const msPerMinute = msPerSecond * 60;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerMonth * 365;

    const elapsed = current - previous;

    if (elapsed < msPerMinute) {
        const timeCount = Math.floor(elapsed/1000)
    }


}