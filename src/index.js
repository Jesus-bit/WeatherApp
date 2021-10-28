import React from 'react';
import ReactDOM from 'react-dom';
import App from './layout/App';
import '@styles/index.css'

ReactDOM.render(
    <App/>,
    document.getElementById('app')
)
// import fetchLocation from './utils/fetchLocation.js';
// import getGeolocation from './utils/geolocation.js';
// import '../styles/style.css';
// window.addEventListener('load', () => {
//     fetchLocation({
//         string: 'query',
//         value: 'san'
//     });
// })
// const buttonPlaces = document.getElementById('search');
// const menuSearch = document.querySelector('.places');
// export const imgs = {
//     lr: 'LightRain',
//     s: 'Shower',
//     hr: 'HeavyRain',
//     hc: 'HeavyCloud',
//     c: 'Clear',
//     lc: 'LightCloud',
//     t: 'Thunderstorm',
//     sn: 'snow',
//     sl: 'Sleet',
//     h: 'Hail'
// }

// buttonPlaces.addEventListener('click', () =>{

//     menuSearch.classList.remove('hidden');

//     const closeButton = document.querySelector('#close-places');

//     closeButton.addEventListener('click', () => {
//         menuSearch.classList.add('hidden');
//     });

//     const searchButton = document.querySelector('#search-btn');
//     let inputPlace = document.querySelector('.input-place');
//     searchButton.addEventListener('click', () => fetchLocation({
//         string: 'query',
//         value: inputPlace.value,
//     }))
// });

// const locationButton = document.querySelector('.pocision-button');
// if ("geolocation" in navigator) {
//     locationButton.addEventListener('click', getGeolocation);
// } else {
//     alert("Geolocation offline in navigator");
// }


// const fahrenheitToCelsius = degrees => (degrees - 32) * 5 / 9;