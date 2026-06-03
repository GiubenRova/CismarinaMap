const map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -2
});

const bounds = [[0, 0], [2160, 3840]];

L.imageOverlay('assets/maps/C1Villa.png', bounds).addTo(map);
map.fitBounds(bounds);

L.marker([1072, 2192
])
    .addTo(map)
    .bindPopup('<h2>Villa di Cismarina</h2><p>First great Villa built in the City of Cismarina</p>');

map.on('click', function(e) {
    console.log(e.latlng);
});