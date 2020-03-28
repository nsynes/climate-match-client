import React from 'react';
import Map from './Map';
import ResultsSummary from './ResultsSummary';
import './Outputs.css';

const Outputs = (props) => {

    return (
        <div className='output-container'>
            <ResultsSummary
                resultParams={props.resultParams} />
            <Map 
                selectedPoint={props.selectedPoint}
                handleMapClick={props.handleMapClick} 
                climateGeojson={props.climateGeojson}
                cellHalfWidth={props.cellHalfWidth} />
        </div>
    );
}

export default Outputs;