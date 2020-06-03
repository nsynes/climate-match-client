import React, { Suspense } from 'react';

import Legend from './Legend';
import SummaryText from './SummaryText';
import PanelContent from './PanelContent';
import PanelContentHeader from './PanelContentHeader';
import PanelContentBody from './PanelContentBody';
import ResultParameters from './ResultParameters';
import Loading from './Loading';
import { getHistogramData } from '../helpers';
import './Results.css';

const ResultHistogram = React.lazy(() => import('./ResultHistogram'));

const Results = (props) => {

    const { climateGeojson, resultParams, display, selectedCell, colour } = props;

    const histData = climateGeojson ? getHistogramData(climateGeojson, resultParams.minCD, resultParams.maxCD, resultParams.nSites, display, 20) : null;


    if ( resultParams && resultParams.searchClimate ) {
        return (
            <PanelContent>
                <PanelContentHeader>
                    <h2>Results Summary</h2>
                </PanelContentHeader>
                <PanelContentBody>
                    <SummaryText
                        resultParams={resultParams} />
                    <br />
                    <div style={{fontStyle: 'italic'}}>Note: Climate Difference scores closest to zero indicate the best match.</div>
                    <div className='summary-graph'>
                    <Suspense fallback={<div className='loading-histo'><Loading size='small' /></div>}>
                        <ResultHistogram
                            histData={histData}
                            minCD={resultParams.minCD}
                            maxCD={resultParams.maxCD}
                            selectedCell={selectedCell}
                            colour={colour} />
                    </Suspense>
                        <Legend
                            display={display}
                            colour={colour}
                            nSites={resultParams.nSites}
                            minCD={resultParams.minCD}
                            maxCD={resultParams.maxCD}
                            handleColourChange={props.handleColourChange}
                            handleDisplayChange={props.handleDisplayChange} />
                    </div>
                    <ResultParameters
                        resultParams={resultParams} />
                </PanelContentBody>
            </PanelContent>
        );
    } else {
        return (null);
    }
}

export default Results;