import './App.css';
import { Map, Marker } from "pigeon-maps"

function App() {
    return (
      <div className='App' id='map'>
        <Map height={100} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
          <Marker width={50} anchor={[50.879, 4.6997]} />
        </Map>
      </div>
  );
}

export default App;
