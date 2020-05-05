import React, { useRef, useEffect } from 'react';
import { Map as LeafletMap, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import LatitudeLinesGeoJSON from './LatitudeLinesGeoJSON';
import SelectedClimateGeoJSON from './SelectedClimateGeoJSON';
import ClimateGeoJSON from './ClimateGeoJSON';
import RegionGeoJSON from './RegionGeoJSON';
import {  IconTree  } from './IconTree';
import { URL_Map_Tiles } from '../config';
import './Map.css';

const Map = (props) => {

    const mapRef = useRef();

    useEffect(() => {
        const { current = {} } = mapRef;
        const { leafletElement: map } = current;

        var corners = map._controlCorners,
        l = 'leaflet-',
        container = map._controlContainer;

        const sideName = 'horizontalmiddle';
        var className = l + sideName;
        corners[sideName] = L.DomUtil.create('div', className, container);

        map.zoomControl.setPosition(sideName);
    }, [])


    return (
        <LeafletMap
            ref={mapRef}
            className={'leaflet-map'}
            center={[50, 10]}
            zoom={4}
            minZoom={2}
            maxZoom={19}
            attributionControl={true}
            doubleClickZoom={true}
            scrollWheelZoom={true}
            dragging={true}
            animate={true}
            easeLinearity={0.35}
            zoomControl={true}
            onClick={props.handleMapClick}>
            <TileLayer
                url={URL_Map_Tiles} />
            { props.selectedPoint &&
            <Marker position={props.selectedPoint} icon={IconTree} draggable={false} />}
            <SelectedClimateGeoJSON
                selectedCell={props.selectedCell}
                cellHalfWidth={props.cellHalfWidth} />
            <ClimateGeoJSON
                display={props.display}
                colour={props.colour}
                resultParams={props.resultParams}
                climateGeojson={props.climateGeojson}
                cellHalfWidth={props.cellHalfWidth}
                handleGeojsonClick={props.handleGeojsonClick} />
            <RegionGeoJSON
                region={props.region}/>
            {props.showLatitude &&
            <LatitudeLinesGeoJSON />}
        </LeafletMap>
    );
}

export default Map;