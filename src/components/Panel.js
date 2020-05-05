import React from 'react';
import './Panel.css';

const Panel = (props) => {

    return (
        <div className={`panel ${props.side || 'left'} ${props.show ? 'full' : ''}`}>
            <span style={{minHeight: '2em', padding: '0.25em 0'}}></span>
            {props.children}
        </div>
    );
}
 
export default Panel;