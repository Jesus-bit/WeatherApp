import React from 'react'

export default function ItemPlace({place, setQuery}) {
  return (
    <div className="item-place">
      <button onClick={() => setQuery(place)} className="item-place-button">
        <p>{place}</p>
      </button>
        <span className="iconify" data-icon="fe:arrow-right" data-rotate="180deg" data-flip="horizontal,vertical"></span>
    </div>
  )
}
