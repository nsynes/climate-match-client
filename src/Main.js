import React from 'react';

import HelmetTags from './components/HelmetTags';
import Panel from './components/Panel';
import PanelTabs from './components/PanelTabs';
import Tool from './components/Tool';
import Results from './components/Results';
import Help from './components/Help';
import About from './components/About';
import Map from './components/Map';
import Loading from './components/Loading';
import { API_URL_ClimateMatch, API_URL_Nominatim_Reverse } from './config';
import { stateDefaults } from './defaults';//stateTestResults } from './defaults';
import { calcBinStartEnd, handleResponse } from './helpers';


class Main extends React.Component {

    constructor(props) {
        super(props);

        this.state = stateDefaults; // stateTestResults //stateDefaults

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

        const { selectedCell } = this.state;
        if ( selectedCell && selectedCell.coordinates ) {
            this.setState({ selectedCell: {} });
        }
        if ( !this.state.loading && this.state.climateGeojson === '' ) {
            var { params } = this.state;
            params.selectedPoint = e.latlng;
            // this.fetchLocationName(params.selectedPoint);
            this.setState({ params: params });
        }
    }

    handleGeojsonClick = (e) => {
        var selectedCell = {
            n: e.layer.feature.properties.n,
            cd: e.layer.feature.properties.cd,
            coordinates: e.layer.feature.geometry.coordinates
        }
        this.setState({ selectedCell })
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
        // Control different defaults for nSites depending on region
        if ( name === 'region' ) {
            params.nSites = value === 'EuropeAndPNW' ? 10000 : 5000;
        }
        this.setState({ params: params });
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

    handleBinSelect = (e) => {

        if ( e && e.points && e.points.length > 0 ) {

            const newBinNum = e.points.map(x => x.binNumber);

            const dataStart = e.points[0].data.xbins.start;
            const binWidth = e.points[0].data.xbins.size;
            var highlightBin = []

            newBinNum.forEach((bin) => {
                const [binStart, binEnd] = calcBinStartEnd(bin, binWidth, dataStart);
                highlightBin.push([binStart, binEnd])
            })
            this.setState({highlightBinNum: newBinNum, highlightBin: highlightBin})
        }
    }

    handleBinChange = (e, histoClicked=true) => {

        if (histoClicked) {
            const clickedBinNum = e.points[0].binNumber;
            const dataStart = e.points[0].data.xbins.start;
            const binWidth = e.points[0].data.xbins.size;

            var { highlightBin, highlightBinNum } = this.state;
            var binStart = null, binEnd = null;
            
            if ( e.event.shiftKey && highlightBinNum && highlightBinNum.length > 0 ) {
                const previousBinNum = highlightBinNum[0];
                var start, end = 0;
                if (clickedBinNum < previousBinNum) {
                    start = clickedBinNum;
                    end = previousBinNum;
                } else {
                    start = previousBinNum + 1;
                    end = clickedBinNum;
                }
                for (var bin=start; bin<=end; bin++) {
                    if ( !highlightBinNum.includes(bin) ) {
                        highlightBinNum.push(bin);
                        [binStart, binEnd] = calcBinStartEnd(bin, binWidth, dataStart);
                        highlightBin.push([binStart, binEnd]);
                    }
                }
            } else {
                [binStart, binEnd] = calcBinStartEnd(clickedBinNum, binWidth, dataStart);
                highlightBinNum = [clickedBinNum];
                highlightBin = [[binStart, binEnd]];
            }
        } else {
            highlightBin = []
            highlightBinNum = []
        }
        this.setState({ highlightBin: highlightBin, highlightBinNum: highlightBinNum });
    }

    handleTabClick = (side, tabName) => {
        var { panel } = this.state;
        const update = tabName === panel[side] ? '' : tabName;
        panel[side] = update;
        if ( window.innerWidth <= 800 ) {
            const oppositeSide = side === 'left' ? 'right' : 'left';
            panel[oppositeSide] = '';
        }
        this.setState({ panel })
    }

    handleLanguageChange = (e) => {
        this.setState({language: e.target.value})
    }

    handleRefresh = (e) => {
        e.preventDefault();

        var { params } = this.state;
        params.selectedPoint = null;

        var panel = this.state.panel;
        if ( panel['right'] === 'Results' ) panel['right'] = '';

        this.setState({
            climateGeojson: '',
            highlightBinNum: [],
            highlightBin: [],
            warningMessage: '',
            resultParams: {},
            params: params,
            panel: panel
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

    fetchLocationName = (selectedPoint) => {
        fetch(`${API_URL_Nominatim_Reverse}?lat=${selectedPoint.lat}&lon=${selectedPoint.lng}&format=json`)
        .then(handleResponse)
        .then((json) => {
            console.log(json) //suburb, city or county, country
        })
    }

    fetchClimateMatch = () => {

        var panel = this.state.panel
        if ( panel['right'] === 'Results' ) panel['right'] = '';

        this.setState({
            climateGeojson: '',
            loading: true,
            warningMessage: '',
            resultParams: {},
            highlightBinNum: [],
            highlightBin: [],
            selectedCell: {},
            panel: panel
        })

        var { selectedPoint, localClimate, searchClimate, months, cdVar, nSites, region } = this.state.params;

        months = months.map((b, i) => b ? i+1 : null).filter((m) => m)

        fetch(`${API_URL_ClimateMatch}?lat=${selectedPoint.lat}&lon=${selectedPoint.lng}&m=${months}&lc=${localClimate}&sc=${searchClimate}&v=${cdVar}&n=${nSites}&r=${region}`)
        .then(handleResponse)
        .then((response) => {
            const geojson = response.geojsonData;
            const cellDimensions = response.pixelShape;
            const downloadPath = response.downloadPath;
            const downloadBordersPath = response.downloadBordersPath;
            
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
                var panel = this.state.panel
                panel['right'] = 'Results';
                panel['left'] = '';
                this.setState({
                    resultParams: resultParams,
                    climateGeojson: geojson,
                    cellDimensions: cellDimensions,
                    downloadPath: downloadPath,
                    downloadBordersPath: downloadBordersPath,
                    loading: false,
                    panel: panel
                })
            } else {
                console.log('geojson data not found in API response')
                this.setState({
                    resultParams: {},
                    climateGeojson: '',
                    cellDimensions: null,
                    loading: false
                })
            }
        })
        .catch((error) => {
            console.log('error', error)
            this.setState({
                resultParams: {},
                climateGeojson: '',
                cellDimensions: null,
                loading: false,
                warningMessage: error.message || 'No results for selected location.'
            })
        });
    }

    render() {

        const { loading, params, showLatitude, selectedCell, climateGeojson, downloadPath, downloadBordersPath, resultParams, panel, language, mode, display, colour, cellDimensions, highlightBin, highlightBinNum, warningMessage } = this.state;
        
        return (
            <div>
                <HelmetTags />
                { loading &&
                <Loading /> }
                <PanelTabs 
                    side={'left'}
                    tabs={['Tool','About']}
                    show={panel.left}
                    handleTabClick={this.handleTabClick} />
                <PanelTabs 
                    side={'right'}
                    tabs={resultParams && resultParams.searchClimate ? ['Results','Help'] : ['Help']}
                    show={panel.right}
                    handleTabClick={this.handleTabClick} />
                <Panel
                    side={'left'}
                    show={panel.left} 
                    handleTabClick={this.handleTabClick}>
                    {panel.left === 'Tool' &&
                    <Tool
                        loading={loading}
                        mode={mode}
                        showLatitude={showLatitude}
                        warningMessage={warningMessage}
                        params={params}
                        handleModeChange={this.handleModeChange}
                        handleDropdownChange={this.handleDropdownChange}
                        handleCheckboxChange={this.handleCheckboxChange}
                        handleShowLatitude={this.handleShowLatitude}
                        handleCalculate={this.handleCalculate}
                        handleRefresh={this.handleRefresh} />}
                    {panel.left === 'About' &&
                    <About />}
                </Panel>
                <Panel
                    side={'right'}
                    show={panel.right} 
                    handleTabClick={this.handleTabClick}>
                    {panel.right === 'Help' && 
                    <Help
                        language={language}
                        handleLanguageChange={this.handleLanguageChange} />}
                    {panel.right === 'Results' &&
                    <Results
                        display={display}
                        colour={colour}
                        resultParams={resultParams}
                        climateGeojson={climateGeojson}
                        downloadPath={downloadPath}
                        downloadBordersPath={downloadBordersPath}
                        selectedCell={selectedCell}
                        highlightBinNum={highlightBinNum}
                        handleBordersCheckbox={this.handleBordersCheckbox}
                        handleColourChange={this.handleColourChange}
                        handleDisplayChange={this.handleDisplayChange}
                        handleBinChange={this.handleBinChange}
                        handleBinSelect={this.handleBinSelect}  />}
                </Panel>
                <Map
                    showLatitude={showLatitude}
                    display={display}
                    colour={colour}
                    resultParams={resultParams}
                    region={params.region}
                    selectedPoint={params.selectedPoint}
                    climateGeojson={climateGeojson}
                    cellDimensions={cellDimensions}
                    selectedCell={selectedCell}
                    highlightBin={highlightBin}
                    handleMapClick={this.handleMapClick}
                    handleGeojsonClick={this.handleGeojsonClick} />
          </div>
        );
    }
}

export default Main;