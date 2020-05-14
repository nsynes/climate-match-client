import React from 'react';

import Dropdown from './Dropdown';
import { listModes } from '../config';

const ModeSelector = (props) => {
    return (
        <div>
            <Dropdown name='Mode' varName='mode' initialValue={props.mode} listOptions={listModes} handleChange={props.handleModeChange} leftLabel={true} />
        </div>
    );
}

export default ModeSelector;
