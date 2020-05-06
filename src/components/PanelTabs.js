import React from 'react';
import TabButton from './TabButton';
import './PanelTabs.css';

const PanelTabs = (props) => {

    const tabButtons = props.tabs.map((name) => {
        return (
            <TabButton
                key={name}
                name={name}
                side={props.side}
                className={props.show === name ? 'highlighted' : ''}
                onClick={props.handleTabClick} />
        )
    })

    return (
        <div>
            <div className={`tab-button-container ${props.side}`}>
                {tabButtons}
            </div>
        </div>
    );
}
 
export default PanelTabs;