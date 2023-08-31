const POMODORO_TIME = 25 * 60; 
const BREAK_TIME = 5 * 60; 

let timeLeft = POMODORO_TIME;
let isBreak = false;
let interval;

function startTimer() {
  if (interval) {
    stopTimer();
  }

  interval = setInterval(updateTime, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stopTimer();
  isBreak = false;
  timeLeft = POMODORO_TIME;
  displayTime();
}

function updateTime() {
  if (timeLeft > 0.1) {
    timeLeft--;
  } else {
    if (isBreak) {
      timeLeft = POMODORO_TIME;
      isBreak = false;
    } else {
      timeLeft = BREAK_TIME;
      isBreak = true;
    }
  }
  displayTime();
}

function displayTime() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = Math.floor(timeLeft % 60);

  const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('timeDisplay').textContent = display;

  if (isBreak) {
    document.body.classList.add('breakMode');
    document.body.classList.remove('workMode');
  } else {
    document.body.classList.add('workMode');
    document.body.classList.remove('breakMode');
  }

  updateProgressBar();
}

function updateProgressBar() {
  const totalTime = isBreak ? BREAK_TIME : POMODORO_TIME;
  const percentageLeft = (timeLeft / totalTime) * 100;

  console.log("Updating progress bar:", percentageLeft);

  document.getElementById('progressBarWrapper').style.setProperty('--progress-width', `${percentageLeft}%`);
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

displayTime();