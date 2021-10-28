import React from 'react'

export default function AirPressure({AirPressure}) {
    return (
        <section className="data">
            <p>Air Pressure</p>
            <div className="data-mesures">
                <span>{AirPressure}</span>
                <p>mb</p>
            </div>
        </section>
    )
}
