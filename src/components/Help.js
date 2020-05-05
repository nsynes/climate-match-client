import React from 'react';
import PanelContent from './PanelContent';
import PanelContentHeader from './PanelContentHeader';
import PanelContentBody from './PanelContentBody';
import HelpEnglish from './HelpEnglish';
import HelpEspanol from './HelpEspanol';
import HelpFrancais from './HelpFrancais';
import HelpItaliano from './HelpItaliano';
import './Help.css';

const Help = (props) => {

    return (
        <PanelContent>
            <PanelContentHeader>
                <h2>Instructions</h2>
                <div>
                    <select style={{margin: '0.25em'}} defaultValue={props.language} onChange={props.handleLanguageChange}>
                        <option key='english' value='english'>English</option>
                        <option key='espanol' value='espanol'>Español</option>
                        <option key='francais' value='francais'>Français</option>
                        <option key='italiano' value='italiano'>Italiano</option>
                    </select>
                </div>
            </PanelContentHeader>
            <PanelContentBody>
                { props.language === 'english' && <HelpEnglish /> }
                { props.language === 'espanol' && <HelpEspanol /> }
                { props.language === 'francais' && <HelpFrancais /> }
                { props.language === 'italiano' && <HelpItaliano /> }
            </PanelContentBody>
        </PanelContent>
    );  
}

export default Help;


