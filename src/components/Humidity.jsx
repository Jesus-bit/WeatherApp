import React from 'react'

export default function Humidity({humidity}) {
    return (
        <section className="data">
            <p>Humidity</p>
            <div className="data-mesures">
                <span>{humidity}</span>
                <p>%</p>
            </div>
            <div className="percentages">
                <p>0</p>
                <p>50</p>
                <p>100</p>
            </div>
            <div className="temperature-bar">
                <div style={{width: humidity + '%'}} className="temperature-bar-content">
                </div>
            </div>
        </section>
    )
}
