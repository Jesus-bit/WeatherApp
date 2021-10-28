import React from 'react'

export default function TimeHeader({data, Location, images}) {
    let place = Location.name;
    const country = Location.sys.country;
    let Time = data.current.weather[0].main;
    let temperature = data.current.temp;
    let date = data.current.dt;
    const dat = new Date(date * 1000);

    console.log("Date: "+dat.getDate()+
            "/"+(dat.getMonth()+1)+
            "/"+dat.getFullYear()+
            " "+dat.getHours()+
            ":"+dat.getMinutes()+
            ":"+dat.getSeconds());
    return (
        <section className="time">
            <img className="time-img" src={images[Location.weather[0].main]} alt={place}/>
            <div className="time-info">
                <h2 className="time-temperature">
                    {Math.round(temperature)} ° C
                </h2>
                <h3>
                    {Time}
                </h3>
                <p>Today  . {
                    dat.getDate() + 
                    "/"+(dat.getMonth()+1) +
                    "/"+dat.getFullYear()
                    }  
                </p>
                <p>
                    <span 
                        className="iconify" 
                        data-icon="carbon:location-filled" 
                        data-rotate="180deg" 
                        data-flip="horizontal,vertical"
                    >
                    </span>
                {`${place} ${country}`}
                </p>
            </div>
        </section>
    )
}
