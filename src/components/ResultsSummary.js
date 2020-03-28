import React from 'react';
import Legend from './Legend';
import { listMonths, cdVarNames } from '../config';
import './ResultsSummary.css';

const ResultsSummary = (props) => {

    if ( props.resultParams && props.resultParams.searchClimate ) {
        const { selectedPoint, localClimate, searchClimate, months, cdVar } = props.resultParams;
        const lat = selectedPoint.lat;
        const lng = selectedPoint.lng;
        const monthsText = months.map((m) => listMonths[m-1]).join(', ');
        const cdVarName = cdVarNames.find((varObj) => varObj[cdVar])[cdVar];

        return (
            <div className='results-summary'>
                <table>
                    <tbody>
                        <tr>
                            <th>Climate difference variables</th>
                            <td>{cdVarName}</td>
                        </tr>
                        <tr>
                            <th>Selected site</th>
                            <td>{`${lat > 0 ? `${lat.toFixed(4)}° N` : `${(-lat).toFixed(4)}° S`}, ${lng > 0 ? `${lng.toFixed(4)}° E` : `${(-lng).toFixed(4)}° W`}`}</td>
                        </tr>
                        <tr>
                            <th>Local climate</th>
                            <td>{localClimate}</td>
                        </tr>
                        <tr>
                            <th>Search climate</th>
                            <td>{searchClimate}</td>
                        </tr>
                        <tr>
                            <th>Months matched</th>
                            <td>{monthsText}</td>
                        </tr>
                    </tbody>
                </table>
                <Legend nSites={props.resultParams.nSites} />
            </div>
        );
    } else {
        return (null);
    }
}

export default ResultsSummary;