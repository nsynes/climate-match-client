import React from 'react';
import { Pane, GeoJSON } from 'react-leaflet';
import L from 'leaflet';

const SelectedClimateGeoJSON = (props) => {

    var setSelecteCellStyle = (feature) => {
        var geojsonMarkerOptions
        if ( feature.properties.duplicate === 1 ) {
            geojsonMarkerOptions = {
                color: '#ffffff',
                weight: 3,
                opacity: 1,
                fillOpacity: 0,
                stroke: true,
                pane: 'selected'
            };
        } else {
            geojsonMarkerOptions = {
                color: '#000000',
                weight: 2,
                opacity: 1,
                fillOpacity: 0,
                stroke: true,
                dashArray: '5,10',
                pane: 'selected'
            };
        }
        const latlng = {
            lng: props.selectedCell.coordinates[0],
            lat: props.selectedCell.coordinates[1]
        }
        const bounds = [[latlng.lat-props.cellHalfWidth, latlng.lng-props.cellHalfWidth], [latlng.lat+props.cellHalfWidth, latlng.lng+props.cellHalfWidth]];
        return L.rectangle(bounds, geojsonMarkerOptions)
    }

    const selectedCellGeojson = {
        features: [{
            geometry: {
                coordinates: props.selectedCell.coordinates,
                type: "Point"
            },
            properties: {
                cd: props.selectedCell.cd, n: props.selectedCell.n, duplicate: 1
            },
            type: "Feature"
        },{
            geometry: {
                coordinates: props.selectedCell.coordinates,
                type: "Point"
            },
            properties: {
                cd: props.selectedCell.cd, n: props.selectedCell.n, duplicate: 2
            },
            type: "Feature"
        }]
    };

    if ( props.selectedCell.n ) {
        return (
            <Pane name='selected' style={{zIndex: 401}}>
                <GeoJSON
                    key={`${props.selectedCell.n}`}
                    data={selectedCellGeojson}
                    pointToLayer={setSelecteCellStyle}>
                </GeoJSON>
            </Pane>
        );
    } else {
        return (null)
    }
    
}

export default SelectedClimateGeoJSON;