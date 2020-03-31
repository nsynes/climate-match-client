import React from 'react';
import Help from './Help';
import SidePanelToggle from './SidePanelToggle';
import './SidePanel.css';

class SidePanel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    handleToggleView = () => {
        const visible = this.state.visible;
        this.setState({
            visible: !visible
        })
    }

    render () {
        
        return (
            <div>
                <SidePanelToggle
                    visible={this.state.visible}
                    handleToggle={this.handleToggleView} />
                <div className={`side-panel ${this.state.visible ? 'visible' : 'hidden'}`}>
                    <Help />
                </div>
            </div>
        );
    }
    
}

export default SidePanel;