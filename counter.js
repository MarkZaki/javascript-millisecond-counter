let milliSecondsTimer = 55 * 1000;

setInterval(function () {
  let minutes = Math.floor(milliSecondsTimer / 1000 / 60);
  let seconds = Math.floor(milliSecondsTimer / 1000);
  seconds -= minutes * 60;
  let milliSeconds = milliSecondsTimer;
  if (minutes === 0) {
    milliSeconds -= Math.floor(seconds * 1000);
  } else {
    milliSeconds = milliSecondsTimer;
    milliSeconds -= Math.floor(minutes * 60 * 1000);
    milliSeconds -= Math.floor(seconds * 1000);
  }
  console.log(`${minutes}:${seconds}:${milliSeconds}`);
  milliSecondsTimer++;
}, 1);
