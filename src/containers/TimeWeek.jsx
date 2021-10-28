import React from 'react'

export default function TimeWeek({children}) {
    return (
        <>
            <div className="measures">
                <button className="button-celsius button-active" data-active="true" data-type="celsius">
                    <span className="iconify" data-icon="mdi:temperature-celsius" data-rotate="180deg" data-flip="horizontal,vertical"></span>
                </button>
                <button className="button-fahrenheit button-disabled" data-active="false" data-type="fahrenheit">
                <span className="iconify" data-icon="mdi:temperature-fahrenheit" data-rotate="180deg" data-flip="horizontal,vertical"></span>
                </button>
            </div>
            <section className="time-weekend">
                {children}
            </section>
        </>
    )
}
