import React from 'react'

export default function Visibility({visibility}) {
    return (
        <section className="data">
            <p>Visibility</p>
            <div className="data-mesures">
                <span>{visibility}</span>
                <p>miles</p>
            </div>
        </section>
    )
}
