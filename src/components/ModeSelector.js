import React from 'react';

const ModeSelector = (props) => {
    return (
        <div style={{textAlign:'center', paddingBottom: '1em'}}>
            <label style={{float: 'left', marginLeft: '43%', paddingRight: '0.5em'}}>
                Mode: 
            </label>
            <select defaultValue={props.mode} onChange={props.handleModeChange} >
                <option value="basic" >Basic</option>
                <option value="advanced" >Advanced</option>
            </select>
        </div>
    );
}

export default ModeSelector;