import { testClimateData, testMinCD, testMaxCD } from './test-data';

export const stateDefaults = 
{
    loading: false,
    climateGeojson: '',
    cellDimensions: null,
    downloadPath: '',
    mode: 'Basic',
    display: 'cd',
    colour: 'red',
    highlightBinNum: null,
    highlightBin: [null, null],
    selectedCell: {},
    showLatitude: false,
    panel: { left: 'Tool', right: ''},
    language: 'english',
    params: {
        selectedPoint: null,
        localClimate: '',
        searchClimate: '',
        monthsType: 'All',
        months: [true,true,true,true,true,true,true,true,true,true,true,true],
        cdVar: 'full',
        nSites: 5000,
        region: 'Europe'
    },
    resultParams: {},
    warningMessage: ''
};

export const stateTestResults =  
{
    loading: false,
    climateGeojson: testClimateData,
    cellDimensions: [0.09999999999999999167 / 2, 0.09999999999999999167 / 2],
    downloadPath: '',
    mode: 'Advanced',
    display: 'cd',
    colour: 'red',
    selectedCell: {},
    showLatitude: false,
    panel: { left: '', right: 'Results'},
    language: 'english',
    params: {
        selectedPoint: {lat: 51.516198091721684, lng: -0.17578125},
        localClimate: '1981-2010',
        searchClimate: '2041-2070',
        monthsType: 'All',
        months: [true,true,true,true,true,true,true,true,true,true,true,true],
        cdVar: 'full',
        nSites: 1000,
        region: 'Europe'
    },
    resultParams: {
        selectedPoint: {lat: 51.516198091721684, lng: -0.17578125},
        region: 'Europe',
        localClimate: '1981-2010',
        searchClimate: '2041-2070',
        monthsType: 'All',
        months: [1,2,3,4,5,6,7,8,9,10,11,12],
        cdVar: 'full',
        nSites: 1000,
        minCD: testMinCD,
        maxCD: testMaxCD
    },
    warningMessage: ''
}