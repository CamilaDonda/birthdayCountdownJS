const timeLeft = document.getElementById("time-left");

const birthday = new Date("2022-04-21");
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24; //milliseconds
let timeId;

const today = new Date();

function countDown() {
  const today = new Date();
  const timeSpan = birthday - today;

  if (timeSpan <= -day) {
    timeLeft.innerHTML = "Hope you had a nice Birthday!!";
    clearInterval(timeId);
    return;
  }
  if (timeSpan <= 0) {
    timeLeft.innerHTML = "Happy Birthday";
    clearInterval(timeId);
    return;
  }

  const days = Math.floor(timeSpan / day);
  const hours = Math.floor((timeSpan % day) / hour);
  const minutes = Math.floor((timeSpan % hour) / minute);
  const seconds = Math.floor((timeSpan % minute) / second);

  timeLeft.innerHTML = `${days} days ${hours} hours ${minutes} min ${seconds} seconds`;
}
timeId = setInterval(countDown, second);
