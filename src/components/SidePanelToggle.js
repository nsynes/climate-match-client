import React from 'react';
import HelpIcon from '@material-ui/icons/HelpOutline';
import './SidePanelToggle.css';

const SidePanelToggle = (props) => {

    return (
        <div
            onClick={props.handleToggle}
            className={`side-panel-toggle ${props.visible ? 'visible' : 'hidden'}`}>
                <HelpIcon fontSize='large' />
        </div>
    );
}

export default SidePanelToggle;
