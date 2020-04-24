import React from 'react';
import Plot from 'react-plotly.js';
import { getColorFromFraction } from '../helpers';
import './ResultHistogram.css';

const ResultHistogram = (props) => {

    const { climateGeojson, minCD, maxCD, nSites } = props;

    const histData = climateGeojson.features.map(obj => obj.properties.cd);
    const maxBins = 20;
    var binWidth = Math.max(0.01, (maxCD+0.000001 - minCD) / maxBins);
    const nBins = Math.ceil((maxCD+0.000001-minCD) / binWidth);
    console.log(nBins)

    var counter = minCD + (binWidth/2);
    var middleN = []
    for ( var ix in histData ) {
        if ( histData[ix] >= counter ) {
            middleN.push(ix);
            counter += binWidth;
        }
    }

    var colours = []
    var fraction;
    counter = minCD + (binWidth/2);
    for (var i = 0; i < nBins; i++) {
        if ( props.display === 'rank' ) fraction = Math.min(1, (middleN[i]) / (nSites));
        else if ( props.display === 'cd' ) fraction = Math.min(1, (counter - minCD) / (maxCD - minCD));
        else fraction = Math.min(1, counter / maxCD);
        colours.push(getColorFromFraction(fraction, props.colour))
        counter += binWidth;
    }

    return(
        <div style={{padding: '0 6em', height: '250px'}}>
            <Plot
                className='plotly-graph'
                data={[{
                    type: 'histogram',
                    x: histData,
                    orientation: 'v',
                    autobinx: false,
                    histnorm: 'count',
                    xbins: {
                        start: minCD,     
                        end: maxCD+0.000001, 
                        size: binWidth, 
                    }, 
                    marker: {
                    color: colours, 
                    line: {
                        color:  'rgba(100,100,100,1)', 
                        width: 1
                    }
                    },  
                }]}
                useResizeHandler
                layout={{
                    margin: {
                        l: 30,
                        r: 30,
                        b: 80,
                        t: 0,
                        pad: 0
                    },
                    paper_bgcolor: 'rgba(0,0,0,0)',
                    plot_bgcolor: 'rgba(0,0,0,0)',
                    title: '',
                    yaxis: {
                        title: 'Frequency',
                        fixedrange: true
                    },
                    xaxis : {
                        title: 'Climate Difference',
                        fixedrange: true
                    },
                    autosize: true}}
                config={ {displayModeBar: false} } />
            </div>
    )
}

export default ResultHistogram;