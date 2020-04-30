import React from 'react';
import { displayCommas } from '../helpers';
import './Legend.css';

const Legend = (props) => {

    const best = props.display === 'rank' ?
        <div className='legend-text'>Closest match</div> :
        <div className='legend-text'>CD score: 0</div>;

    const worst = props.display === 'rank' ?
        <div className='legend-text'>{displayCommas(props.nSites)}<sup>th</sup> match</div> :
        <div className='legend-text'>{`CD score: ${props.maxCD}`}</div>;

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div className='legend-text-spacer'></div>
            <div className='legend-container'>
                <b>Legend</b>
                <div className='legend'>
                    <div>
                        <div style={{height: '0.25em'}} />
                        <div className={`legend-colors ${props.colour}`} />
                        <div style={{height: '0.25em'}} />
                    </div>
                    <div className='legend-text-container'>
                        {best}
                        <div className='legend-text-spacer'></div>
                        {worst}
                    </div>
                </div>
                <div className='legend-toggle'>
                    toggle:&nbsp;
                    <span className='link' onClick={props.handleDisplayChange}>variable</span>
                    &nbsp;/&nbsp;
                    <span className='link' onClick={props.handleColourChange}>colour</span>
                </div>
            </div>
            <div className='legend-text-spacer'></div>
        </div>
    )
}

export default Legend;
            