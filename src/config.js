import { testClimateData, testMinCD, testMaxCD } from './test-data';

export const API_Domain = process.env.NODE_ENV === 'production' ? 'https://climate-api.nicksynes.com' : 'http://localhost:4001';
export const API_URL_ClimateMatch = `${API_Domain}`;
export const URL_Map_Tiles = process.env.NODE_ENV === 'production' ? 'https://{s}.tile.osm.org/{z}/{x}/{y}.png' : 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

export const baselineYears10 = ['1981-1990','1991-2000','2001-2010','2011-2020'];
export const baselineYears30 = ['1981-2010','1991-2020'];
export const futureYears10 = ['2021-2030','2031-2040','2041-2050','2051-2060','2061-2070','2071-2079'];
export const futureYears30 = ['2001-2030','2011-2040','2021-2050','2031-2060','2041-2070','2051-2079'];
export const listMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
export const listMonthsTypes = ['All','Growing Season (Apr-Sep)','Specific Months'];
export const cdVarNames = [{'full':'Precipitation, Temperature and Diurnal Range'},{'prec':'Precipitation'},{'temp':'Temperature and Diurnal Range'}]
export const listnSites = [{200: 'Low'},{1000: 'Medium'},{5000: 'High'}];
export const listRegions = [{Europe: 'Europe'}, {PNW: 'Pacific NW'}, {EuropeAndPNW: 'Europe and Pacific NW'}];
export const listModes = ['Basic','Basic (old version)', 'Advanced'];


export const stateDefaults = 
{
    loading: false,
    climateGeojson: '',
    cellHalfWidth: null,
    mode: 'Basic',
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
    cellHalfWidth: 0.09999999999999999167 / 2,
    mode: 'Advanced',
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