import './App.css';
import { Map, Marker } from "pigeon-maps"
import { useState, useEffect } from 'react';


function handleMarkerClick(position) {
  window.open(`https://www.google.com/maps/place/${position[0]},${position[1]}`, '_blank').focus();
}

function App() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (window.Telegram) {
      setHeight(window.Telegram.WebApp.viewportHeight);
    }
  }, []);

  return (
      <div className='App' id='map'>
        <Map height={height} defaultCenter={[41.723259484493326, 44.78024091393848]} defaultZoom={14}>
          <Marker anchor={[41.714317442452355, 44.81111111698346]} width={100} onClick={() => handleMarkerClick([41.714317442452355, 44.81111111698346])} >
            <svg width={100} height={100} viewBox="0 0 61 71" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g style={{ pointerEvents: 'auto' }}>
                <path
                  d="M52 31.5C52 36.8395 49.18 42.314 45.0107 47.6094C40.8672 52.872 35.619 57.678 31.1763 61.6922C30.7916 62.0398 30.2084 62.0398 29.8237 61.6922C25.381 57.678 20.1328 52.872 15.9893 47.6094C11.82 42.314 9 36.8395 9 31.5C9 18.5709 18.6801 9 30.5 9C42.3199 9 52 18.5709 52 31.5Z"
                  fill={'#000'}
                  stroke="white"
                  strokeWidth="4"
                />
              </g>
            </svg>
          </Marker>
        </Map>
      </div>
  );
}

export default App;
