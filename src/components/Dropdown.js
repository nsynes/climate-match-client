import React from 'react';

const Dropdown = (props) => {

    const { initialValue, listOptions, name, varName } = props;

    var options = [];
    if ( listOptions && typeof(listOptions[0]) !== 'object' ) {
         options = listOptions.map((x) => <option key={x} value={x}>{x}</option>)
    } else {
        options = listOptions.map((x, i) => <option key={i} value={Object.keys(x)[0]}>{x[Object.keys(x)[0]]}</option>)
    }

    return (
        <div style={{padding: '0 1em 1em 1em'}}>
            <label>
                {name}
            </label>
                <select defaultValue={initialValue} onChange={(e) => props.handleChange(e, varName)}>
                    <option value="" disabled hidden>Please select...</option>
                    {options}
                </select>
        </div>
    );
}

export default Dropdown;