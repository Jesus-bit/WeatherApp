import renderData from './renderData.js'
const APIBase = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/';
async function fetchData(id) {
    const API = `${APIBase}${id}/`;
    try {
        const response = await fetch(API);
        const data = await response.json();
        console.log(data);
        renderData(data)
    } catch (error) {
        console.error(error)
    }
}


async function fetchLocation ({
    string, 
    value,
    long,
    lat
}) {
    const API = `${APIBase}search/?`;
    const API_URL = value ? `${API}${string}=${value}` : `${API}${string}=${lat},${long}`;
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data[0].woeid) {
            fetchData(data[0].woeid);
        }
    } catch (error) {
        console.error(error);
        alert("ERROR pais no identificado");
        return
    }
}



export default fetchLocation;
