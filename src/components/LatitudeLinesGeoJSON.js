import React from 'react';
import { Pane, GeoJSON } from 'react-leaflet';

const LatitudeLinesGeoJSON = (props) => {

    //const lines = [-90,-80,-70,-60,-50,-40,-30,-20,-10,0,10,20,30,40,50,60,70,80,90];
    const lines = Array.from(Array(180).keys()).map((x) => x-90);
    const linesGeojson = lines.map((x) => {return {"type": "LineString","coordinates": [[-180,x], [180,x]]}});

    var setStyle = (feature) => {
        if ( feature.geometry.coordinates[0][1] === 0 ) {
            return {color: "#000000",weight: 0.8,opacity: 1}
        }
        else if ( feature.geometry.coordinates[0][1] % 10 === 0 ) {
            return {color: "#000000",weight: 0.8,opacity: 1,dashArray: '5,5'}
        } else {
            return {color: "#000000",weight: 0.2,opacity: 1,dashArray: '5,5'}
        }
        
    }

    return (
        <Pane>
            <GeoJSON
                key={`latitude-lines`}
                data={linesGeojson}
                style={setStyle} />
        </Pane>
    )
}

export default LatitudeLinesGeoJSON;
