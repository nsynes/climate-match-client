import React from 'react';

import Loading from './Loading';
import './WarningBanner.css';

const WarningBanner = (props) => {

    return (
        <div className='warning-banner'>
            { props.loading &&
                <div style={{position: 'relative'}}>
                    <Loading size='small' />
                </div> }
            <b>{props.text}</b>
        </div>
    );
}

export default WarningBanner;