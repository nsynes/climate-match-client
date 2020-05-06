import React from 'react';
import PanelContent from './PanelContent';
import PanelContentHeader from './PanelContentHeader';
import PanelContentBody from './PanelContentBody';
import Logos from './Logos';

const About = (props) => {

    return (
        <PanelContent>
            <PanelContentHeader>
                <h1>About the Climate Matching Tool</h1>
            </PanelContentHeader>
            <PanelContentBody>
                <p>The method (<i>Broadmeadow et al, 2005</i>) of the CMT (Version 1.4) uses three climatic variables to match the user selected future climate projection of a location to the best fitting current climate (analog climate). This is done using decadal or 30-year normal periods of monthly mean precipitation, average temperature, and diurnal temperature range from the UKCP18 12km resolution data for Europe.</p>
                <p>CMT gives forestry practitioners an accessible method to demonstrate what the projected climate of a site will be like in the future, by suggesting similar analog areas in the current climate. This could affect species choice and management systems and could help practitioners begin to plan adaptation responses in forest management. The CMT also works in reverse; to take the climate data of an area where a forest pest occurs now, and see the extent and range of best fit climates in the future, ie. where the pest may be suited in the future.</p>
                <p>The CMT development has been funded by various sources including the EU H2020 project B4EST (Grant Agreement-773383-B4EST (16-04-2018), the Forestry Commission and Forest Research. Development of the software and web application by Nick Synes. Downscaling of UKCP18 global data to Pacific North West by Maurizio Marchi (CNR Italy) with help from Tongli Wang (UBC Canada).</p>
                <br/>
                <a className='link' href='https://doi.org/10.1093/forestry/cpi014' target='_blank' rel='noopener noreferrer'>Broadmeadow, M.S.J., Ray, D., Samuel, C.J.A., 2005. Climate change and the future for broadleaved tree species in Britain 78. doi:10.1093/forestry/cpi014</a>
                <Logos />
            </PanelContentBody>
        </PanelContent>
    );  
}

export default About;


