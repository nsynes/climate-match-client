import React from 'react';
import Button from './Button';
import Checkboxes from './Checkboxes';
import Dropdown from './Dropdown';
import './Parameters.css';
import { baselineYears, futureYears, listMonthsTypes, listMonths, cdVarNames, listnSites } from '../config';

const ParametersAdvanced = (props) => {

    const years = baselineYears.concat(futureYears);

    const { localClimate, searchClimate, cdVar, monthsType, months, nSites } = props;

    /*
    return (
            <div style={{textAlign: 'center'}}><br/>Advanced mode in development...<br/><br/></div>
    );
    */
   return (
        <div className='form-container'>
            <form className='form-inline'>
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
                        name='Calculate'
                        handleClick={props.handleCalculate} />
                    <Button
                        name='Refresh'
                        handleClick={props.handleRefresh} />
                </div>
            </form>
        </div>
   );
}

export default ParametersAdvanced;