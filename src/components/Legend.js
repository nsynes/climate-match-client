import React from 'react';
import './Legend.css';

const Legend = (props) => {

    const best = props.display === 'rank' ?
        <div className='legend-text'>Closest match</div> :
        props.display === 'cd' ?
        <div className='legend-text'>{`CD score: ${props.minCD}`}</div> :
        <div className='legend-text'>CD score: 0</div>;

    const worst = props.display === 'rank' ?
        <div className='legend-text'>{props.nSites.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<sup>th</sup> match</div> :
        <div className='legend-text'>{`CD score: ${props.maxCD}`}</div>;

    return (
        <div>
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
            </div>
            <div className='legend-toggle' onClick={props.handleDisplayChange}>
                toggle variable
            </div>
            <div className='legend-toggle' onClick={props.handleColourChange}>
                toggle colour
            </div>
        </div>
        );
}

export default Legend;
            