import React from 'react'

export default function Highlights({children}) {
    return (
        <section className="time_Hightlights">
            <h3>Today’s Highlights </h3>
            <section className="data-cards">
                {children}
            </section>
        </section>
    )
}
