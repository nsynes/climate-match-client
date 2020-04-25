import React from 'react';
import Plot from 'react-plotly.js';
import { getColorFromFraction } from '../helpers';
import './ResultHistogram.css';

const ResultHistogram = (props) => {

    const { climateGeojson, minCD, maxCD, nSites, selectedCellCD } = props;

    const histData = climateGeojson.features.map(obj => obj.properties.cd);
    const maxBins = 20;
    const binWidth = Math.max(0.01, (maxCD+0.000001 - minCD) / maxBins);

    var colours = []
    var fractions = [];
    var fraction;
    var binCenter = minCD + (binWidth/2);
    var binStart = minCD;
    var maxFreq = 0;
    var prev = 0;
    for (var ix = 0; ix < histData.length; ix++) {
        if ( histData[ix] >= binStart + binWidth ) {
            maxFreq = Math.max(maxFreq, ix-prev);
            binStart += binWidth;
            prev = ix;
        } else if ( ix === histData.length -1 ) {
            maxFreq = Math.max(maxFreq, ix-prev);
        }
        if ( histData[ix] >= binCenter ) {
            if ( props.display === 'rank' ) fraction = Math.min(1, (ix) / (nSites));
            else if ( props.display === 'cd' ) fraction = Math.min(1, (binCenter - minCD) / (maxCD - minCD));
            else fraction = Math.min(1, binCenter / maxCD);
            fractions.push(fraction);
            colours.push(getColorFromFraction(fraction, props.colour))
            binCenter += binWidth;
        }
    }

    return(
        <div style={{padding: '0 4em', height: '250px'}}>
            <Plot
                className='plotly-graph'
                data={[{
                    name: 'Frequency',
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
                },
                {
                    name: 'Selected cell',
                    type: 'scatter',
                    mode: 'lines',
                    y: [0,maxFreq],
                    x: [selectedCellCD, selectedCellCD],
                    hoverinfo: 'skip',
                    line: {
                        color:  'rgba(0,0,0,1)',
                        width: 2,
                        dash: 'dot'
                    }
                }]}
                useResizeHandler
                layout={{
                    margin: {
                        l: 40,
                        r: 0,
                        b: 40,
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
                        range: [0, maxCD+0.01],
                        title: 'CD Score',
                        fixedrange: true
                    },
                    autosize: true,
                    showlegend: false}}
                config={ {displayModeBar: false} } />
            </div>
    )
}

export default ResultHistogram;