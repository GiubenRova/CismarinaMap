const params = new URLSearchParams(window.location.search);
const mapKey = params.get('map') || 'villa'; // default if no param
const config = maps[mapKey];

const map = L.map('map', { crs: L.CRS.Simple, minZoom: -2 });

L.imageOverlay(config.image, config.bounds).addTo(map);
map.fitBounds(config.bounds);

config.pins.forEach(pin => {
    L.marker(pin.coords)
        .addTo(map)
        .bindPopup(`<h2>${pin.name}</h2><p>${pin.desc}</p>`);
});

map.on('click', e => console.log(e.latlng));