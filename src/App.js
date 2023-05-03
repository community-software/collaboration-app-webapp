import React from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useState, useEffect } from 'react';


function App() {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (window.Telegram) {
            setHeight(window.Telegram.WebApp.viewportHeight);
        }
    }, []);

    return (
        <div className='App' id='map'>
            <MapContainer center={[41.720085105800415, 44.79537545886635]} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
                />
                <Marker position={[41.720085105800415, 44.79537545886635]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default App;
