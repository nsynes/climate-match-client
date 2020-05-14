import React from 'react';

import './PanelContentBody.css';

const PanelContentBody = (props) => {

    // Rather imperfect fix for IE requirement for height to be set for overflow:auto element
    const isIE = /*@cc_on!@*/false || !!document.documentMode;
    const ieStyle = isIE ? {maxHeight: `${window.innerHeight- 180}px`} : {};

    return (
        <div className='panel-content-body' style={ieStyle}>
            {props.children}
        </div>
    );
}
 
export default PanelContentBody;