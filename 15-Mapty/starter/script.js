'use strict';

function app() {
  // These variables were already here.
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const form = document.querySelector('.form');
  const containerWorkouts = document.querySelector('.workouts');
  const inputType = document.querySelector('.form__input--type');
  const inputDistance = document.querySelector('.form__input--distance');
  const inputDuration = document.querySelector('.form__input--duration');
  const inputCadence = document.querySelector('.form__input--cadence');
  const inputElevation = document.querySelector('.form__input--elevation');

  // 232. Using the Geolocation API
  // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
  // Geolocation API is called API, bcs it is a browser API,
  // just like the internalization API, timers, anything that the browser provides,
  // API example (internalization => Intl):
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
  function getGeolocation() {
    const geolocation = navigator.geolocation;

    // clause check (for older browsers who have not implemented geolocation)
    if (!geolocation) return;

    const successCallback = function (geolocationPosition) {
      console.log(geolocationPosition);
      const {latitude, longitude} = geolocationPosition.coords;
      console.log(latitude, longitude);
      // console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    };

    const errorCallback = function (_) {
      alert('Could not get location.');
    };

    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
    geolocation.getCurrentPosition(successCallback, errorCallback);
  }

  getGeolocation();
}

app();
