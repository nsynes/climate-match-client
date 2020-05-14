import React from 'react';

import './PanelContent.css';

const PanelContent = (props) => {

    return (
        <div className='panel-content'>
            {props.children}
        </div>
    );
}
 
export default PanelContent;