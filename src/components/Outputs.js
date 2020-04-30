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
            colour: 'red',
            selectedCell: {}
        }
    }

    handleCheckMapClick = (e) => {
        this.setState({ selectedCell: {} });
        this.props.handleMapClick(e)
    }

    handleGeojsonClick = (e) => {
        var selectedCell = {
            n: e.layer.feature.properties.n,
            cd: e.layer.feature.properties.cd,
            coordinates: e.layer.feature.geometry.coordinates
        }
        this.setState({selectedCell})
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
                    display={this.props.display}
                    colour={this.state.colour}
                    resultParams={this.props.resultParams}
                    histData={this.props.histData}
                    selectedCell={this.state.selectedCell}
                    handleColourChange={this.handleColourChange}
                    handleDisplayChange={this.props.handleDisplayChange}/>
                <Map
                    display={this.props.display}
                    colour={this.state.colour}
                    resultParams={this.props.resultParams}
                    region={this.props.region}
                    selectedPoint={this.props.selectedPoint}
                    climateGeojson={this.props.climateGeojson}
                    cellHalfWidth={this.props.cellHalfWidth}
                    selectedCell={this.state.selectedCell}
                    handleMapClick={this.handleCheckMapClick}
                    handleGeojsonClick={this.handleGeojsonClick}  />
                <WarningBanner warningMessage={this.props.warningMessage} />
            </div>
        );
    }
}

export default Outputs;