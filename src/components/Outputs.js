import React from 'react';
import Map from './Map';
import SidePanel from './SidePanel';
import ResultSummary from './ResultSummary';
import './Outputs.css';

const Outputs = (props) => {

    return (
        <div className='output-container'>
            <SidePanel />
            <ResultSummary
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