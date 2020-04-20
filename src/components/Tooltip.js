import React from 'react';
import './Tooltip.css';

const Tooltip = (props) => {

    if ( props.text ) {
        return (
            <span className="tooltiptext">{props.text}</span>
        );
    } else {
        return null;
    }
}
 
export default Tooltip;