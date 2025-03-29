// Create a map instance
const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([0, 0]),
        zoom: 2
    })
});

// Function to add GeoServer layer
function addGeoServerLayer(url, layerName) {
    const layer = new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: url,
            params: { 'LAYERS': layerName, 'TILED': true },
            serverType: 'geoserver',
            transition: 0
        })
    });
    map.addLayer(layer);
}

// Sample GeoServer layer
addGeoServerLayer('http://your-geoserver-url/geoserver/wms', 'your-layer-name');

// Add Data button functionality
document.getElementById('addDataBtn').addEventListener('click', () => {
    const url = prompt('Enter GeoServer URL:');
    const layerName = prompt('Enter Layer Name:');
    if (url && layerName) {
        addGeoServerLayer(url, layerName);
    }
});