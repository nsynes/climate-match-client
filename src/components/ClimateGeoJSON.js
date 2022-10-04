import React from 'react';
import { Pane, GeoJSON } from 'react-leaflet';
import L from 'leaflet';

import { accurateRound, displayCommas, getColorFromFraction, highlightColour } from '../helpers';

const ClimateGeoJSON = (props) => {

    const cellHalfWidth = props.cellDimensions ? props.cellDimensions[0]/2 : null;
    const cellHalfHeight = props.cellDimensions ? props.cellDimensions[1]/2 : null;

    var onEachFeature = (feature, layer) => {
        if (feature.properties && feature.properties.cd && feature.properties.n) {
            layer.bindPopup(`<b>Rank</b>: ${displayCommas(feature.properties.n)} of ${displayCommas(props.resultParams.nSites)}<br /><b>CD</b>: ${feature.properties.cd}`);
        }
    }

    var setStyle = (feature, highlightBin) => {

        var colour = "";
        var opacity = 0.8;

        const fraction = props.display === 'rank' ? feature.properties.n / props.resultParams.nSites : feature.properties.cd / props.resultParams.maxCD;
        colour = getColorFromFraction(fraction, props.colour)

        highlightBin.forEach((bin) => {
            if (bin[0] !== null && feature.properties.cd >= accurateRound(bin[0], 4) && feature.properties.cd < accurateRound(bin[1], 4)) {
                colour = highlightColour(props.colour);
                opacity=1;
            }
        })

        const geojsonMarkerOptions = {
            fillColor: colour,
            fillOpacity: opacity,
            stroke: true,
            color: colour,
            weight: 0.5,
            opacity: opacity,
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
                    key={`${props.display}-${props.colour}-${props.highlightBin}`}
                    data={props.climateGeojson}
                    pointToLayer={(feature) => setStyle(feature, props.highlightBin)}
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