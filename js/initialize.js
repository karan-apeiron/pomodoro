const minuteElem = document.querySelector('#minutes');
const secondElem = document.querySelector('#seconds');

if (typeof Storage !== 'undefined') {
  const time = JSON.parse(window.localStorage.getItem('time'));
  if (time) {
    minuteElem.textContent = time.minutes;
    secondElem.textContent = time.seconds;
  } else {
    // minuteElem.textContent = 25;
    minuteElem.textContent = '00';
    secondElem.textContent = '20';
  }
}
