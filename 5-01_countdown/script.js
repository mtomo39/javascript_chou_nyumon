const goal = new Date(2020, 7-1, 24);

const countdown = (goal) => {
  const rest = goal.getTime() - new Date().getTime();
  const seconds = Math.floor(rest / 1000 % 60);
  const minutes = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const days = Math.floor(rest / 1000 / 60 / 60 / 24);
  
  return {days:days
          ,hours:hours
          ,minutes:minutes
          ,seconds:seconds};
}

const recalc = () => {
  const rest = countdown(goal);

  document.getElementById('days').textContent = rest.days;
  document.getElementById('hours').textContent = rest.hours;
  document.getElementById('minutes').textContent = rest.minutes;
  document.getElementById('seconds').textContent = rest.seconds;

  reflesh();
}

const reflesh = () => {
  setTimeout(recalc, 1000);
}

recalc();
