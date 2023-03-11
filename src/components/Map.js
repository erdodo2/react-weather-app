import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import '../css/Map.css'
export default function Map() {
    const position = [39.420571, 29.947043]
    return(
       <div className="card h-96">
           <MapContainer className="h-96" center={[40.505, -100.09]} zoom={13} >

               <TileLayer
                   attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
           </MapContainer>

       </div>
    )
}