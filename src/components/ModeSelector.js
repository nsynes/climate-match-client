import React from 'react';

const ModeSelector = (props) => {
    return (
        <div style={{display: 'flex', justifyContent:'center', paddingBottom: '1em', borderBottom: '1px solid rgb(230,230,230)'}}>
            <label style={{float: 'left'}}>
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
