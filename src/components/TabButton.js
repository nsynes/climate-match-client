import React from 'react';

import './TabButton.css';

const TabButton = (props) => {

    return (
        <button onClick={() => props.onClick(props.side, props.name)} className={`tab-button ${props.className ? props.className : ''}`}>
            {props.name}
        </button>
    );
}
 
export default TabButton;