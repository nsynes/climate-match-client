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