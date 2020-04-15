import React from 'react';
import './Dropdown.css';

const Dropdown = (props) => {


    const { initialValue, listOptions, name, varName, leftLabel } = props;

    var options = [];
    if ( listOptions && typeof(listOptions[0]) !== 'object' ) {
         options = listOptions.map((x) => <option key={x} value={x}>{x}</option>)
    } else {
        options = listOptions.map((x, i) => <option key={i} value={Object.keys(x)[0]}>{x[Object.keys(x)[0]]}</option>)
    }

    return (
        <div className={`dropbox-container label-${leftLabel ? 'left' : 'above'}`}>
            <label className={`label-${leftLabel ? 'left' : ''}`}>
                {name}
            </label>
                <select className='dropdown' defaultValue={initialValue} onChange={(e) => props.handleChange(e, varName)}>
                    <option value="" disabled hidden>Please select...</option>
                    {options}
                </select>
        </div>
    );
}

export default Dropdown;