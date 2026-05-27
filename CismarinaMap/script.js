const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2
});

const bounds = [[0, 0], [2160, 3840]];

L.imageOverlay('assets/maps/grontolom-1.png', bounds).addTo(map);
map.fitBounds(bounds);

L.marker([1200, 2500
])
    .addTo(map)
    .bindPopup('<h2>Historic Center</h2><p>Prototype landmark popup.</p>');

map.on('click', function(e) {
    console.log(e.latlng);
});
// Define the neighborhood border as a polygon
const oldTownBorder = L.polygon([
    [1200, 300],
    [1150, 600],
    [980,  700],
    [900,  500],
    [1050, 280],
], {
    color: '#e8a838',        // stroke colour
    fillColor: '#e8a838',    // fill colour
    fillOpacity: 0.15,       // keep it subtle so the map shows through
    weight: 2                // stroke width
}).bindPopup('<strong>Old Town</strong>');

// Group overlays by neighbourhood
const oldTown    = L.layerGroup([oldTownBorder, ...oldTownMarkers]);
const harborDistrict = L.layerGroup([harborBorder, ...harborMarkers]);

// The base layer (your map image)
const baseLayers = {
    'Map': imageLayer
};

// Overlays get checkboxes in the toggle panel
const overlays = {
    'Old Town':       oldTown,
    'Harbor District': harborDistrict,
};

L.control.layers(baseLayers, overlays).addTo(map);

// Add whichever you want visible by default
oldTown.addTo(map);