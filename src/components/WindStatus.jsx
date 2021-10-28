import React from 'react'
import compass from '@icons/compass.svg'

export default function WindStatus({windSpeed, windDirectionCompass}) {
    const rotateCompass = `rotate(${windDirectionCompass}deg)`
    return (
        <section className="data">
            <p>Wind status</p>
            <div className="data-mesures">
                <span>{windSpeed}</span>
                <p>mph</p>
            </div>
            <div className="wind-direction">
                <div className="icon-wind">
                    <img src={compass} style={{transform: rotateCompass}}  className='navigator'/>
                </div>
            </div>
        </section>
    )
}
