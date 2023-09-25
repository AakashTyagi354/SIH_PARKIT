const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [18.52018592009886, 73.86703014069276]
        },
        properties: {
          title: 'Mapbox',
          description: 'Washington, D.C.',
          Park_ID : 1
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [18.52301404876896, 73.86398315141582]
        },
        properties: {
          title: 'Mapbox',
          description: 'San Francisco, California',
          Park_ID : 2
        }
      }
    ]
  };


  export default geojson;