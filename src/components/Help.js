import React from 'react';
import PanelContent from './PanelContent';
import PanelContentHeader from './PanelContentHeader';
import PanelContentBody from './PanelContentBody';
import HelpDeutsche from './HelpDeutsche';
import HelpEnglish from './HelpEnglish';
import HelpEspanol from './HelpEspanol';
import HelpFrancais from './HelpFrancais';
import HelpItaliano from './HelpItaliano';
import HelpNederlands from './HelpNederlands';
import HelpPortugues from './HelpPortugues';
import HelpSvenska from './HelpSvenska';
import './Help.css';

const Help = (props) => {

    return (
        <PanelContent>
            <PanelContentHeader>
                <h2>Instructions</h2>
                <div>
                    <select style={{margin: '0.25em'}} defaultValue={props.language} onChange={props.handleLanguageChange}>
                        <option key='deutsche' value='deutsche'>Deutsche</option>
                        <option key='english' value='english'>English</option>
                        <option key='espanol' value='espanol'>Español</option>
                        <option key='francais' value='francais'>Français</option>
                        <option key='italiano' value='italiano'>Italiano</option>
                        <option key='nederlands' value='nederlands'>Nederlands</option>
                        <option key='portugues' value='portugues'>Português</option>
                        <option key='svenska' value='svenska'>Svenska</option>
                        
                    </select>
                </div>
            </PanelContentHeader>
            <PanelContentBody>
                { props.language === 'deutsche' && <HelpDeutsche /> }
                { props.language === 'english' && <HelpEnglish /> }
                { props.language === 'espanol' && <HelpEspanol /> }
                { props.language === 'francais' && <HelpFrancais /> }
                { props.language === 'italiano' && <HelpItaliano /> }
                { props.language === 'nederlands' && <HelpNederlands /> }
                { props.language === 'portugues' && <HelpPortugues /> }
                { props.language === 'svenska' && <HelpSvenska /> }
            </PanelContentBody>
        </PanelContent>
    );  
}

export default Help;


