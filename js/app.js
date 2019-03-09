const minutesElem = document.querySelector('#minutes');
const secondsElem = document.querySelector('#seconds');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const stopButton = document.querySelector('#stop');

let minutes;
let seconds;
let intervalId;
let timerStatus = false;

function pad(value) {
  return value.toString().length < 2 ? `0${value}` : value;
}

function initialize() {
  minutes = minutesElem.textContent;
  seconds = secondsElem.textContent;
}

function updateDisplay(mins, sec) {
  minutesElem.textContent = pad(mins);
  secondsElem.textContent = pad(sec);
}

function updateButtons() {
  if (timerStatus) {
    startButton.disabled = true;
    pauseButton.disabled = false;
    stopButton.disabled = false;
  } else {
    pauseButton.disabled = true;
    stopButton.disabled = true;
    startButton.disabled = false;
  }
}

function showNotification(message) {
  updateButtons();
  const notifDiv = document.createElement('div');
  notifDiv.classList.add('notification', 'is-primary');
  notifDiv.textContent = message;
  document.querySelector('.hero-body .container').appendChild(notifDiv);
  setTimeout(() => {
    document.querySelector('.hero-body .container').removeChild(notifDiv);
  }, 5000);
}

function startTimer() {
  timerStatus = true;
  updateButtons();
  initialize();
  intervalId = setInterval(() => {
    if (parseInt(seconds, 10) === 0) {
      seconds = 60;
      minutes -= 1;
    }
    seconds -= 1;
    if (parseInt(minutes, 10) < 0) {
      clearInterval(intervalId);
      showNotification('Well Done!');
      return;
    }
    updateDisplay(minutes, seconds);
  }, 1000);
}

startTimer();

pauseButton.addEventListener('click', e => {
  timerStatus = false;
  updateButtons();
  showNotification('Dont Stop! Keep Going');
  clearInterval(intervalId);
});

startButton.addEventListener('click', e => {
  startTimer();
});

stopButton.addEventListener('click', e => {
  timerStatus = false;
  updateButtons();
  clearInterval(intervalId);
  updateDisplay(25, 0);
});
