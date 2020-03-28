import React from 'react';
import Dropdown from './Dropdown';
import Checkboxes from './Checkboxes';
import { baselineYears, futureYears, listMonths, cdVarNames } from '../config';

const ParametersBasic = (props) => {

    const years = baselineYears.concat(futureYears)

    return (
            <form className='form-inline' onSubmit={props.handleSubmit}>
                <Dropdown name='Local Climate' varName='localClimate' initialValue={props.localClimate} listOptions={years} handleChange={props.handleDropdownChange} />
                <Dropdown name='Search Climate' varName='searchClimate' initialValue={props.searchClimate} listOptions={years} handleChange={props.handleDropdownChange} />
                <Dropdown name='Variables' varName='cdVar' initialValue={props.cdVar} listOptions={cdVarNames} handleChange={props.handleDropdownChange} />
                <Checkboxes name='Months' varName='months' initialValue={props.months} listBoxeNames={listMonths} handleChange={props.handleCheckboxChange} />
                <button className='submit-button'>Calculate</button>
            </form>
    );
}

export default ParametersBasic;