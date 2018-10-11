const timestamp = (date = "", useAMPM = true) => {
  date = ((date === "") || (date === null)) ? date = new Date() : date;

  // build time
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = "";

  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let strTime = `${hours}:${minutes}:${seconds}`;

  if (useAMPM) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours < 10 ? "0" + hours : hours;
    strTime += ` ${ampm}`;
  }

  // build date
  let month = date.getMonth();
  month = month < 10 ? "0" + month : month;
  let day = date.getDate();
  day = day < 10 ? "0" + day : day;

  return `${date.getFullYear()}-${month}-${day} ${strTime}`;
};

const formatDate = timestamp;

module.exports = { timestamp, formatDate };