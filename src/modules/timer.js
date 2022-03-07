"use strict";

const timer = (deadline) => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    //  let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor(timeRemaining / 60 / 60);
    //  let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);
    // console.log(days);
    if (timeRemaining <= 0) {
      hours = 0;
      minutes = 0;
      seconds = 0;
    }

    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const updateClock = setInterval(() => {
    let getTime = getTimeRemaining();
    timerHours.textContent =
      getTime.hours < 10 ? "0" + getTime.hours : getTime.hours;
    timerMinutes.textContent = ("0" + getTime.minutes).slice(-2);
    timerSeconds.textContent = ("0" + getTime.seconds).slice(-2);

    if (!getTime.timeRemaining) {
      clearInterval(updateClock);
    }
  }, 1000);

  
};

export default timer;
