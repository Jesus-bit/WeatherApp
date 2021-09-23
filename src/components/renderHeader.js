import {imgs} from '../index.js'
function renderHeader(data) {
    const abbreviation = data.consolidated_weather[0].weather_state_abbr;
    const img = imgs[abbreviation];
    const date = new Date();
    const temperature = data.consolidated_weather[0].the_temp;
    const weatherInfo = document.querySelector('.time');
    const view = `
    <img class="time-img" src="./assets/img/${img}.png" alt="">
    <div class="time-info">
        <h2 class="time-temperature">
            ${Math.round(temperature)}  ° C
        </h2>
        <h3>
            ${data.consolidated_weather[0].weather_state_name}
        </h3>
        <p>Today  .  ${date.toDateString()}</p>
        <p><span class="iconify" data-icon="carbon:location-filled" data-rotate="180deg" data-flip="horizontal,vertical"></span>${data.title}</p>
    </div>
    `;
    weatherInfo.innerHTML = view;
}
export default renderHeader;