import './Map.scss'
import "leaflet/dist/leaflet.css"
import { MapContainer, TileLayer} from 'react-leaflet'
import Pin from '../pin/Pin'

function Map({items}) {
    return (
        <MapContainer center={items.length === 1 ? [items[0].latitude, items[0].longitude] : [-37.81380169284076, 144.9627103717781]} zoom={12} scrollWheelZoom={false} className='map'>
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