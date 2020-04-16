import React from 'react';
import Map from './Map';
import SidePanel from './SidePanel';
import ResultSummary from './ResultSummary';
import WarningBanner from './WarningBanner';
import './Outputs.css';

const Outputs = (props) => {

    return (
        <div className='output-container'>
            <SidePanel />
            <ResultSummary
                resultParams={props.resultParams} />
            <Map
                region={props.region}
                selectedPoint={props.selectedPoint}
                handleMapClick={props.handleMapClick} 
                climateGeojson={props.climateGeojson}
                cellHalfWidth={props.cellHalfWidth} />
            <WarningBanner warningMessage={props.warningMessage} />
        </div>
    );
}

export default Outputs;