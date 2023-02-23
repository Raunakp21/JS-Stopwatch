// setInterval(clock, 1000);
// function clock() {
//   let currentTime = new Date();
//   let hours = currentTime.getHours();
//   let minutes = currentTime.getMinutes();
//   let seconds = currentTime.getSeconds();
//   let pm = false;
//   if (hours >= 12) {
//     pm = true;
//     if (hours != 12) {
//       time.innerText = hours - 12 + ":" + minutes + ":" + seconds + " PM";
//     }
//   } else {
//     pm = false;
//     time.innerText = hours + ":" + minutes + ":" + seconds + " AM";
//   }
// }

//Elements
const timeElem = document.querySelector("#time");
const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const stopBtn = document.querySelector("#stop");
const minElem = document.querySelector("#min");
const secElem = document.querySelector("#sec");
const mSecElem = document.querySelector("#mSec");

//variables;
let ms = 00;
let s = 00;
let m = 00;
let interval;

//Event Listeners
startBtn.addEventListener("click", startFn);
stopBtn.addEventListener("click", stopFn);
resetBtn.addEventListener("click", resetFn);

//Functions
function startFn(e) {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
}

function resetFn(e) {
  clearInterval(interval);
  minElem.innerText = "00";
  secElem.innerText = "00";
  mSecElem.innerText = "00";
}

function stopFn(e) {
  clearInterval(interval);
}

function startTimer() {
  ms++;
  if (ms < 10) {
    mSecElem.innerText = "0" + ms;
  } else {
    mSecElem.innerText = ms;
  }
  if (ms > 100) {
    ms = 0;
    mSecElem.innerText = "00";
    s++;
    if (s < 10) {
      secElem.innerText = "0" + s;
    } else {
      secElem.innerText = s;
    }
    if (s > 59) {
      s = 0;
      secElem.innerText = "00";
      m++;
      if (m < 10) {
        minElem.innerText = "0" + m;
      } else {
        minElem.innertext = m;
      }
      //future hour part
      // if (m > 60) {

      // }
    }
  }
}
