import React, { useEffect, useRef } from 'react';

const MapSection: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mapRef.current) {
            const map = new google.maps.Map(mapRef.current, {
                center: { lat: 10.762622, lng: 106.660172 }, // Replace with the latitude and longitude of your IT center
                zoom: 15,
            });

            new google.maps.Marker({
                position: { lat: 10.762622, lng: 106.660172 }, // Replace with the latitude and longitude of your IT center
                map,
                title: 'IT Center',
            });
        }
    }, []);

    return (
        <div style={{ width: '100%', height: '75vh' }} ref={mapRef}></div>
    );
};

export default MapSection;