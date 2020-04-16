import React from 'react';
import Button from './Button';
import Checkboxes from './Checkboxes';
import Dropdown from './Dropdown';
import './Parameters.css';
import { futureYears10, futureYears30, listMonthsTypes, listMonths, cdVarNames } from '../config';

class ParametersBasic extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            question: '',
            climate: ''
        }
    }

    handleAppStateChange = (value, name) => {
        
        var { question, climate } = this.state;
        if ( name === 'question' ) {
            question = value;
        } else if ( name === 'climate' ) {
            climate = value;
        }
        if ( question === 'currentSearch' ) {
            this.props.handleDropdownChange('1981-2010','searchClimate');
            this.props.handleDropdownChange(climate,'localClimate');
        } else if ( question === 'currentLocal' ) {
            this.props.handleDropdownChange('1981-2010','localClimate');
            this.props.handleDropdownChange(climate,'searchClimate');             
        }
        this.setState({ question, climate })
    }

    render () {

        const years = [futureYears10, futureYears30];
        const questions = [{currentSearch:'What climate will my location have in the future?'}, {currentLocal:'Which areas will have my current climate in the future?'}];

        const { cdVar, monthsType, months } = this.props;

        return (
            <div className='form-container'>
                <form className='form-inline'>
                    <Dropdown name='Question' varName='question' initialValue={this.state.question} listOptions={questions} handleChange={this.handleAppStateChange} />
                    <Dropdown name='Climate' varName='climate' initialValue={this.state.climate} groups={['10 year average','30 year average']} listOptions={years} handleChange={this.handleAppStateChange} />
                    <Dropdown name='Variables' varName='cdVar' initialValue={cdVar} listOptions={cdVarNames} handleChange={this.props.handleDropdownChange} />
                    <Dropdown name='Months' varName='monthsType' initialValue={monthsType} listOptions={listMonthsTypes} handleChange={this.props.handleDropdownChange} />
                    {monthsType === 'Specific Months' &&
                        <Checkboxes name='Specific Months' varName='months' initialValue={months} listBoxeNames={listMonths} handleChange={this.props.handleCheckboxChange} />
                    }
                    <div style={{width: '100%', display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <div style={{flexGrow: 1}}></div>
                        <Button
                            loading={this.props.loading}
                            name='Calculate'
                            handleClick={this.props.handleCalculate} />
                        <Button
                            loading={this.props.loading}
                            name='Refresh'
                            handleClick={this.props.handleRefresh} />
                    </div>
                </form>
            </div>
        );
    }
    
}

export default ParametersBasic;