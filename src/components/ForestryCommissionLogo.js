import React from 'react';
import ForestryCommissionSvg from '../img/ForestryCommission.svg';
import './ForestryCommissionLogo.css';

const ForestryCommissionLogo = (props) => {

    return (
        <div className='fc-logo-container'>
            <img src={ForestryCommissionSvg} alt='Forestry Commission logo' className='fc-logo' />
        </div>
    );
}

export default ForestryCommissionLogo;