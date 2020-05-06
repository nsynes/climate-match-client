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
                <a href='https://www.forestresearch.gov.uk/' target='_blank' rel='noopener noreferrer'>
                    <ForestResearchLogo />
                </a>
                <a href='https://www.gov.uk/government/organisations/forestry-commission' target='_blank' rel='noopener noreferrer'>
                    <ForestryCommissionLogo />
                </a>
                <a href='http://b4est.eu/' target='_blank' rel='noopener noreferrer'>
                    <B4ESTLogo />
                </a>
                <a href='http://ibbr.cnr.it/' target='_blank' rel='noopener noreferrer'>
                    <CNRLogo />
                </a>
            </div>
            <div className='developed-by'>Developed by&nbsp;
                <a className='developed-by-link' href='http://nicksynes.com' target='_blank' rel='noopener noreferrer'>Nick Synes</a>
            </div>
        </div>
    );
}

export default Logos;
