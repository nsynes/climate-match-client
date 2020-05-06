import React from 'react';

const HelpEnglish = (props) => {

    return (
        <div>
            <h3>Climate Matching Tool</h3>
            The Climate Matching Tool ‘Basic’ version uses the monthly UKCP18 12 km resolution RCP8.5 future climate projections to 2080 and simulated monthly historic climates from 1981. The climatic search factors are monthly mean temperature, total monthly precipitation, and monthly mean diurnal temperature range.
            <ol>
                <li style={{fontWeight: 'bold'}}><h4>Select a location for your climate match by clicking on the map</h4></li>
                <li style={{fontWeight: 'bold'}}><h4>Mode</h4></li>
                The Basic or Advanced mode setting is selected.
                <ol type='a'>
                    <li><b>Basic mode:</b>  the climate match calculation is performed only on European data; the period over which calculations are made is all 12 months; and the number of matches is 5000.
                    </li>
                    <li><b>Advanced mode:</b> the region for the climate match calculation is selected (Europe, Pacific North West, or Europe and Pacific North West); the months for which the match is performed can be selected (all year, growing season, and months), if choosing months a new selection grid is presented to select months for matching; the number of matches the program will perform ( limits matches in Low [200] and Medium [1000] to give more precision on the matched area displayed).
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Basic Mode Operation</h4></li>
                <ol type='a'>
                    <li><b>Question</b><br/>
                    In Basic mode the Question dialog is displayed. This allows the user to select an analog match to a specific site – or a match of the current climate to regions with a similar future climate.
                    </li>
                    <li><b>Future Climate</b><br/>
                    User selectable future climate for the question selected. If you select a decadal data a baseline decadal climate will be used. If the user selects a 30-year normal period climate a 30-year baseline climate will be used.
                    </li>
                    <li><b>Variables</b><br/>
                    This dialog allows the user to select a climate match using both temperature and precipitation or either of these datasets alone.
                    </li>
                </ol>
                <li style={{fontWeight: 'bold'}}><h4>Advanced Mode Operation</h4></li>
                <ol type='a'>
                    <li><b>Region</b><br/>
                    Select Europe – Pacific North West – or both Europe & Pacific North West. selecting both regions will take 20-30 seconds for results to be displayed.
                    </li>
                    <li><b>Local Climate</b><br/>
                    This allows the user to select which climate data to assign to the point of interest. 
                    Select the Local Climate to the period range on which you wish to search for analogs. This can be a future period or a past period. If you wish to find current locations with the climate most similar to your location in the future – than select a Local Climate period range in the future (e.g. 2041-2050).
                    Select the Local Climate to the current period range if you wish to find future locations with a climate most similar to your location – (e.g. select the Local Climate period range 2011-2020).
                    </li>
                    <li><b>Search Climate</b><br/>
                    Select the Search Climate period range in the future if you are interested in understanding where the climate of your location will best match with a future climate. Alternatively set this to the current climate if you are looking for an analog area to a projected climate of the location you have selected. 
                    </li>
                    <li><b>Variables</b> (Same as 3c).<br/>
                    </li>
                    <li><b>Months</b><br/>
                    The months for which the match is performed can be selected (all year, growing season, and months), if choosing ‘months’ a new selection grid is presented to select months for matching.
                    </li>
                    <li><b>Number of Matches</b><br/>
                    The number of matches the program will perform (limits matches in Low and Medium to give more precision on the matched area displayed).
                    </li>
                </ol>
            </ol>
        </div>
    );
}
 
export default HelpEnglish;