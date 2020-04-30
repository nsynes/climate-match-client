import React from 'react';
import ForestResearchLogo from './ForestResearchLogo';
import B4ESTLogo from './B4ESTLogo';
import CNRLogo from './CNRLogo';
import './Logos.css';

const Logos = (props) => {

    return (
        <div className='logo-container'>
            <ForestResearchLogo />
            <B4ESTLogo />
            <CNRLogo />
        </div>
    );
}

export default Logos;
