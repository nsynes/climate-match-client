import React from 'react';

import ParametersBasic from './ParametersBasic';
import ParametersAdvanced from './ParametersAdvanced';
import WarningBanner from './WarningBanner';
import Button from './Button';

const Parameters = (props) => {

    const parameters = props.mode === 'Advanced' ?
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
            handleRefresh={props.handleRefresh} /> :
        props.mode === 'Basic' ?
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
                handleRefresh={props.handleRefresh} /> :
            null;

    return (
        <div>
            {parameters}
            <WarningBanner
                loading={props.loading}
                text={props.warningMessage}/>
            <div style={{display:'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Button
                    loading={props.loading}
                    name='Calculate'
                    handleClick={props.handleCalculate} />
                <Button
                    loading={props.loading}
                    name='Refresh'
                    handleClick={props.handleRefresh} />
            </div>
        </div>
    )

}

export default Parameters;