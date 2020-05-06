import React from 'react';
import './PanelContentHeader.css';

const PanelContentHeader = (props) => {

    return (
        <div className='panel-content-header'>
            {props.children}
        </div>
    );
}
 
export default PanelContentHeader;