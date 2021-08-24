import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiamFzc3VsYW4iLCJhIjoiY2tyemIxdzVwMThjcjJubjh1Z21ibTI4YyJ9.NEU2B4eedUTXvYNcKEaltg';

/*
https://react-bootstrap.github.io/layout/grid/
*/
const ResourcesScreen = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <>
            <div class="col-auto my-1">
                <form>
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Pick a Category</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Select a Category</option>
                    <option value="1">Shelter</option>
                    <option value="2">Case Management</option>
                    <option value="3">Medical</option>
                    <option value="4">Legal Aid</option>
                    <option value="5">Food</option>
                    <option value="6">Trasportation</option>
                </select>
                </form>

                <form>
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Pick a Category</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option selected>Select a Category</option>
                    <option value="1">Shelter</option>
                    <option value="2">Case Management</option>
                    <option value="3">Medical</option>
                    <option value="4">Legal Aid</option>
                    <option value="5">Food</option>
                    <option value="6">Trasportation</option>
                </select>
                </form>

            </div>
            <div style={{}}>
                {/**<div className="sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>*/}
                <div ref={mapContainer} className="map-container" />
            </div>
        </>
    )
}

export default ResourcesScreen
