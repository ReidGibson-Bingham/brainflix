export const formatTime = (timeInSeconds, offSetObj, boolObj) => {
    const msSinceEpoch = timeInSeconds;
    const epochDate = new Date();
    const adjustedDate = new Date(epochDate.getTime() + msSinceEpoch);

    // Apply offset if provided
    if (offSetObj) {
        adjustedDate.setFullYear(adjustedDate.getFullYear() + offSetObj.year);
        adjustedDate.setMonth(adjustedDate.getMonth() + offSetObj.month);
        adjustedDate.setDate(adjustedDate.getDate() + offSetObj.day);
    }

    const year = adjustedDate.getFullYear();
    const month = adjustedDate.getMonth() + 1; // Adding 1 because getMonth() returns zero-based months
    const day = adjustedDate.getDate();
    
    const dayOfWeek = adjustedDate.getDay();

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

    if (boolObj.norseDay) {
        return `${daysOfWeek[dayOfWeek]} ${day}/${month}/${year}`;
    } else {
        return `${day}/${month}/${year}`;
    }
    
};