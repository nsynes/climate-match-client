import React from 'react';
import ParametersBasic from './ParametersBasic';
import ParametersAdvanced from './ParametersAdvanced';
import './Parameters.css';

const Parameters = (props) => {

    if ( props.mode === 'advanced' ) {
        return (
            <ParametersAdvanced />
        )
    } else {
        return (
            <ParametersBasic
                localClimate={props.localClimate}
                searchClimate={props.searchClimate}
                months={props.months}
                cdVar={props.cdVar}
                handleDropdownChange={props.handleDropdownChange}
                handleCheckboxChange={props.handleCheckboxChange}
                handleSubmit={props.handleSubmit} />
        )
    }

}

export default Parameters;