function countDownDisplay(countdownTime) {
  document.getElementById("timer").innerText = `CountDown: ${countdownTime}`;
  countdownTime--;
  if (countdownTime >= 0) {
    setTimeout(function () {
      countDownDisplay(countdownTime);
    }, 1000);
  } else {
    displaymsg();
  }
}
function displaymsg() {
  document.getElementById("msg").innerText = "Happy Independence Day";
}
countDownDisplay(10);
