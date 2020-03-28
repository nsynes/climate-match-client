import React from 'react';

const Checkboxes = (props) => {

    var createCheckboxes = function(initialValue) {
        return  function(x, i) {
            return  <li className='checkbox-inline' key={x} ><input type='checkbox' defaultChecked={initialValue[i]} value={i+1} name={x} onChange={(e) => props.handleChange(e, props.varName)}/>
                        <label>{x}</label>
                    </li>
        }
    }

    const boxes = props.listBoxeNames.map(createCheckboxes(props.initialValue))

    return (
        <div style={{padding: '0 1em'}}>
            <label>
                {props.name}
            </label>
            <ul className='checkbox-container' >{boxes}</ul>
        </div>
    );
}

export default Checkboxes;