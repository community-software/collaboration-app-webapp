import React from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker, Popup, useMap, Tooltip } from 'react-leaflet';
import { useState, useEffect } from 'react';

const position = [
    40.18382656286346, 44.50937844086267
]

function Tag(props) {
    return <div className='tag'><p>{props.children}</p></div>
}

function PointDescriptionPopup(props) {
    const [isOut, setIsOut] = useState(false)

    function openPosition(pos) {
        window.open(`https://www.google.com/maps/place/${pos[0]},${pos[1]}`, '_blank').focus();
    }
    function handleClose() {
        setIsOut(true)
        setTimeout(() => { props.onClose() }, 500)
    }

    return <div onClick={handleClose} className={`pointPopupWrapper ${isOut && 'out'}`}>
        <div onClick={e => e.stopPropagation()} className={`pointPopupContent ${isOut && 'out'}`}>
            <h1>Биля</h1>
            <div className='tags'>
                <Tag>биллиард</Tag>
                <Tag>бар</Tag>
            </div>
            <p>Аадуок дал тум длт дкуыл тмкым кыдлм кым ыкм уыкдлс ткымкы длыти ыкдлм ык суфдл ткыдм лыткс уфад ылм ткымдулт</p>
            <p className='link' onClick={() => openPosition(position)}>🚶Маршрут</p>
        </div>
    </div>
}

function App() {
    const [height, setHeight] = useState(0);
    const [isPopup, setPopup] = useState(false);

    useEffect(() => {
        if (window.Telegram) {
            setHeight(window.Telegram.WebApp.viewportHeight);
            window.Telegram.isExpanded = true
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
