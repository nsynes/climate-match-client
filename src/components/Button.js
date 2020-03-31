import React from 'react';
import './Button.css';

const Button = (props) => {

    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div style={{flexGrow: 1}}></div>
            <button className='submit-button' onClick={props.handleClick}>{props.name}</button>
        </div>
    );
}
 
export default Button;