import renderHeader from '../components/renderHeader.js';
import renderTimeWeek from '../components/renderTimeWeek.js';
import renderHightlights from '../components/renderHightlights.js'
function renderData(data) {
    renderHeader(data);
    renderTimeWeek(data.consolidated_weather);
    renderHightlights(data.consolidated_weather[0]);
}
export default renderData;