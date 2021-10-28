import React from 'react'

export default function CardTime({day, daysWeek, months, images}) {
    const date = new Date(day.dt * 1000);
    return (
        <div className="card-time">
                <p>{`${daysWeek[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`}</p>
                <img src={images[day.weather[0].main]} alt=""/>
                <div className="temperatures">
                    <p className="time-temperatures">{Math.round(day.temp.max)}°C</p>
                    <p className="time-temperatures">{Math.round(day.temp.min)}°C</p>
                </div>
        </div>
    )
}
