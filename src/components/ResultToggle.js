import React from 'react';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import './ResultToggle.css';

const ResultToggle = (props) => {

    return (
        <div
            onClick={props.handleToggle}
            className='result-toggle'>
            {props.visible ? 
                <ExpandLess fontSize='small' /> :
                <ExpandMore fontSize='small' />
            }
        </div>
    );
}

export default ResultToggle;
