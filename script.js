let timeSpan = document.getElementById("time");
let dateSpan = document.getElementById("date");

function showTime() {
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let now = new Date();
  let hours = now.getHours();
  let minute = now.getMinutes();
  let seconds = now.getSeconds();
  let date = now.getDate();
  let day = days[now.getDay()];
  let year = now.getFullYear();

  let meridiem = hours > 12 ? "PM" : "AM";

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let currentTime = hours + ":" + minute + ":" + seconds + " " + meridiem;
  console.log(currentTime);
  let currentDate = date + "," + day + "," + year;

  timeSpan.innerHTML = currentTime;
  dateSpan.innerHTML = currentDate;
}

setInterval(showTime, 1000);
