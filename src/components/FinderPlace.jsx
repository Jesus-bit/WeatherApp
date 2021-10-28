import React, {useRef} from 'react'
import ItemPlace from './ItemPlace';

export default function FinderPlace({setFinderPlace, finderPlace, setQuery}) {
    const buttonClose = {
        color: 'white',
        position: 'absolute',
        cursor: 'pointer',
        top: '20px',
        right: '10px'
    };
    const cities = [
        'Múnich',
        'Tokio',
        'París',
        'Nueva zelanda',
        'Boston',
        'Toronto',
        'Londres', 
        'Zúrich', 
    ];
    const searchInput = useRef();
    const handleSearch = (params) => {
        const query = searchInput.current.value;
        setQuery(query);
    }
    

    return (
        <section className="places">
            <button style={buttonClose} onClick={() => setFinderPlace(!finderPlace)} >                
                <span 
                    className="iconify"
                    id="close-places" 
                    data-icon="ci:close-big" 
                    data-rotate="180deg" 
                    data-flip="horizontal,vertical"
                >
                </span>
            </button>
            <div className="place-search">
            <div className="input-search">
                <span className="iconify" data-icon="entypo:magnifying-glass" data-rotate="180deg" data-flip="horizontal,vertical"></span>
                <input className="input-place" ref={searchInput} type="text" placeholder="Search location"/>
            </div>
            <button onClick={handleSearch} id="search-btn">
                Search
            </button>
            </div>
            {cities.map(city => (
                <ItemPlace key={city} setQuery={setQuery} place={city} />
            ))
            }
        </section>
    )
}
