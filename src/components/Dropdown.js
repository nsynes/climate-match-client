import React from 'react';

const Dropdown = (props) => {

    var options = [];
    if ( props.listOptions && typeof(props.listOptions[0]) !== 'object' ) {
         options = props.listOptions.map((x) => <option key={x} value={x}>{x}</option>)
    } else {
        options = props.listOptions.map((x, i) => <option key={i} value={Object.keys(x)[0]}>{x[Object.keys(x)[0]]}</option>)
    }

    return (
        <div style={{padding: '0 1em'}}>
            <label>
                {props.name}
            </label>
                <select defaultValue={props.initialValue} onChange={(e) => props.handleChange(e, props.varName)}>
                    <option value="" disabled hidden>Please select...</option>
                    {options}
                </select>
        </div>
    );
}

export default Dropdown;