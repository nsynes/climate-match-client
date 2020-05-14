import React from 'react';

import './ResultParameters.css';
import { listMonths, cdVarNames, listRegions } from '../config';
import { displayCommas } from '../helpers';

const ResultParameters = (props) => {

    const { region, selectedPoint, localClimate, searchClimate, months, cdVar, nSites } = props.resultParams;
    const { lat, lng } = selectedPoint;
    const monthsText = months.map((m) => listMonths[m-1]).join(', ');
    const cdVarName = cdVarNames.find((varObj) => varObj[cdVar])[cdVar];
    const regionText = listRegions.find((varObj) => varObj[region])[region];

    return (
        <table>
            <thead>
                <tr>
                    <th colSpan='2'>
                        Parameters
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Study region</th>
                    <td>{regionText}</td>
                </tr>
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
                <tr>
                    <th>Number of matches requested</th>
                    <td>{displayCommas(nSites)}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default ResultParameters;