import React from 'react';
import CNRJpg from '../img/CNR-IBBR.png';
import './CNRLogo.css';

const CNR = (props) => {

    return (
        <div >
            <img src={CNRJpg} alt='CNR-IBBR logo' className='cnr-logo' />
        </div>
    );
}

export default CNR;
