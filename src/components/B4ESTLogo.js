import React from 'react';

import B4ESTJpg from '../img/B4EST.jpg';
import './B4ESTLogo.css';

const B4ESTLogo = (props) => {

    return (
        <div >
            <img src={B4ESTJpg} alt='B4EST logo' className='b4est-logo' />
        </div>
    );
}

export default B4ESTLogo;
