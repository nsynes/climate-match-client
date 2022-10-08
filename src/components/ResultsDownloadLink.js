import React from 'react';

import { API_Domain } from '../api-domain';

const ResultsDownloadLink = (props) => {

    const { downloadPath, downloadBordersPath } = props;

    return (
        <div style={{"marginBottom": "1em", "fontStyle": "italic"}}>
            <div style={{"backgroundColor": "#f0f0f0", "borderRadius": "5px", "margin": "0 2em 0 2em"}}>
                <div style={{"textAlign": "center"}}>
                    Download results:&nbsp;
                </div>
                <div style={{"textAlign": "center"}}>
                    <a className="link" href={`${API_Domain}/${downloadBordersPath}` }>with borders</a>
                    &nbsp;/&nbsp;
                    <a className="link" href={`${API_Domain}/${downloadPath}` }>without borders</a>
                </div>
            </div>
        </div>
    );
    

}

export default ResultsDownloadLink;