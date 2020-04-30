import React from 'react';
import { Map as LeafletMap, TileLayer, Marker, ZoomControl } from 'react-leaflet';
import LatitudeLinesGeoJSON from './LatitudeLinesGeoJSON';
import SelectedClimateGeoJSON from './SelectedClimateGeoJSON';
import ClimateGeoJSON from './ClimateGeoJSON';
import RegionGeoJSON from './RegionGeoJSON';
import {  IconTree  } from './IconTree';
import { URL_Map_Tiles } from '../config';
import './Map.css';

const Map = (props) => {

    return (
        <div>
            <LeafletMap
                className={ !props.loading && props.climateGeojson === '' ? 'leaflet-map' : ''}
                style={{height: 1000}}
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
                zoomControl={false}
                onClick={props.handleMapClick}>
                <ZoomControl position='bottomright' />
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
                <LatitudeLinesGeoJSON />
            </LeafletMap>
        </div>
    );
}

export default Map;