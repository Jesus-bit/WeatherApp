import {imgs} from '../index.js'
function renderTimeWeek(data) {
    let dataCut = [... data];
    dataCut.shift()
    const containerTimeWeek = document.querySelector('.time-weekend');
    const view = `
    ${dataCut.map((day) => ` 
        <div class="card-time">
            <p>${day.applicable_date}</p>
            <img src="./assets/img/${imgs[day.weather_state_abbr]}.png" alt="">
            <div class="temperatures">            
                <p class="time-temperatures">${Math.round(day.max_temp)} °C</p>
                <p class="time-temperatures">${Math.round(day.min_temp)} °C</p>
            </div>
        </div>`)
            .join('')
        
    }
    `;
    const celsiusToFahrenheit = degrees => 1.8 * degrees + 32;
    const fahrenheitToCelsius = degrees => (degrees - 32) * 5 / 9;
    const renderTemperatures = (nodeList, array) => {
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innerText = `${array[i]} °C`;
        }
    }
    
    function convertTemperatures(element1, element2) {
        if (element1.dataset.active == 'true') {
            return;
        } else {
            const temperatures = document.querySelectorAll('.time-temperatures');
            const arrayTemperatures = [... temperatures];
            let newTemperatures = arrayTemperatures.map(element => parseInt(element.innerText))
            if (element1.dataset.type == 'celsius') {
                newTemperatures = newTemperatures.map(degrees => fahrenheitToCelsius(degrees).toFixed(0));
                renderTemperatures(temperatures, newTemperatures);
            } else {
                newTemperatures = newTemperatures.map(degrees => celsiusToFahrenheit(degrees).toFixed(0));
                renderTemperatures(temperatures, newTemperatures);
            }
            element1.dataset.active = 'true';
            element1.classList.remove('button-disabled');
            element1.classList.add('button-active');
            element2.dataset.active = 'false';
            element2.classList.add('button-disabled');
            element2.classList.remove('button-active');
        }
    }
    containerTimeWeek.innerHTML = view;
    const buttonCelsius = document.querySelector('.button-celsius');
    const buttonFahrenheit = document.querySelector('.button-fahrenheit');
    if (buttonCelsius && buttonFahrenheit) {
        buttonCelsius.addEventListener('click', () => {
            convertTemperatures(buttonCelsius, buttonFahrenheit);
        });
        buttonFahrenheit.addEventListener('click', () => {
            convertTemperatures(buttonFahrenheit, buttonCelsius);
        })
    }else{
        console.log("No se puede la conversion")
    }
}
export default renderTimeWeek;