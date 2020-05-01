import React from 'react';
import Button from './Button';
import Dropdown from './Dropdown';
import './Parameters.css';
import { futureYears10, futureYears30, cdVarNames } from '../config';

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
        const questions = [{currentSearch:'Which areas currently have my future climate?'}, {currentLocal:'Which areas will have my current climate in the future?'}];

        const { cdVar } = this.props;

        return (
            <div className='form-container'>
                <form className='form-inline'>
                    <Dropdown 
                        name='Question'
                        varName='question'
                        initialValue={this.state.question}
                        listOptions={questions}
                        handleChange={this.handleAppStateChange} />
                    <Dropdown
                        name='Future Climate'
                        varName='climate'
                        initialValue={this.state.climate}
                        groups={['10 year average','30 year average']}
                        listOptions={years}
                        handleChange={this.handleAppStateChange} />
                    <Dropdown
                        name='Variables'
                        varName='cdVar'
                        initialValue={cdVar}
                        listOptions={cdVarNames}
                        toolTipText='Which variables should be included in the analysis?'
                        handleChange={this.props.handleDropdownChange} />
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