import React from 'react';
import './Dropdown.css';

const Dropdown = (props) => {


    const { initialValue, listOptions, name, varName, leftLabel, groups } = props;

    var options = [];
    if ( !groups ) {
        if ( listOptions && typeof(listOptions[0]) !== 'object' ) {
            options = listOptions.map((x) => <option key={x} value={x}>{x}</option>)
       } else {
           options = listOptions.map((x, i) => <option key={i} value={Object.keys(x)[0]}>{x[Object.keys(x)[0]]}</option>)
       }
    } else {
        options = listOptions.map((optGroup, j) => 
            <optgroup key={j} label={groups[j]}>
                {optGroup.map((x, i) => <option key={x} value={x}>{x}</option>)}
            </optgroup>
        )
    }

    return (
        <div className={`dropbox-container label-${leftLabel ? 'left' : 'above'}`}>
            <label className={`label-${leftLabel ? 'left' : ''}`}>
                {name}
            </label>
                <select className='dropdown' defaultValue={initialValue} onChange={(e) => props.handleChange(e.target.value, varName)}>
                    <option value="" disabled hidden>Please select...</option>
                    {options}
                </select>
        </div>
    );
}

export default Dropdown;