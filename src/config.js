export const API_Domain = process.env.NODE_ENV === 'production' ? 'https://climate-api.nicksynes.com' : 'http://localhost:4001';
export const API_URL_ClimateMatch = `${API_Domain}`;
export const URL_Map_Tiles = process.env.NODE_ENV === 'production' ? 'https://{s}.tile.osm.org/{z}/{x}/{y}.png' : 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';

export const baselineYears = ['1981-1990','1981-2010','2001-2010'];
export const futureYears = ['2021-2030','2030-2059','2031-2040','2041-2050','2050-2079','2051-2060','2061-2070','2070-2079'];
export const listMonths = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
export const listMonthsTypes = ['All','Growing Season (Apr-Sep)','Specific Months'];
export const cdVarNames = [{'full':'Precipitation, Temperature and Diurnal Range'},{'prec':'Precipitation'},{'temp':'Temperature and Diurnal Range'}]