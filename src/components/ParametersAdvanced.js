import React from 'react';
import Button from './Button';
import Checkboxes from './Checkboxes';
import Dropdown from './Dropdown';
import './Parameters.css';
import { baselineYears10, baselineYears30, futureYears10, futureYears30, listMonthsTypes, listMonths, cdVarNames, listnSites, listRegions } from '../config';

const ParametersAdvanced = (props) => {

    const years = baselineYears10.concat(baselineYears30, futureYears10, futureYears30);

    const { localClimate, searchClimate, cdVar, monthsType, months, nSites, region } = props;
    /*
    return (
            <div style={{textAlign: 'center'}}><br/>Advanced mode in development...<br/><br/></div>
    );
    */
   return (
        <div className='form-container'>
            <form className='form-inline'>
                <Dropdown name='Region' varName='region' initialValue={region} listOptions={listRegions} handleChange={props.handleDropdownChange} />
                <Dropdown name='Local Climate' varName='localClimate' initialValue={localClimate} listOptions={years} handleChange={props.handleDropdownChange} />
                <Dropdown name='Search Climate' varName='searchClimate' initialValue={searchClimate} listOptions={years} handleChange={props.handleDropdownChange} />
                <Dropdown name='Variables' varName='cdVar' initialValue={cdVar} listOptions={cdVarNames} handleChange={props.handleDropdownChange} />
                <Dropdown name='Months' varName='monthsType' initialValue={monthsType} listOptions={listMonthsTypes} handleChange={props.handleDropdownChange} />
                {monthsType === 'Specific Months' &&
                    <Checkboxes name='Specific Months' varName='months' initialValue={months} listBoxeNames={listMonths} handleChange={props.handleCheckboxChange} />
                }
                <Dropdown name='Number of Sites' varName='nSites' initialValue={nSites} listOptions={listnSites} handleChange={props.handleDropdownChange} />
                
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