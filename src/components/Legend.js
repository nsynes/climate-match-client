import React from 'react';
import './Legend.css';

const Legend = (props) => {

    return (
        <div className='legend-container'>
            <b>Legend</b>
            <div className='legend'>
                <div>
                    <div style={{height: '0.25em'}} />
                    <div className='legend-colors' />
                    <div style={{height: '0.25em'}} />
                </div>
                <div className='legend-text'>
                    <div className='legend-text-top'>Closest match</div>
                    <div className='legend-text-bottom'>{props.nSites}<sup>th</sup> match</div>
                </div>
            </div>
        </div>
    );
}

export default Legend;
            