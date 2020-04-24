import React from 'react';
import Map from './Map';
import SidePanel from './SidePanel';
import ResultSummary from './ResultSummary';
import WarningBanner from './WarningBanner';
import './Outputs.css';


class Outputs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: 'cd',
            colour: 'red'
        }
    }

    handleDisplayChange = (e) => {
        const { display } = this.state;
        const displayUpdate = display === 'rank' ? 'cd' : display === 'cd' ? 'cdZero' : 'rank';
        this.setState({ display: displayUpdate });
    }
    
    handleColourChange = (e) => {
        const { colour } = this.state;
        const colourUpdate = colour === 'red' ?
            'green' :
            colour === 'green' ?
            'grey' :
            'red';
        this.setState({ colour: colourUpdate });
    }

    render () {
        return (
            <div className='output-container'>
                <SidePanel />
                <ResultSummary
                    display={this.state.display}
                    colour={this.state.colour}
                    resultParams={this.props.resultParams}
                    climateGeojson={this.props.climateGeojson}
                    handleColourChange={this.handleColourChange}
                    handleDisplayChange={this.handleDisplayChange} />
                <Map
                    display={this.state.display}
                    colour={this.state.colour}
                    resultParams={this.props.resultParams}
                    region={this.props.region}
                    selectedPoint={this.props.selectedPoint}
                    handleMapClick={this.props.handleMapClick} 
                    climateGeojson={this.props.climateGeojson}
                    cellHalfWidth={this.props.cellHalfWidth} />
                <WarningBanner warningMessage={this.props.warningMessage} />
            </div>
        );
    }
}

export default Outputs;