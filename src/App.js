import React from 'react';
import HelmetTags from './components/HelmetTags';
import Outputs from './components/Outputs';
import Inputs from './components/Inputs';
import Logos from './components/Logos';
import Loading from './components/Loading';
import { API_URL_ClimateMatch, stateDefaults, stateTestResults } from './config';
import { handleResponse, getHistogramData } from './helpers';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = stateDefaults;//stateTestResults
    }

    resetDefaults = () => {
        var { params } = this.state;
        params.nSites = stateDefaults.params.nSites;
        params.region = stateDefaults.params.region;
        this.setState({
            params: params
        });
    }

    handleModeChange = (value) => {
        const mode = value;
        if ( mode === 'Basic' ) {
            this.resetDefaults()
        }
        this.setState({
            mode: mode
        })
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

    handleMapClick = (e) => {
        this.setState({ selectedCell: {} });
        if ( !this.state.loading && this.state.climateGeojson === '' ) {
            var { params } = this.state;
            params.selectedPoint = e.latlng;
            this.setState({
                params: params
            });
        }
    }

    handleGeojsonClick = (e) => {
        var selectedCell = {
            n: e.layer.feature.properties.n,
            cd: e.layer.feature.properties.cd,
            coordinates: e.layer.feature.geometry.coordinates
        }
        this.setState({selectedCell})
    }

    handleShowLatitude = () => {
        const { showLatitude } = this.state;
        this.setState({ showLatitude: !showLatitude })
    }

    handleDropdownChange = (value, name) => {
        var { params } = this.state;
        params[name] = value;
        // Group control for growing season selection
        if ( name === 'monthsType' ) {
            if ( params[name] === 'All' ) {
                params['months'] = [true,true,true,true,true,true,true,true,true,true,true,true];
            } else if ( params[name] === 'Growing Season (Apr-Sep)' ) {
                params['months'] = [false,false,false,true,true,true,true,true,true,false,false,false];
            }
        }
        this.setState({
            params: params
        });
    }

    handleCheckboxChange = (e, name) => {
        var { params } = this.state;
        params[name] = this.state.params[name];
        params[name][e.target.value-1] = e.target.checked;
        this.setState({
            params: params
        });
    }

    handleDisplayChange = (e) => {
        const { display } = this.state;
        const displayUpdate = display === 'rank' ? 'cd' : 'rank';
        this.setState({ display: displayUpdate });
    }

    handleRefresh = (e) => {
        e.preventDefault();

        const { params } = this.state;
        params.selectedPoint = null;

        this.setState({
            climateGeojson: '',
            warningMessage: '',
            resultParams: {},
            params: params
        })
    }

    handleCalculate = (e) => {
        e.preventDefault();

        const { params } = this.state;
        var nParams = 0, nParamsSet = 0;
        for (var paramName in params) {
            if (Object.prototype.hasOwnProperty.call(params, paramName)) {
                if ( params[paramName] !== '' && params[paramName] !== null ) {
                    nParamsSet += 1;
                }
                nParams += 1;
            }
        }
        if ( nParamsSet === nParams ) {
            if ( params.months.filter(v => v).length > 1 ) {
                this.fetchClimateMatch()
            } else {
                // Need at least two months since the calculations include division by (max - min) of month values
                this.setState({warningMessage: 'Cannot match climate for a single month.'})
            }
            
        } else {
            var warningMessage = '';
            if (nParamsSet === nParams - 1 && !params.selectedPoint) {
                warningMessage = 'Select a location on the map.'
            } else {
                warningMessage = 'Ensure all parameters have been set.'
            }
            this.setState({warningMessage: warningMessage})
        }
    }

    fetchClimateMatch = () => {

        this.setState({
            climateGeojson: '',
            loading: true,
            warningMessage: '',
            resultParams: {},
            selectedCell: {}
        })

        var { selectedPoint, localClimate, searchClimate, months, cdVar, nSites, region } = this.state.params;

        months = months.map((b, i) => b ? i+1 : null).filter((m) => m)

        fetch(`${API_URL_ClimateMatch}?lat=${selectedPoint.lat}&lon=${selectedPoint.lng}&m=${months}&fc=${localClimate}&lc=${searchClimate}&v=${cdVar}&n=${nSites}&r=${region}`)
        .then(handleResponse)
        .then((geojson) => {
            if ( geojson ) {
                const minCD = Math.min.apply(Math, geojson.features.map(function(o) { return o.properties.cd; }))
                const maxCD = Math.max.apply(Math, geojson.features.map(function(o) { return o.properties.cd; }))
                const resultParams = {
                    region: region,
                    selectedPoint: selectedPoint,
                    localClimate: localClimate,
                    searchClimate: searchClimate,
                    months: months,
                    cdVar: cdVar,
                    nSites: nSites,
                    minCD: minCD,
                    maxCD: maxCD
                }
                this.setState({
                    resultParams: resultParams,
                    climateGeojson: geojson,
                    cellHalfWidth: 0.09999999999999999167 / 2,
                    loading: false
                })
            } else {
                this.setState({
                    resultParams: {},
                    climateGeojson: '',
                    cellHalfWidth: null,
                    loading: false
                })
            }
        })
        .catch((error) => {
            this.setState({
                resultParams: {},
                climateGeojson: '',
                cellHalfWidth: null,
                loading: false,
                warningMessage: 'No results for selected location.'
            })
        });
    }

    render() {

        const { loading, params, climateGeojson, resultParams, mode, display, cellHalfWidth, warningMessage } = this.state;
        const histData = climateGeojson ? getHistogramData(climateGeojson, resultParams.minCD, resultParams.maxCD, resultParams.nSites, display, 20) : null;
        
        return (
            <div>
                <HelmetTags />
                { loading && <Loading
                    width='48px'
                    height='48px'/> }
                <Outputs
                    showLatitude={this.state.showLatitude}
                    colour={this.state.colour}
                    region={params.region}
                    selectedPoint={params.selectedPoint}
                    resultParams={resultParams}
                    climateGeojson={climateGeojson}
                    selectedCell={this.state.selectedCell}
                    display={display}
                    histData={histData}
                    cellHalfWidth={cellHalfWidth}
                    warningMessage={warningMessage}
                    handleGeojsonClick={this.handleGeojsonClick} 
                    handleColourChange={this.handleColourChange}
                    handleMapClick={this.handleMapClick}
                    handleDisplayChange={this.handleDisplayChange} />
                <Inputs
                    loading={loading}
                    mode={mode}
                    params={params}
                    showLatitude={this.state.showLatitude}
                    handleShowLatitude={this.handleShowLatitude}
                    handleModeChange={this.handleModeChange}
                    handleDropdownChange={this.handleDropdownChange}
                    handleCheckboxChange={this.handleCheckboxChange}
                    handleCalculate={this.handleCalculate}
                    handleRefresh={this.handleRefresh} />
                <Logos />
          </div>
        );
    }
}

export default App;