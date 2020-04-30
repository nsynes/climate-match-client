import React from 'react';
import CNRJpg from '../img/CNR-IBBR.png';
import './B4ESTLogo.css';

const CNR = (props) => {

    return (
        <div >
            <img src={CNRJpg} alt='CNR-IBBR logo' className='b4est-logo' />
        </div>
    );
}

export default CNR;
