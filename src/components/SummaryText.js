import React from 'react';

const SummaryText = (props) => {

    const { localClimate, searchClimate, cdVar, selectedPoint } = props.resultParams;
    const { lat, lng } = selectedPoint;
    var [localClimateStartDate, localClimateEndDate] = localClimate.split('-');
    var [searchClimateStartDate, searchClimateEndDate] = searchClimate.split('-');

    return (
        <div>
            {`
             ${searchClimateEndDate < 2020 ? `Areas that currently (${searchClimate}) have` : 'Areas that will have'}
             ${cdVar === 'full' ? 'a similar' : 'similar'}
             ${cdVar === 'full' ? 'climate'
                : cdVar === 'temp' ? 'temperatures'
                    : cdVar === 'prec' ? 'precipitation'
                        : ''}
             ${searchClimateEndDate < 2020 ? '' : `in ${searchClimate}`}
             to ${localClimateEndDate < 2020 ? cdVar === 'full' ? `the current (${localClimate}) climate`
                : cdVar === 'temp' ? `current (${localClimate}) temperatures`
                    : cdVar === 'prec' ? `current (${localClimate}) precipitation`
                        : ''
                            : cdVar === 'temp' ? `those expected in ${localClimate}`
                                : `that expected in ${localClimate}`}
             at the selected location
             (${lat > 0 ? `${lat.toFixed(4)}° N` : `${(-lat).toFixed(4)}° S`}, ${lng > 0 ? `${lng.toFixed(4)}° E` : `${(-lng).toFixed(4)}° W`}).
             `}
        </div>
    );
}

export default SummaryText;