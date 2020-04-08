import React from 'react';
import { Helmet } from 'react-helmet';

const HelmetTags = () => {

    return (
        <Helmet>
            <title>Climate Matching Tool</title>
            <meta name='description' content='A climate matching tool that uses UK Climate Projections from the Met Office Hadley Centre. The tool allows the user to select a location, set time periods, and see regions with matching climatic conditions.' />
            <meta name='robots' content='index,follow' />
        </Helmet>
    );
}
 
export default HelmetTags;
                