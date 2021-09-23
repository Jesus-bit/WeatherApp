import fetchData from './fetchLocation.js'
function getGeolocation() {
    navigator.geolocation.getCurrentPosition(geo_success,geo_error);
    function geo_success(position) {
        console.log(position.coords.latitude, position.coords.longitude);
        fetchData({
            string: 'lattlong',
            long: position.coords.longitude,
            lat: position.coords.latitude,
        });
    }
    function geo_error() {
        alert("Sorry, no position available.");
    }
};
export default getGeolocation;