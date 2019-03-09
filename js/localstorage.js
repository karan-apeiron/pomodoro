const minuteSetting = document.querySelector('#minSettings');
const secondsSetting = document.querySelector('#secSettings');

document.querySelector('#saveSettings').addEventListener('click', e => {
  const time = {
    minutes: document.querySelector('#minSettings').value,
    seconds: document.querySelector('#secSettings').value
  };
  if (typeof Storage !== 'undefined') {
    window.localStorage.setItem('time', JSON.stringify(time));
  }
});
