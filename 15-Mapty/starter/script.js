'use strict';

// import * as L from 'leaflet'

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
      displayMapLeafletLibrary(latitude, longitude);
    };

    const errorCallback = function (_) {
      alert('Could not get location.');
    };

    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
    geolocation.getCurrentPosition(successCallback, errorCallback);
  }

  // 233. Displaying a Map Using Leaflet Library
  function displayMapLeafletLibrary(...position) {
    // position = [43.3527461, 25.1401631]

    // https://stackoverflow.com/questions/44479562/l-is-not-defined-error-with-leaflet
    const L = window.L;

    // https://leafletjs.com/reference.html#map
    const map = L.map('map', {
      // https://leafletjs.com/reference.html#map-center
      center: position,
      // https://leafletjs.com/reference.html#map-zoom
      zoom: 14,
      // boxZoom: false,
    });

    // https://leafletjs.com/reference.html#tilelayer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    // https://tile.openstreetmap.org/15/18672/11995.png -> tile

    // https://leafletjs.com/reference.html#layer-addto
    L.marker(position)
      .addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  }

  getGeolocation();
}

app();

// 233. Displaying a Map Using Leaflet Library -watch -> 00:00!
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649175#questions
