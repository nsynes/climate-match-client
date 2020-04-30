import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import { MapControl } from 'react-leaflet';

class LatitudeControl extends MapControl {

  componentWillMount() {
    const latitudeControl = L.control({position: 'bottomright'});
    const jsx = (
      <div>
        {`stuff`}
      </div>
    );

    latitudeControl.onAdd = function (map) {
      let div = L.DomUtil.create('div', '');
      ReactDOM.render(jsx, div);
      return div;
    };

    this.leafletElement = latitudeControl;
  }
}

export default LatitudeControl;