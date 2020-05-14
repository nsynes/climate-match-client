import React from 'react';
import { Pane, GeoJSON } from 'react-leaflet';
import L from 'leaflet';

import { getColorFromFraction, displayCommas } from '../helpers';

const ClimateGeoJSON = (props) => {

    const cellHalfWidth = props.cellDimensions ? props.cellDimensions[0]/2 : null;
    const cellHalfHeight = props.cellDimensions ? props.cellDimensions[1]/2 : null;

    var onEachFeature = (feature, layer) => {
        if (feature.properties && feature.properties.cd && feature.properties.n) {
            layer.bindPopup(`<b>Rank</b>: ${displayCommas(feature.properties.n)} of ${displayCommas(props.resultParams.nSites)}<br /><b>CD</b>: ${feature.properties.cd}`);
        }
    }

    var setStyle = (feature) => {

        const fraction = props.display === 'rank' ? feature.properties.n / props.resultParams.nSites : feature.properties.cd / props.resultParams.maxCD;
        const colour = getColorFromFraction(fraction, props.colour)
        
        const geojsonMarkerOptions = {
            fillColor: colour,
            fillOpacity: 0.8,
            stroke: true,
            color: colour,
            weight: 0.5,
            opacity: 0.8,
            pane: 'all'
        };

        const latlng = {
            lng: feature.geometry.coordinates[0],
            lat: feature.geometry.coordinates[1]
        }
        const bounds = [[latlng.lat-cellHalfHeight, latlng.lng-cellHalfWidth], [latlng.lat+cellHalfHeight, latlng.lng+cellHalfWidth]];
        return L.rectangle(bounds, geojsonMarkerOptions)
    };

    if ( props.climateGeojson ) {
        return (
            <Pane name='all' >
                <GeoJSON
                    key={`${props.display}-${props.colour}`}
                    data={props.climateGeojson}
                    pointToLayer={setStyle}
                    onEachFeature={onEachFeature}
                    onClick={props.handleGeojsonClick}>
                </GeoJSON>
            </Pane>
        )
    } else {
        return (null)
    }
}

export default ClimateGeoJSON;