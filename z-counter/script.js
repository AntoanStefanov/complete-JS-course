'use strict';
// https://uidesigndaily.com/posts/sketch-countdown-timer-day-876
// https://youtu.be/dtKciwk_si4?list=PLxfRCInfTk3WI2CvHgNmsYxzsHGsFKF7L&t=1031

/**
 * Main.
 */
function main() {
  /**
   * Countdown New Year's Eve.
   */
  function countdown() {
    const setTimeOnCountDown = function () {
      document.getElementById('days').textContent = days;
      document.getElementById('hours').textContent = hours;
      document.getElementById('minutes').textContent = minutes;
      document.getElementById('seconds').textContent = seconds;
    };

    const getDifferenceAsDateObj = (currentDate, targetDate) =>
      new Date(targetDate.getTime() - currentDate.getTime());

    const getTime = (dateObj) => {
      return [
        dateObj.getDate() - 1,
        dateObj.getUTCHours(),
        dateObj.getMinutes(),
        dateObj.getSeconds(),
      ];
    };
    const currentDate = new Date();

    const targetDate = new Date(currentDate.getFullYear() + 1, 0, 1);

    const DiffDateObj = getDifferenceAsDateObj(currentDate, targetDate);

    const [days, hours, minutes, seconds] = getTime(DiffDateObj);

    setTimeOnCountDown();
  }

  // initial call
  countdown();

  setInterval(countdown, 1000);
}

main();
