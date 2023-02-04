import './App.css';
import { Map, Marker } from "pigeon-maps"
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
        <Map height={height} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
          <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
      </div>
  );
}

export default App;
