import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, GeoJSON, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import {  IconTree  } from './IconTree';
import { URL_Map_Tiles } from '../config';
import './Map.css';
import Europe from '../data/Europe.json';
import PNW from '../data/PNW.json';
import { getColorFromFraction } from '../helpers';

const Map = (props) => {

    var onEachFeature = (feature, layer) => {
        if (feature.properties && feature.properties.cd && feature.properties.n) {
            layer.bindPopup(`<b>Rank</b>: ${feature.properties.n} of ${props.resultParams.nSites}<br /><b>CD</b>: ${feature.properties.cd}`);
        }
    }

    var setStyle = (feature) => {
        const fraction = props.display === 'rank' ?
            (feature.properties.n) / (props.resultParams.nSites) :
            (feature.properties.cd - props.resultParams.minCD) / (props.resultParams.maxCD - props.resultParams.minCD);
        const colour = getColorFromFraction(fraction, props.colour)
        
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
        const bounds = [[latlng.lat-props.cellHalfWidth, latlng.lng-props.cellHalfWidth], [latlng.lat+props.cellHalfWidth, latlng.lng+props.cellHalfWidth]];
        return L.rectangle(bounds, geojsonMarkerOptions)
    };

    var regionStyle = (feature) => {
        return {
            fillOpacity: 0.2,
            fillColor: '#A9A9A9',
            color: '#000000',
            stroke: true,
            weight: 0.8,
            opacity: 1,
            dashArray: '5,5'
        };
    }

    return (
        <div>
            <LeafletMap
                className={ !props.loading && props.climateGeojson === '' ? 'leaflet-map' : ''}
                style={{height: 1000}}
                center={[50, 10]}
                zoom={4}
                maxZoom={19}
                attributionControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
                zoomControl={false}
                onClick={props.handleMapClick}>
                <ZoomControl position='bottomright' />
                <TileLayer
                    url={URL_Map_Tiles}
                />
                { props.selectedPoint && <Marker position={props.selectedPoint} icon={IconTree} draggable={false}>
                </Marker> }
                {props.climateGeojson ?
                    <GeoJSON
                        key={`climate-by-${props.display}-${props.colour}`}
                        data={props.climateGeojson}
                        pointToLayer={setStyle}
                        onEachFeature={onEachFeature}>
                    </GeoJSON> :
                    null}
                { props.region === 'Europe' &&
                    <GeoJSON
                        data={Europe}
                        style={regionStyle}>
                    </GeoJSON> }
                { props.region === 'PNW' &&
                    <GeoJSON
                        data={PNW}
                        style={regionStyle}>
                    </GeoJSON> }
            </LeafletMap>
        </div>
    );
}

export default Map;