import React from 'react';

const HelpEnglish = (props) => {

    return (
        <div className='help-content'>
            <h3>Climate Matching Tool</h3>
            The Climate Matching Tool ‘Basic’ version uses the monthly UKCP18 12 km resolution RCP8.5 future climate projections to 2080, and simulated monthly historic climates from 1981. The climatic search factors are monthly mean temperature, total monthly precipitation, and monthly mean diurnal temperature range. 

            <h3>Instructions</h3>
            <h4>To check the current analog climate for a selected site</h4>
            <ol>
                <li>Select a location with a click, on the place you wish to search for a future or past climate. The map can be zoomed with the +/- controls in the lower right-hand side to more precisely select the location.</li>
                <li>Select the Local Climate to the period range on which you wish to search for analogs. This can be a future period or a past period. If you wish to find current locations with the climate most similar to your location in the future – than select a Local Climate period range in the future (e.g. 2041-2050).</li>
                <li>Now select the Search Climate period range to execute the search on. If you are interested in understanding where current analogs are similar to the future selected climate of your Local Climate location – select the current climate (e.g. 2011-2020 or 2021-2030).</li>
                <li>You can now select the monthly range on which the climate match is made. The choices are all months, growing season months (Apr-Sep), or Specific Months selected manually. For the latter selection a new window will appear to allow you to define the months for the climate matching algorithm.</li>
                <li>The climate data variables on which the climate matching is based can be changed between: Precipitation, Temperature and Diurnal Range (default); Precipitation; Temperature and Diurnal Range. This allows you to separate the important climatic factors in the search algorithm.</li>
                <li>Finally click Calculate to execute the search algorithm. The calculations take a few seconds, and a summary text box will appear with the result map of the search. The summary text box can be hidden or expanded with a control button in the top right-hand corner.</li>
            </ol>

            <h4>To check locations of a future climate similar to the climate of a selected location</h4>
            <ol>
                <li>Select a location with a click, on the place you wish to search for a future or past climate. The map can be zoomed with the +/- controls in the lower right-hand side to more precisely select the location.</li>
                <li>Select the Local Climate to the current period range. If you wish to find future locations with the climate most similar to your location – than select the Local Climate period range 2021-2030).</li>
                <li>Now select the Search Climate period range. If you are interested in understanding where the climate of your Local Climate location will be similar in the future, Select the Search Climate to a future period (e.g. 2051-2060).</li>
                <li>You can now select the monthly range on which the climate match is made. The choices are all months, growing season months (Apr-Sep), or Specific Months selected manually. For the latter selection a new window will appear to allow you to define the months for the climate matching algorithm.</li>
                <li>The climate data variables on which the climate matching is based can be changed between: Precipitation, Temperature and Diurnal Range (default); Precipitation; Temperature and Diurnal Range. This allows you to separate the important climatic factors in the search algorithm.</li>
                <li>Finally click Calculate to execute the search algorithm. The calculations take a few seconds, and a summary text box will appear with the result map of the search. The summary text box can be hidden or expanded with a control button in the top right-hand corner.</li>
            </ol>
        </div>
    );
}
 
export default HelpEnglish;