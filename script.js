const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2
});

const bounds = [[0, 0], [2160, 3840]];

L.imageOverlay('assets/maps/C1Villa.png', bounds).addTo(map);
map.fitBounds(bounds);

L.marker([1200, 2500
])
    .addTo(map)
    .bindPopup('<h2>Historic Center</h2><p>Prototype landmark popup.</p>');

map.on('click', function(e) {
    console.log(e.latlng);
});