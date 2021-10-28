import React from 'react'
import position from '@icons/pocision.svg';

export default function NavBar({setFinderPlace, finderPlace, setCords}) {
    const handlePosition = (params) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(geo_success,geo_error);
            function geo_success(position) {
                const coords = {
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                }
                setCords(coords)
            }
            function geo_error() {
                alert("Sorry, no position available.");
            }
        } else {
            setIsLoaded(false)
            alert("Geolocation offline in navigator");
        }
    }
    
    return (
        <nav>
            <button 
                onClick={() => setFinderPlace(!finderPlace)} 
                className="search-button" id="search"
            >
                Search for places
            </button>
            <button onClick={handlePosition} className="pocision-button">
                <img fill="red" src={position} alt=""/>
            </button>
        </nav>
    )
}
