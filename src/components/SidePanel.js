import React from 'react';
import Help from './Help';
import HelpIcon from '@material-ui/icons/HelpOutline';
import './SidePanel.css';

class SidePanel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    toggleView = () => {
        const visible = this.state.visible;
        this.setState({
            visible: !visible
        })
    }

    render () {
        
        return (
            <div>
                <div className={`side-panel ${this.state.visible ? 'visible' : 'hidden'}`}>
                    <Help />
                </div>
                <div
                    onClick={this.toggleView}
                    className={`side-panel-toggle ${this.state.visible ? 'visible' : 'hidden'}`}>
                        <HelpIcon fontSize='large' />
                </div>
            </div>
        );
    }
    
}

export default SidePanel;