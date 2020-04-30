import React from 'react';
import ParametersBasic from './ParametersBasic';
import ParametersAdvanced from './ParametersAdvanced';

const Parameters = (props) => {

    if ( props.mode === 'Advanced' ) {
        return (
            <ParametersAdvanced
                loading={props.loading}
                localClimate={props.localClimate}
                searchClimate={props.searchClimate}
                monthsType={props.monthsType}
                months={props.months}
                cdVar={props.cdVar}
                nSites={props.nSites}
                region={props.region}
                handleDropdownChange={props.handleDropdownChange}
                handleCheckboxChange={props.handleCheckboxChange}
                handleCalculate={props.handleCalculate}
                handleRefresh={props.handleRefresh} />
        )
    } else if ( props.mode === 'Basic' ) {
        return (
            <ParametersBasic
                loading={props.loading}
                localClimate={props.localClimate}
                searchClimate={props.searchClimate}
                monthsType={props.monthsType}
                months={props.months}
                cdVar={props.cdVar}
                handleDropdownChange={props.handleDropdownChange}
                handleCheckboxChange={props.handleCheckboxChange}
                handleCalculate={props.handleCalculate}
                handleRefresh={props.handleRefresh} />
        )
    }

}

export default Parameters;