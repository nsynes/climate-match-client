import React from 'react';
import HelpEnglish from './HelpEnglish';
import HelpEspanol from './HelpEspanol';
import HelpFrancais from './HelpFrancais';
import HelpItaliano from './HelpItaliano';
import './Help.css';

class Help extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            language: 'english'
        }
    }

    handleLanguageChange = (e) => {
        this.setState({language: e.target.value})
    }

    render () {
        return (
            <div className='help-container'>
                <div className='help-header'>
                    <h2>Instructions</h2>
                    <select style={{height:'2em', margin: '0.7em 0.5em 0 0'}} defaultValue={this.state.language} onChange={this.handleLanguageChange}>
                        <option key='english' value='english'>English</option>
                        <option key='espanol' value='espanol'>Español</option>
                        <option key='francais' value='francais'>Français</option>
                        <option key='italiano' value='italiano'>Italiano</option>
                    </select>
                </div>
                { this.state.language === 'english' && <HelpEnglish /> }
                { this.state.language === 'espanol' && <HelpEspanol /> }
                { this.state.language === 'francais' && <HelpFrancais /> }
                { this.state.language === 'italiano' && <HelpItaliano /> }
            </div>
        );
    }    
}

export default Help;


