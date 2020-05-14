import React from 'react';

import ModeSelector from './ModeSelector';
import Parameters from './Parameters';
import PanelContent from './PanelContent';
import PanelContentHeader from './PanelContentHeader';
import PanelContentBody from './PanelContentBody';
import './Tool.css';

const Tool = (props) => {
    
    return (
        <PanelContent>
            <PanelContentHeader>
                <h1>Climate Matching Tool</h1>
            </PanelContentHeader>
            <PanelContentBody>
                <div>
                    <div style={{textAlign: 'center', paddingBottom: '1em'}}>
                        <div className='link' style={{display:'inline-block'}} onClick={props.handleShowLatitude}>
                            {`${props.showLatitude ? 'Hide' : 'Show'} degrees of latitude`}
                        </div>
                    </div>
                    <ModeSelector
                        mode={props.mode}
                        handleModeChange={props.handleModeChange} />
                    <Parameters
                        loading={props.loading}
                        mode={props.mode}
                        warningMessage={props.warningMessage}
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
            </PanelContentBody>
        </PanelContent>
    );
}

export default Tool;