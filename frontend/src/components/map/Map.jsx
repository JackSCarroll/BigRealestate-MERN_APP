import './Map.scss'
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer} from 'react-leaflet'
import Pin from '../pin/Pin'

function Map({items}) {
    return (
        <MapContainer center={[-37.839120887556206, 145.02333252012434]} zoom={12} scrollWheelZoom={false} className='map'>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {items.map(item => (
                <Pin item={item} key={item.id}/>
            ))}
        </MapContainer>
    )
}

export default Map