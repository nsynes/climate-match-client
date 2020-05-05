import React from 'react';
import './PanelContentBody.css';

const PanelContentBody = (props) => {

    return (
        <div className='panel-content-body'>
            {props.children}
        </div>
    );
}
 
export default PanelContentBody;