import React from 'react';
import Plot from 'react-plotly.js';

import { getColorFromFraction } from '../helpers';
import './ResultHistogram.css';

const ResultHistogram = (props) => {

    const { histData, minCD, maxCD, selectedCell, colour } = props;

    
    var colours = histData.colourFractions.map(fraction => getColorFromFraction(fraction, colour));
    colours.push(colours[colours.length-1]) // duplicate final colour incase there is an extra bin

    return(
        <Plot
        onClick={(e) => console.log(e)}
        className='plotly-graph'
        data={[{
            name: 'Frequency',
            type: 'histogram',
            x: histData.data,
            orientation: 'v',
            autobinx: false,
            histnorm: 'count',
            xbins: {
                start: minCD,
                end: maxCD+0.001, 
                size: histData.binWidth
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
            y: [0,histData.maxFreq],
            x: [selectedCell.cd, selectedCell.cd],
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
                l: 50,
                r: 10,
                b: 40,
                t: 10,
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
                range: [0, maxCD+histData.binWidth],
                title: 'Climate Difference Score',
                fixedrange: true
            },
            autosize: true,
            showlegend: false}}
        config={ {displayModeBar: false} } />
    )
}

export default ResultHistogram;