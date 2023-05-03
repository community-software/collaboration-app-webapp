import React from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup, useMap, Tooltip } from 'react-leaflet';
import { useState, useEffect } from 'react';

function PointDescriptionPopup(props) {
    const [isOut, setIsOut] = useState(false)

    function handleClose() {
        setIsOut(true)
        setTimeout(() => { props.onClose() }, 500)
    }

    return <div onClick={handleClose} className={`pointPopupWrapper ${isOut && 'out'}`}>
        <div onClick={e => e.stopPropagation()} className={`pointPopupContent ${isOut && 'out'}`}></div>
    </div>
}

function App() {
    const [height, setHeight] = useState(0);
    const [isPopup, setPopup] = useState(false);

    useEffect(() => {
        if (window.Telegram) {
            setHeight(window.Telegram.WebApp.viewportHeight);
        }
    }, []);

    return (
        <div className='App' id='map'>
            <MapContainer zoomControl={false} center={[41.720085105800415, 44.79537545886635]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                />
                <Marker
                    position={[41.720085105800415, 44.79537545886635]}
                    eventHandlers={{
                        click: () => setPopup(true)
                    }}
                >
                    <Tooltip permanent>Tooltip for </Tooltip>
                </Marker>
            </MapContainer>
            {isPopup && <PointDescriptionPopup onClose={() => setPopup(false)}></PointDescriptionPopup>}
        </div>
    );
}

export default App;
