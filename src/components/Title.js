import React from 'react';
import B4ESTLogo from './B4ESTLogo';
import ForestResearchLogo from './ForestResearchLogo';
import './Title.css';

const Title = (props) => {

    return (
        <div className='title-container'>
            <ForestResearchLogo />
                <h1>Climate Matching Tool</h1>
            <B4ESTLogo />
        </div>
    );
}

export default Title;
