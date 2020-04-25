import React from 'react';
import { GeoJSON } from 'react-leaflet';
import Europe from '../data/Europe.json';
import PNW from '../data/PNW.json';
import EuropeAndPNW from '../data/EuropeAndPNW.json';

const RegionGeoJSON = (props) => {

    var regionStyle = (feature) => {
        return {
            fillOpacity: 0.2,
            fillColor: '#A9A9A9',
            color: '#000000',
            stroke: true,
            weight: 0.8,
            opacity: 1,
            dashArray: '5,5'
        };
    }

    if ( props.region === 'PNW' ) {
        return (
            <GeoJSON
                data={PNW}
                style={regionStyle}>
            </GeoJSON>
        )
    } else if ( props.region === 'EuropeAndPNW' ) {
        return (
            <GeoJSON
                data={EuropeAndPNW}
                style={regionStyle}>
            </GeoJSON>
        )
    } else {
        return (
            <GeoJSON
                data={Europe}
                style={regionStyle}>
            </GeoJSON>
        )
    }
}

export default RegionGeoJSON;