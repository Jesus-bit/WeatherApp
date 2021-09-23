function renderHightlights(data) {
    const containerHightlights = document.querySelector('.time_Hightlights');
    const visibility = data.visibility;
    const windSpeed = data.wind_speed;
    const windDirection = data.wind_direction;
    const view = `
    <h3>Today’s Hightlights </h3>
    <section class="data-cards">
        <section class="data">
        <p>Wind status</p>
            <div class="data-mesures">
                <span>${windSpeed.toFixed(2)}</span>
                <p>mph</p>
            </div>
            <div class="wind-direction">
                <div class="icon-wind">
                    <img src="./assets/icons/compass.svg" class="navigator" style="transform: rotate(${windDirection.toFixed(1)}deg);">
                </div>
                <p>${data.wind_direction_compass}</p>
            </div>
        </section>
        <section class="data">
            <p>Humidity</p>
            <div class="data-mesures">
                <span>${data.humidity}</span>
                <p>%</p>
            </div>
            <div class="percentages">
            <p>0</p>
            <p>50</p>
            <p>100</p>
            </div>
            <div class="temperature-bar">
                <div class="temperature-bar-content" style="width: ${data.humidity}%;">
                
                </div>
            </div>
        </section>
        <section class="data">
        <p>Visibility</p>
        <div class="data-mesures">
            <span>${visibility.toFixed(1)}</span>
            <p>miles</p>
        </div>
        </section>
        <section class="data">
        <p>Air Pressure</p>
        <div class="data-mesures">
            <span>${data.air_pressure}</span>
            <p>mb</p>
        </div>
        </section>
    </section>
        `;
    containerHightlights.innerHTML = view;
    console.log(data);
}
export default renderHightlights;