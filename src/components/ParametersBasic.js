import React from 'react';

import Dropdown from './Dropdown';
import './Parameters.css';
import { futureYears10, futureYears30, cdVarNames } from '../config';

class ParametersBasic extends React.Component {

    constructor(props) {
        super(props);

        props.handleDropdownChange(5000, 'nSites')
        props.handleDropdownChange('All', 'monthsType')
        props.handleDropdownChange('Europe', 'region')

        const { localClimate, searchClimate } = props;
        const [localStart, localEnd] = localClimate.split('-').map((x) => parseInt(x));
        const [searchStart, searchEnd] = searchClimate.split('-').map((x) => parseInt(x));
        var question, climate;
        if ( ( (searchStart === 1981 && searchEnd === 2010) || (searchStart === 2011 && searchEnd === 2020) ) && (localEnd > 2020) ) {
            question = 'currentSearch'
            climate = localClimate
        } else if ( ( (localStart === 1981 && localEnd === 2010) || (localStart === 2011 && localEnd === 2020) ) && (searchEnd > 2020) ) {
            question = 'currentLocal'
            climate = searchClimate
        } else {
            question = '';
            climate = '';
        }

        this.state = {
            question: question,
            climate: climate
        }
    }

    handleAppStateChange = (value, name) => {
        
        var { question, climate } = this.state;
        if ( name === 'question' ) {
            question = value;
        } else if ( name === 'climate' ) {
            climate = value;
        }
        const [start, end] = climate.split('-').map((x) => parseInt(x));
        const currentClimate = end-start <= 10 ? '2011-2020' : '1981-2010';
        if ( question === 'currentSearch' ) {
            this.props.handleDropdownChange(currentClimate,'searchClimate');
            this.props.handleDropdownChange(climate,'localClimate');
        } else if ( question === 'currentLocal' ) {
            this.props.handleDropdownChange(currentClimate,'localClimate');
            this.props.handleDropdownChange(climate,'searchClimate');             
        }
        this.setState({ question, climate })
    }

    render () {

        const years = [futureYears10, futureYears30];
        const questions = [
            {currentSearch:'Which areas currently have my future climate?'},
            {currentLocal:'Which areas will have my current climate in the future?'}];

        const { cdVar } = this.props;
        const { question, climate } = this.state

        return ( 
            <form className='form-inline'>
                <Dropdown 
                    key={`q-${question}`}
                    name='Question'
                    varName='question'
                    initialValue={this.state.question}
                    listOptions={questions}
                    handleChange={this.handleAppStateChange} />
                <Dropdown
                    key={`climate-${climate}`}
                    name='Future Climate'
                    varName='climate'
                    initialValue={this.state.climate}
                    groups={['10 year average','30 year average']}
                    listOptions={years}
                    handleChange={this.handleAppStateChange} />
                <Dropdown
                    key={cdVar}
                    name='Variables'
                    varName='cdVar'
                    initialValue={cdVar}
                    listOptions={cdVarNames}
                    toolTipText='Which variables should be included in the analysis?'
                    handleChange={this.props.handleDropdownChange} />                
            </form>
        );
    }
    
}

export default ParametersBasic;