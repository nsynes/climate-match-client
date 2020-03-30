import React from 'react';
import ForestResearchLogo from './ForestResearchLogo';
import './Title.css';

const Title = (props) => {

    return (
        <div className='title-container'>
            <ForestResearchLogo />
            <div style={{width:'2em'}}></div>
            <div style={{position: 'relative'}}>
                <h1>Climate Matching Tool</h1>
            </div>
        </div>
    );
}

export default Title;
