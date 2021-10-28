import React, {useState, useEffect} from 'react';
import axios from 'axios';

export function useFetchData(props = "Mexico") {
    const [isLoaded, setIsLoaded] = useState(true);
    const [query, setQuery] = useState(props)
    const [cords, setCords] = useState({
        lat: 56, 
        long: -106
    })
    const [data, setData] = useState(null);
    const [Location, setLocation] = useState(null);
    const URL_BASE = "https://api.openweathermap.org/data/2.5/";
    let API_Query;    
    let API_Cords;
    const urlApiWeather = ({query, lat, long}) => query 
        ? API_Query = `${URL_BASE}weather?q=${query}&appid=e05cd101672fb86b80edf1e0c7a0db87`
        : API_Query = `${URL_BASE}weather?lat=${lat}&lon=${long}&appid=e05cd101672fb86b80edf1e0c7a0db87`;
    const urlApiCords = ({lat,long}) => ( API_Cords = `${URL_BASE}onecall?lat=${lat}&lon=${long}&units=metric&exclude=minutely&appid=e05cd101672fb86b80edf1e0c7a0db87`)
    
    useEffect(async () => {
        urlApiCords({
            lat: cords.lat,
            long: cords.long
        })
        const responseData = await axios(API_Cords)
        responseData.data.daily.shift();
        setData(responseData.data)

        urlApiWeather({
            lat: responseData.data.lat,
            long: responseData.data.lon
        }) 
        const responseLocation = await axios(API_Query)
        setLocation(responseLocation.data)
        setIsLoaded(false)
    }, [cords])
    useEffect(async () => {
        urlApiWeather({query: query});
        const responseLocation = await axios(API_Query);
        setLocation(responseLocation.data);
        urlApiCords({
            lat: responseLocation.data.coord.lat,
            long: responseLocation.data.coord.lon
        })
        const responseData = await axios(API_Cords)
        responseData.data.daily.shift();
        setData(responseData.data)
        setIsLoaded(false)
    }, [query]);
    return {
        isLoaded,
        setCords,
        setQuery,
        data,
        Location
    };
}
