import React from 'react';
import Map from './Map';
import SidePanel from './SidePanel';
import ResultSummary from './ResultSummary';
import WarningBanner from './WarningBanner';
import './Outputs.css';


class Outputs extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        
        return (
            <div className='output-container'>
                <SidePanel />
                <ResultSummary
                    display={this.props.display}
                    colour={this.props.colour}
                    resultParams={this.props.resultParams}
                    histData={this.props.histData}
                    selectedCell={this.props.selectedCell}
                    handleColourChange={this.props.handleColourChange}
                    handleDisplayChange={this.props.handleDisplayChange}/>
                <Map
                    showLatitude={this.props.showLatitude}
                    display={this.props.display}
                    colour={this.props.colour}
                    resultParams={this.props.resultParams}
                    region={this.props.region}
                    selectedPoint={this.props.selectedPoint}
                    climateGeojson={this.props.climateGeojson}
                    cellHalfWidth={this.props.cellHalfWidth}
                    selectedCell={this.props.selectedCell}
                    handleMapClick={this.props.handleMapClick}
                    handleGeojsonClick={this.props.handleGeojsonClick}  />
                <WarningBanner warningMessage={this.props.warningMessage} />
            </div>
        );
    }
}

export default Outputs;