import React from 'react';
import ForestResearchLogo from './ForestResearchLogo';
import ForestryCommissionLogo from './ForestryCommissionLogo';
import B4ESTLogo from './B4ESTLogo';
import CNRLogo from './CNRLogo';
import './Logos.css';

const Logos = (props) => {

    return (
        <div>
            <div className='logo-container'>
                <ForestResearchLogo />
                <ForestryCommissionLogo />
                <B4ESTLogo />
                <CNRLogo />
            </div>
            <div className='developed-by'>Developed by&nbsp;
                <a className='developed-by-link' href='http://nicksynes.com' target='_blank' rel='noopener noreferrer'>Nick Synes</a>
            </div>
        </div>
    );
}

export default Logos;
