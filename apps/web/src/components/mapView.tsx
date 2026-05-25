import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';

export function MapView() {
    return (
        <MapContainer
            center={[-36.8485, 174.7633]}
            zoom={13}
            style={{ height: '100vh', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />

            <Circle
                center={[-36.8485, 174.7633]}
                radius={3000}
            />

            <Marker position={[-36.85, 174.76]}>
                <Popup>
                    <div>
                        <strong>Example Cafe</strong>
                        <br />
                        User A: 14 min walk
                        <br />
                        User B: 11 min walk
                        <br />
                        <a
                            href='https://www.openstreetmap.org/'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Open listing
                        </a>
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
)}