import React, {useState} from 'react';
import Header from '@containers/Header';
import NavBar from '@components/NavBar'
import TimeHeader from '@components/TimeHeader'
import FinderPlace from '@components/FinderPlace';
import TimeWeek from '@containers/TimeWeek';
import Highlights from '@containers/Highlights';
import Footer from '@components/Footer';
import { useFetchData } from '@hooks/useFetchData';
import CardTime from '@components/CardTime';
import WindStatus from '@components/WindStatus';
import Humidity from '@components/Humidity';
import Visibility from '@components/Visibility';
import AirPressure from '@components/AirPressure';
import Loading from '../components/Loading';
import Clear from '@images/Clear.png';
import Clouds from '@images/Clouds.png';
import Fog from '@images/Fog.png';
import Rain from '@images/Rain.png';

export default function App() {
    const {
        isLoaded,
        setCords,
        setQuery,
        data,
        Location
    } = useFetchData("San+Francisco");
    console.log(data)
    const [finderPlace, setFinderPlace] = useState(false);
    const daysWeek = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    let temperatures;
    let days;
    !isLoaded ? days = data.daily : null;
    !isLoaded ? temperatures = days.map(day => day.temp.max) : null;
    const images = {
        Clear,
        Clouds,
        Fog,
        Rain
    }
    return (
        <>
            {!isLoaded ? 
                <Header>
                    <NavBar setCords={setCords} setFinderPlace={setFinderPlace} finderPlace={finderPlace} />
                    <TimeHeader Location={Location} data={data} images={images} />
                    {!!finderPlace && <FinderPlace setQuery={setQuery} setFinderPlace={setFinderPlace} finderPlace={finderPlace} />}
                </Header> 
                : <Loading/>
            }
            {!isLoaded ? 
                <main>
                <TimeWeek>
                    {days?.map(timeDay => {
                        return(<CardTime 
                            key={timeDay.dt} 
                            daysWeek={daysWeek} 
                            months={months} 
                            day={timeDay}
                            images={images}
                        />)
                    }
                    )}
                </TimeWeek>
                <Highlights>
                    <WindStatus windSpeed={data.current.wind_speed} windDirectionCompass={data.current.wind_deg} />
                    <Humidity humidity={data.current.humidity} />
                    <Visibility visibility={data.current.visibility} />
                    <AirPressure AirPressure={data.current.pressure} />
                </Highlights>
                <Footer/>
            </main>: <Loading/>}
        </>
    )
}
