import React from 'react';
import { Pane, GeoJSON } from 'react-leaflet';
import L from 'leaflet';
import { getColorFromFraction } from '../helpers';

const ClimateGeoJSON = (props) => {

    var onEachFeature = (feature, layer) => {
        if (feature.properties && feature.properties.cd && feature.properties.n) {
            layer.bindPopup(`<b>Rank</b>: ${feature.properties.n} of ${props.resultParams.nSites}<br /><b>CD</b>: ${feature.properties.cd}`);
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
        const bounds = [[latlng.lat-props.cellHalfWidth, latlng.lng-props.cellHalfWidth], [latlng.lat+props.cellHalfWidth, latlng.lng+props.cellHalfWidth]];
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