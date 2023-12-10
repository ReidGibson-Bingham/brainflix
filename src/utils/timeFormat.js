export const formatTime = (timeInSeconds, offSetObj) => {
    const msSinceEpoch = timeInSeconds;
    const epochDate = new Date();
    const adjustedDate = new Date(epochDate.getTime() + msSinceEpoch);
    
    if (offSetObj) {
        adjustedDate.setFullYear(adjustedDate.getFullYear() + offSetObj.year);
        adjustedDate.setMonth(adjustedDate.getMonth() + offSetObj.month);
        adjustedDate.setDate(adjustedDate.getDate() + offSetObj.day);
    }

    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        weekday: 'short',
        timeZone: 'America/Vancouver',
        minimumIntegerDigits: 2,
    };

    const year = adjustedDate.getFullYear().toLocaleString('en-CA', options);
    const month = adjustedDate.getMonth().toLocaleString('en-CA', options);  // Adding 1 because getMonth() returns zero-based months
    const day = adjustedDate.getDate().toLocaleString('en-CA', options);

    return `${day}/${month}/${year.replace(/,/g, '')}`;
};