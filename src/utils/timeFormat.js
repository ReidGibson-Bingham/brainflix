export const formatTime = (timestamp) => {

    const date = new Date(timestamp);

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedDate = `${month >= 10 ? month : '0' + month}/${day >= 10 ? day : '0' + day}/${year}`;

    return formattedDate;

}