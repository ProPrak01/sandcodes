import React, { useState, useEffect } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Style, Circle, Fill, Stroke } from 'ol/style';
import { defaults as defaultInteractions, DragPan } from 'ol/interaction';
import 'ol/ol.css';

const SafeZoneNavigator = () => {
  const [map, setMap] = useState(null);
  const [markerLayer, setMarkerLayer] = useState(null);

  useEffect(() => {
    const osmLayer = new TileLayer({
      preload: Infinity,
      source: new OSM(),
    });

    const initialMap = new Map({
      target: 'map',
      layers: [osmLayer],
      view: new View({
        center: fromLonLat([-74.006, 40.7128]),
        zoom: 15,
      }),
      interactions: defaultInteractions({ doubleClickZoom: false, mouseWheelZoom: false, pinchZoom: false }).extend([
        new DragPan(),
      ]),
    });

    setMap(initialMap);

    return () => {
      initialMap.setTarget(null);
    };
  }, []);

  useEffect(() => {
    if (map) {
      const markers = [
        { longitude: -74.006, latitude: 40.7128, color: 'rgba(255, 0, 0, 0.5)' }, // New York City, red
        { longitude: -73.997, latitude: 40.7128, color: 'rgba(0, 255, 0, 0.5)' }, // Los Angeles, green
        { longitude: -74.000, latitude: 40.7230, color: 'rgba(255, 0, 0, 0.5)' }, // London, blue
        { longitude: -74.01, latitude: 40.7230, color: 'rgba(0, 255, 0, 0.5)' }, // London, blue
        { longitude: -74.03, latitude: 40.7230, color: 'rgba(255, 0, 0, 0.5)' }, // London, blue
        { longitude: -74.036, latitude: 40.7428, color: 'rgba(255, 0, 0, 0.5)' }, // New York City, red
        { longitude: -73.937, latitude: 40.7428, color: 'rgba(0, 255, 0, 0.5)' }, // Los Angeles, green
        { longitude: -74.030, latitude: 40.7430, color: 'rgba(255, 0, 0, 0.5)' }, // London, blue
        { longitude: -74.03, latitude: 40.7430, color: 'rgba(0, 255, 0, 0.5)' }, // London, blue
        { longitude: -74.03, latitude: 40.7430, color: 'rgba(255, 0, 0, 0.5)' }, // London, blue
      ];

      const features = markers.map(({ longitude, latitude, color }) => {
        const feature = new Feature({
          geometry: new Point(fromLonLat([longitude, latitude])),
        });

        feature.setStyle(
          new Style({
            image: new Circle({
              radius: 100,
              fill: new Fill({ color }),
              stroke: new Stroke({ color: color.replace('0.5', '1'), width: 2 }),
            }),
          })
        );

        return feature;
      });

      const newMarkerLayer = new VectorLayer({
        source: new VectorSource({
          features,
        }),
      });

      map.addLayer(newMarkerLayer);
      setMarkerLayer(newMarkerLayer);
    }
  }, [map]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '80vw', height: '85vh', overflow: 'hidden', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}>
        <div style={{ height: '100%', width: '100%' }} id="map" className="map-container" />
      </div>

      <div style={{ width: '20vw', height: '85vh', backgroundColor: 'grey' }}>
        <h1>Indicators:</h1>
        <h3>RED : UNSAFE</h3>
        <h3>GREEN : SAFE</h3>
      </div>
    </div>
  );
};

export default SafeZoneNavigator;
