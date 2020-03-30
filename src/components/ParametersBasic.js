import React from 'react';
import Button from './Button';
import Checkboxes from './Checkboxes';
import Dropdown from './Dropdown';
import './Parameters.css';
import { baselineYears, futureYears, listMonthsTypes, listMonths, cdVarNames } from '../config';

const ParametersBasic = (props) => {

    const years = baselineYears.concat(futureYears);

    const { localClimate, searchClimate, cdVar, monthsType, months } = props;

    return (
        <div className='form-container'>
            <form className='form-inline' onSubmit={props.handleSubmit}>
                <Dropdown name='Local Climate' varName='localClimate' initialValue={localClimate} listOptions={years} handleChange={props.handleDropdownChange} />
                <Dropdown name='Search Climate' varName='searchClimate' initialValue={searchClimate} listOptions={years} handleChange={props.handleDropdownChange} />
                <Dropdown name='Variables' varName='cdVar' initialValue={cdVar} listOptions={cdVarNames} handleChange={props.handleDropdownChange} />
                <Dropdown name='Months' varName='monthsType' initialValue={monthsType} listOptions={listMonthsTypes} handleChange={props.handleDropdownChange} />
                {monthsType === 'Specific Months' &&
                    <Checkboxes name='Specific Months' varName='months' initialValue={months} listBoxeNames={listMonths} handleChange={props.handleCheckboxChange} />
                }
                <Button />
            </form>
        </div>
    );
}

export default ParametersBasic;