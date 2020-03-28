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
                mode={props.mode}
                localClimate={props.params.localClimate}
                searchClimate={props.params.searchClimate}
                months={props.params.months}
                cdVar={props.params.cdVar}
                handleDropdownChange={props.handleDropdownChange}
                handleCheckboxChange={props.handleCheckboxChange}
                handleSubmit={props.handleSubmit} />
        </div>
    );
}

export default Inputs;