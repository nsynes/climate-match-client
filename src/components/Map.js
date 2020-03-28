import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, GeoJSON, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import {  IconTree  } from './IconTree';
import { URL_Map_Tiles } from '../config';
import './Map.css';

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            minValue: null,
            maxValue: null,
            nValues: null
        }
    }

    onEachFeature = (feature, layer) => {
        if (feature.properties && feature.properties.cd && feature.properties.n) {
            layer.bindPopup(`<b>Rank</b>: ${feature.properties.n} of ${this.state.nValues}<br /><b>CD</b>: ${feature.properties.cd}`);
        }
    }

    perc2color = (value) => {
        const fraction = ((value - this.state.minValue) / (this.state.maxValue - this.state.minValue))

        const g = Math.round(0 + 255 * fraction);
        const r = 255;
        const b = 0
        //console.log(`${fraction}: ${r},${g},${b}`)
        const h = r * 0x10000 + g * 0x100 + b * 0x1;
        return '#' + ('000000' + h.toString(16)).slice(-6);
    }

    perc2colorGREEN = (value) => {
        const fraction = ((value - this.state.minValue) / (this.state.maxValue - this.state.minValue))

        const g = Math.round(40 + 215 * fraction);
        const r = 0;
        const b = Math.round(0 + 100 * fraction);
        console.log(`${fraction}: ${r},${g},${b}`)
        const h = r * 0x10000 + g * 0x100 + b * 0x1;
        return '#' + ('000000' + h.toString(16)).slice(-6);
    }
    perc2colorGREY = (value) => {
        const fraction = ((value - this.state.minValue) / (this.state.maxValue - this.state.minValue))

        const g = Math.round(25 + 150 * fraction);
        const r = Math.round(25 + 150 * fraction);
        const b = Math.round(25 + 150 * fraction);
        console.log(`${fraction}: ${r},${g},${b}`)
        const h = r * 0x10000 + g * 0x100 + b * 0x1;
        return '#' + ('000000' + h.toString(16)).slice(-6);
    }

    setStyle = (feature) => {
        const colour = this.perc2color(feature.properties.cd);
        const geojsonMarkerOptions = {
            fillColor: colour,
            color: colour,
            weight: 1,
            opacity: 0.8,
            fillOpacity: 0.8
        };

        const latlng = {
            lng: feature.geometry.coordinates[0],
            lat: feature.geometry.coordinates[1]
        }
        const bounds = [[latlng.lat-this.props.cellHalfWidth, latlng.lng-this.props.cellHalfWidth], [latlng.lat+this.props.cellHalfWidth, latlng.lng+this.props.cellHalfWidth]];
        return L.rectangle(bounds, geojsonMarkerOptions)
    };

    static getDerivedStateFromProps = (nextProps, prevState) => {
        var minValue = null;
        var maxValue = null;
        var nValues = null;
        if ( nextProps.climateGeojson && nextProps.climateGeojson.features ) {
            minValue = Math.min.apply(Math, nextProps.climateGeojson.features.map(function(o) { return o.properties.cd; }))
            maxValue = Math.max.apply(Math, nextProps.climateGeojson.features.map(function(o) { return o.properties.cd; }))
            nValues = nextProps.climateGeojson.features.length;
        }
        return {minValue: minValue, maxValue: maxValue, nValues: nValues}
    }


    render() {


        return (
            <div>
                <LeafletMap
                    className={ !this.props.loading && this.props.climateGeojson === '' ? 'leaflet-map' : ''}
                    style={{height: 600}}
                    center={[50, 10]}
                    zoom={4}
                    maxZoom={19}
                    attributionControl={true}
                    zoomControl={true}
                    doubleClickZoom={true}
                    scrollWheelZoom={true}
                    dragging={true}
                    animate={true}
                    easeLinearity={0.35}
                    zoomControl={false}
                    onClick={this.props.handleMapClick}>
                    <ZoomControl position='bottomright' />
                    <TileLayer
                        url={URL_Map_Tiles}
                    />
                    { this.props.selectedPoint && <Marker position={this.props.selectedPoint} icon={IconTree} draggable={false}>
                    </Marker> }
                    { this.props.climateGeojson && <GeoJSON
                        key={'geojson01'}
                        data={this.props.climateGeojson}
                        pointToLayer={this.setStyle}
                        onEachFeature={this.onEachFeature}>
                    </GeoJSON> }
                </LeafletMap>
            </div>
        );
    }
}

export default Map;