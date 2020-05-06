import React from 'react';
import Legend from './Legend';
import SummaryText from './SummaryText';
import PanelContent from './PanelContent';
import PanelContentHeader from './PanelContentHeader';
import PanelContentBody from './PanelContentBody';
import ResultParameters from './ResultParameters';
import ResultHistogram from './ResultHistogram';
import './Results.css';

const Results = (props) => {

    if ( props.resultParams && props.resultParams.searchClimate ) {
        return (
            <PanelContent>
                <PanelContentHeader>
                    <h2>Results Summary</h2>
                </PanelContentHeader>
                <PanelContentBody>
                    <SummaryText
                        resultParams={props.resultParams} />
                    <br />
                    <div style={{fontStyle: 'italic'}}>Note: Climate Difference scores closest to zero indicate the best match.</div>
                    <div className='summary-graph'>
                        <ResultHistogram
                            histData={props.histData}
                            minCD={props.resultParams.minCD}
                            maxCD={props.resultParams.maxCD}
                            selectedCell={props.selectedCell}
                            colour={props.colour} />
                        <Legend
                            display={props.display}
                            colour={props.colour}
                            nSites={props.resultParams.nSites}
                            minCD={props.resultParams.minCD}
                            maxCD={props.resultParams.maxCD}
                            handleColourChange={props.handleColourChange}
                            handleDisplayChange={props.handleDisplayChange} />
                    </div>
                    <ResultParameters
                        resultParams={props.resultParams} />
                </PanelContentBody>
            </PanelContent>
        );
    } else {
        return (null);
    }
}

export default Results;