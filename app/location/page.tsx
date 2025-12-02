'use client';

import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Location = () => {
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        mapboxgl.accessToken = "pk.eyJ1IjoiYW50YXJpcy1tYXBib3giLCJhIjoiY2x2cGNubzF4MDBveTJtb2RtNG5zMGQ2NCJ9.MkPyl-z2FXuFSyYNwP_oaw";
        if (mapContainerRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/dark-v11',
                center: [73.8109515848718, 18.560238443384694], // starting position [lng, lat]
                zoom: 15 // starting zoom
            });
            const geojson = {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {
                            message: 'Foo',
                            imageId: 1011,
                            iconSize: [60, 60]
                        },
                        geometry: {
                            type: 'Point',
                            coordinates: [73.8109515848718, 18.56023844338469]
                        }
                    }
                ]
            };

            for (const marker of geojson.features) {
                const el = document.createElement('div');
                el.className = 'marker';
                el.style.backgroundImage = `url('/logo.svg')`;
                el.style.width = `${200}px`;
                el.style.height = `${28}px`;
                el.style.backgroundSize = '100%';
                el.style.display = 'block';
                el.style.border = 'none';
                el.style.cursor = 'pointer';
                el.style.padding = '0';

                new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates as [number, number])
                    .addTo(mapRef.current);
            }
        }
    }, []);

    return (
        <div ref={mapContainerRef} className="map-container !h-[100vh] !w-[100vw] flex items-center justify-center absolute" />
    );
}

export default Location