/*
Fetch error helper
@param {object} response
*/
export const handleResponse = (response) => {
    return response.json().then(json => {
        return response.ok ? json : Promise.reject(json);
    });
}

export const getColorFromFraction = (fraction, gradient) => {
    var r, g, b;
    switch(gradient) {
        case 'green':
            r = 0;
            g = Math.round(40 + 215 * fraction);
            b = Math.round(0 + 100 * fraction);
            break;
        case 'grey':
            g = Math.round(25 + 150 * fraction);
            r = Math.round(25 + 150 * fraction);
            b = Math.round(25 + 150 * fraction);
            break;
        default: //red
            r = 255;
            g = Math.round(0 + 255 * fraction);
            b = 0;
    }
    const hex = r * 0x10000 + g * 0x100 + b * 0x1;
    
    return '#' + ('000000' + hex.toString(16)).slice(-6);
}

export const accurateRound = (num, decimals) => Math.round((num + Number.EPSILON) * (10**decimals)) / (10**decimals)

export const countDecimals = (value) => {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
}

export const getHistogramData = (climateGeojson, minCD, maxCD, nSites, display, maxBins) => {

    const histData = climateGeojson.features.map(obj => obj.properties.cd);
    var binWidth = Math.max(0.01, (maxCD+0.001 - minCD) / maxBins);

    const decimalPlaces = Math.max(3, countDecimals(binWidth));

    var fraction, colourFractions = [], maxFreq = 0, prev = 0;
    var binCenter = minCD + (binWidth/2);
    var binStart = minCD;
    for (var ix = 1; ix <= histData.length; ix++) {
        if ( histData[ix-1] >= accurateRound(binStart + binWidth, decimalPlaces) || ix === histData.length ) {
            maxFreq = Math.max(maxFreq, ix-prev);
            binStart = accurateRound(binStart + binWidth, decimalPlaces);
            prev = ix;
        }
        if ( histData[ix-1] >= binCenter || ix === histData.length ) {
            fraction = display === 'rank' ? Math.min(1, (ix) / (nSites)) : Math.min(1, binCenter / maxCD);
            colourFractions.push(fraction);
            binCenter += binWidth;
        }
    }

    return { data: histData, binWidth: binWidth, maxFreq: maxFreq, colourFractions: colourFractions }
}

export const displayCommas = (s) => {
    return s.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const highlightColour = (displayColour) => {
    return displayColour === "grey" ? "#006400" : "#000000";
}

export const calcBinStartEnd = (binNumber, binWidth, dataStart) => {
    const binStart = dataStart + (binNumber * binWidth);
    const binEnd = dataStart + ((binNumber+1) * binWidth);
    return [binStart, binEnd];
}