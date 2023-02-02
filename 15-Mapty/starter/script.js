// eslint-disable-next-line strict
'use strict';

// import * as L from 'leaflet'
// import {Loader} from '@googlemaps/js-api-loader';
import {Loader} from '/node_modules/@googlemaps/js-api-loader/dist/index.esm.js';
import config from '/config.js';

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
      // displayMapLeafletLibrary(latitude, longitude);
      displayGoogleMaps(latitude, longitude);
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

  // Initialize and add the map
  function displayGoogleMaps(latitude, longitude) {
    // https://developers.google.com/maps/documentation/javascript/adding-a-google-map#maps_add_map-html
    // https://www.npmjs.com/package/@googlemaps/js-api-loader?activeTab=readme

    const initialPosition = {lat: latitude, lng: longitude};
    const mapOptions = {zoom: 13, center: initialPosition};

    const loader = new Loader({
      apiKey: config.GOOGLE_API_KEY,
      version: 'weekly',
      libraries: ['places'],
    });

    loader.load().then(display);

    function display({maps: googleMaps}) {
      const map = new googleMaps.Map(
        document.getElementById('map'),
        mapOptions,
      );

      const infoWindow = new googleMaps.InfoWindow({
        content: 'Hello from info window',
        ariaLabel: 'Home',
      });

      // TOGGLE InfoWindow Object.
      // https://stackoverflow.com/questions/12410062/check-if-infowindow-is-opened-google-maps-v3
      // InfoWindow class extends MVCObject.
      // https://developers.google.com/maps/documentation/javascript/reference/info-window#InfoWindow
      // click MVCObject hyperlink in the above link, you go here:
      // https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject
      // check for set method, and it's docs.
      infoWindow.set('closed', true);

      const marker = new googleMaps.Marker({
        position: initialPosition,
        map: map,
        title: 'Marker Title',
      });

      marker.addListener('click', () => {
        infoWindow.open({
          anchor: marker,
          map,
        });
      });

      map.addListener('click', (ev) => {
        const marker = new googleMaps.Marker({
          position: {lat: ev.latLng.lat(), lng: ev.latLng.lng()},
          map: map,
          title: 'Marker Title',
        });

        marker.addListener('click', () => {
          if (infoWindow.closed) {
            infoWindow.open({
              anchor: marker,
              map,
            });
            infoWindow.closed = false;
          } else {
            infoWindow.close();
            infoWindow.closed = true;
          }
        });
      });
    }
  }

  getGeolocation();
}

app();

// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649193#questions
