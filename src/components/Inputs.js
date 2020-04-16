import React from 'react';
import ModeSelector from './ModeSelector';
import Parameters from './Parameters';
import Title from './Title';
import './Inputs.css';

const Inputs = (props) => {

    return (
        <div className='inputs-container'>
            <Title />
            <ModeSelector
                mode={props.mode}
                handleModeChange={props.handleModeChange} />
            <Parameters
                loading={props.loading}
                mode={props.mode}
                localClimate={props.params.localClimate}
                searchClimate={props.params.searchClimate}
                monthsType={props.params.monthsType}
                months={props.params.months}
                cdVar={props.params.cdVar}
                nSites={props.params.nSites}
                region={props.params.region}
                handleDropdownChange={props.handleDropdownChange}
                handleCheckboxChange={props.handleCheckboxChange}
                handleCalculate={props.handleCalculate}
                handleRefresh={props.handleRefresh} />
        </div>
    );
}

export default Inputs;