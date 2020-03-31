import React from 'react';
import './WarningBanner.css';

const WarningBanner = (props) => {

    if ( props.warningMessage ) {
        return (
            <span className='warning-banner'>
                <div className='warning-message'>
                    <b>{props.warningMessage}</b>
                </div>
            </span>
        );
    } else {
        return (null);
    }
}

export default WarningBanner;