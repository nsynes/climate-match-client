import React from 'react';
import fetch from 'isomorphic-unfetch';
import Outputs from './components/Outputs';
import Inputs from './components/Inputs';
import Loading from './components/Loading';
import { API_URL_ClimateMatch } from './config';
import{ handleResponse } from './helpers';
require('es6-promise').polyfill();


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            climateGeojson: '',
            cellHalfWidth: null,
            mode: 'basic',
            params: {
                selectedPoint: null,
                localClimate: '',
                searchClimate: '',
                monthsType: 'All',
                months: [true,true,true,true,true,true,true,true,true,true,true,true],
                cdVar: 'full',
                nSites: 5000
            },
            warningMessage: '',
            resultParams: {}
        };
    }

    handleModeChange = (e) => {
        this.setState({
            mode: e.target.value
        })
    }

    handleMapClick = (e) => {
        if ( !this.state.loading && this.state.climateGeojson === '' ) {
            var { params } = this.state;
            params.selectedPoint = e.latlng;
            this.setState({
                params: params
            });
        }
    }

    handleDropdownChange = (e, name) => {
        var { params } = this.state;
        params[name] = e.target.value;
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

    handleRefresh = () => {
        window.location.reload();
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
            this.fetchClimateMatch()
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
            resultParams: {}
        })

        var { selectedPoint, localClimate, searchClimate, months, cdVar, nSites } = this.state.params;

        months = months.map((b, i) => b ? i+1 : null).filter((m) => m)

        fetch(`${API_URL_ClimateMatch}?lat=${selectedPoint.lat}&lon=${selectedPoint.lng}&m=${months}&fc=${localClimate}&lc=${searchClimate}&v=${cdVar}&n=${nSites}`)
        .then(handleResponse)
        .then((result) => {
            if ( result ) {
                const resultParams = {
                    selectedPoint: selectedPoint,
                    localClimate: localClimate,
                    searchClimate: searchClimate,
                    months: months,
                    cdVar: cdVar,
                    nSites: nSites
                }
                this.setState({
                    resultParams: resultParams,
                    climateGeojson: result,
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
        return (
            <div>
                { this.state.loading && <Loading
                    width='48px'
                    height='48px'/> }
                <Outputs
                    selectedPoint={this.state.params.selectedPoint}
                    resultParams={this.state.resultParams}
                    climateGeojson={this.state.climateGeojson}
                    cellHalfWidth={this.state.cellHalfWidth}
                    warningMessage={this.state.warningMessage}
                    handleMapClick={this.handleMapClick} />
                <Inputs
                    mode={this.state.mode}
                    params={this.state.params}
                    handleModeChange={this.handleModeChange}
                    handleDropdownChange={this.handleDropdownChange}
                    handleCheckboxChange={this.handleCheckboxChange}
                    handleCalculate={this.handleCalculate}
                    handleRefresh={this.handleRefresh} />
          </div>
        );
    }
}


export default App;
