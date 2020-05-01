import React from 'react';
import Button from './Button';
import Checkboxes from './Checkboxes';
import Dropdown from './Dropdown';
import './Parameters.css';
import { baselineYears10, baselineYears30, futureYears10, futureYears30, listMonthsTypes, listMonths, cdVarNames, listnSitesSmall, listnSitesLarge, listRegions } from '../config';

const ParametersAdvanced = (props) => {

    const years = [baselineYears10.concat(futureYears10), baselineYears30.concat(futureYears30)];

    const { localClimate, searchClimate, cdVar, monthsType, months, nSites, region } = props;
    
    return (
        <div className='form-container'>
            <form className='form-inline'>
                <Dropdown
                    key={listRegions}
                    name='Region'
                    varName='region'
                    initialValue={region}
                    listOptions={listRegions}
                    toolTipText='Which region(s) should be included in the analysis? Your chosen location and the climate analysis will be restricted to the selected region (as indicated with a dashed outline on the map).'
                    handleChange={props.handleDropdownChange} />
                <Dropdown
                    key={`local-${localClimate}`}
                    name='Local Climate'
                    varName='localClimate'
                    initialValue={localClimate}
                    groups={['10 year average','30 year average']}
                    listOptions={years}
                    toolTipText='The climate at the selected location that you want to find a match for. If you want to see the locations that will have the current climate of the selected location in the future, set this to “Current”/”2010-2020”'
                    handleChange={props.handleDropdownChange} />
                <Dropdown
                    key={`search-${searchClimate}`}
                    name='Search Climate'
                    varName='searchClimate'
                    initialValue={searchClimate}
                    groups={['10 year average','30 year average']}
                    listOptions={years}
                    toolTipText='Search climate: The climate you want to match to the selected location. If you want to see locations which currently have the climate the selected location will have in the future, set this to “Current”/”2010-2020”.'
                    handleChange={props.handleDropdownChange} />
                <Dropdown
                    key={cdVar}
                    name='Variables'
                    varName='cdVar'
                    initialValue={cdVar}
                    listOptions={cdVarNames}
                    toolTipText='Which variables should be included in the analysis?'
                    handleChange={props.handleDropdownChange} />
                <Dropdown
                    key={monthsType}
                    name='Months'
                    varName='monthsType'
                    initialValue={monthsType}
                    listOptions={listMonthsTypes}
                    toolTipText='Which months should be included in the analysis? It is recommended to include all months unless there is a clear and specific reason to use only a subset.'
                    handleChange={props.handleDropdownChange} />
                {monthsType === 'Specific Months' &&
                <Checkboxes
                    name='Specific Months'
                    varName='months'
                    initialValue={months}
                    listBoxeNames={listMonths}
                    handleChange={props.handleCheckboxChange} />
                }
                <Dropdown
                    key={nSites}
                    name='Number of matches'
                    varName='nSites'
                    initialValue={nSites}
                    listOptions={region === 'EuropeAndPNW' ? listnSitesLarge : listnSitesSmall}
                    toolTipText='How many matches should be returned?'
                    handleChange={props.handleDropdownChange} />
                
                <div style={{width: '100%', display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <div style={{flexGrow: 1}}></div>
                    <Button
                        loading={props.loading}
                        name='Calculate'
                        handleClick={props.handleCalculate} />
                    <Button
                        loading={props.loading}
                        name='Refresh'
                        handleClick={props.handleRefresh} />
                </div>
            </form>
        </div>
    );
}

export default ParametersAdvanced;