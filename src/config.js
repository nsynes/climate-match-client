import { API_Domain } from './api-domain';

export const API_URL_ClimateMatch = `${API_Domain}`;
export const API_URL_Nominatim_Reverse = 'https://nominatim.openstreetmap.org/reverse';
export const URL_Map_Tiles = process.env.NODE_ENV === 'production' ? 'https://{s}.tile.osm.org/{z}/{x}/{y}.png' : 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

export const baselineYears10 = ['1981-1990','1991-2000','2001-2010','2011-2020'];
export const baselineYears30 = ['1981-2010','1991-2020'];
export const futureYears10 = ['2021-2030','2031-2040','2041-2050','2051-2060','2061-2070','2071-2079'];
export const futureYears30 = ['2001-2030','2011-2040','2021-2050','2031-2060','2041-2070','2051-2079'];
export const listMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
export const listMonthsTypes = ['All','Growing Season (Apr-Sep)','Specific Months'];
export const cdVarNames = [{'full':'Precipitation, Temperature and Diurnal Range'},{'prec':'Precipitation'},{'temp':'Temperature and Diurnal Range'}]
export const listnSitesSmall = [{200: 'Low: 200'},{1000: 'Medium: 1,000'},{5000: 'High: 5,000'}];
export const listnSitesLarge = [{200: 'Low: 200'},{1000: 'Medium: 1,000'},{5000: 'High: 5,000'},{10000: 'Very High: 10,000'}];
export const listRegions = [{Europe: 'Europe'}, {PNW: 'Pacific NW'}, {EuropeAndPNW: 'Europe and Pacific NW'}];
export const listModes = ['Basic','Advanced'];