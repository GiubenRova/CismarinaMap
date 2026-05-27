const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2
});

const bounds = [[0, 0], [1536, 1536]];

L.imageOverlay('assets/maps/grontolom-1.png', bounds).addTo(map);
map.fitBounds(bounds);

L.marker([700, 700])
    .addTo(map)
    .bindPopup('<h2>Historic Center</h2><p>Prototype landmark popup.</p>');

map.on('click', function(e) {
    console.log(e.latlng);
});