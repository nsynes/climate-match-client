import React from 'react';
import { Pane, GeoJSON } from 'react-leaflet';

const LatitudeLinesGeoJSON = (props) => {

    const lines = [-90,-80,-70,-60,-50,-40,-30,-20,-10,0,10,20,30,40,50,60,70,80,90];
    //const lines = Array.from(Array(180).keys()).map((x) => x-90);
    const linesGeojson = lines.map((x) => {return {"type": "LineString","coordinates": [[-180,x], [180,x]]}});

    return (
        <Pane>
            <GeoJSON
                key={`latitude-lines`}
                data={linesGeojson}
                style={{color: "#000000",weight: 0.2,opacity: 1,dashArray: '5,5'}}>
            </GeoJSON>
        </Pane>
    )
}

export default LatitudeLinesGeoJSON;
