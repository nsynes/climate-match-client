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
    //console.log(`${fraction}: ${r},${g},${b}`)
    return '#' + ('000000' + hex.toString(16)).slice(-6);
}

export const getHistogramData = (climateGeojson, minCD, maxCD, nSites, display, maxBins) => {

    const histData = climateGeojson.features.map(obj => obj.properties.cd);
    var binWidth = Math.max(0.01, (maxCD+0.001 - minCD) / maxBins);

    var fraction, colourFractions = [], maxFreq = 0, prev = 0;
    var binCenter = minCD + (binWidth/2);
    var binStart = minCD;
    for (var ix = 0; ix < histData.length; ix++) {
        if ( histData[ix] >= binStart + binWidth || ix === histData.length -1 ) {
            maxFreq = Math.max(maxFreq, ix-prev);
            binStart += binWidth;
            prev = ix;
        }
        if ( histData[ix] >= binCenter ) {
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