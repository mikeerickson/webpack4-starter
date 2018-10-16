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


  if (useAMPM) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours < 10 ? "0" + hours : hours;
  }

  let strTime = `${hours}:${minutes}:${seconds} ${ampm}`;

  // build date
  let month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  let day = date.getDate();
  day = day < 10 ? "0" + day : day;

  let strDate = `${date.getFullYear()}-${month}-${day}`;
  return `${strDate} ${strTime}`;
};

module.exports = { timestamp };
