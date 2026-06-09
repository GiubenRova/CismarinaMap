const maps = {
    'villa': {
        image: 'assets/maps/C1Villa.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [1072, 2192], name: 'Villa di Cismarina', desc: 'First great Villa built in the City of Cismarina' },
            { coords: [745, 2200], name: 'Mausoleo Turchiano', desc: 'Great monument built in honor of Filippo Turchi, one of the great Governors of the City' },
            { coords: [1200, 1624], name: 'Palazzo degli Scacchi', desc: 'Royal Era building that recently got expanded' },
            { coords: [940, 1582], name: 'Teatro di Cismarina', desc: 'The biggest theater in the City of Cismarina, built during the Royal Era' },
            { coords: [800, 1545], name: 'Castello di Cismarina', desc: 'The first monumental building built in the City of Cismarina' },
            { coords: [1300, 1893], name: 'Campidoglio', desc: 'Building part of a Parliamentary project that never materialized' },
            { coords: [1068, 1889], name: 'Piazza della Villa', desc: 'Central square of the Villa district' },
            { coords: [540, 1850], name: 'Albero della Vita', desc: 'Building in the shape of a tree that serves as a landmark' },
  
        ]
    },
    'chirichia': {
        image: 'assets/maps/C2Chirichia.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [1100, 1843], name: 'Campanile di Chirichia', desc: 'Bell Tower of the Village of Chirichia' },
            { coords: [900, 1920], name: 'Residenza di Chirichia', desc: 'First residential building for Governors in the Neighborhood of Chirichia' },
            { coords: [1010, 1777], name: 'Monumento Sospeso', desc: 'Only monument in the entire Republic to be partially suspended in the air' },
            { coords: [925, 1839], name: 'Torre di Chirichia', desc: 'Beautiful tower, highest of the Neighborhood' },
            { coords: [850, 1827], name: 'La Sfera', desc: 'Monumental sphere in the center of the neighborhood' },
            { coords: [1064, 1916], name: 'Villaggio di Chirichia', desc: 'Village of Chirichia, inhabited by the local Villagers' },
            { coords: [1010, 1704], name: 'Torre Rotta', desc: 'Tower dedicated to the catastrophic earthquake occurred in Emilia-Romagna in 2012, built around that period' },
            { coords: [810, 1854], name: 'Volto di Re Ademo', desc: 'Monumental face attributed to King Ademo' },
            { coords: [800, 1920], name: 'Biblioteca del Centenario di Re Frank Felice I', desc: 'Library built to celebrate the centenary of King Frank Felice I' },

        ]
    },
    'centro-storico': {
        image: 'assets/maps/C3aCentroStorico.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [1050, 1650], name: 'Casa Antica, o dei Nonni', desc: 'House built in remembrance of the past' },
            { coords: [1050, 1850], name: 'Palazzo Portici', desc: 'Main administrative building of the City of Cismarina, hosts the main government offices' },
            { coords: [870, 1532], name: 'Palazzo Arisini del Parco', desc: 'Beautiful building built in place of the old Royal Park' },
            { coords: [1050, 2181], name: 'Università di Cismarina', desc: 'University of Cismarina, recently rebuilt and expanded' },
            { coords: [1190, 2215], name: 'Tribunale di Cismarina, o Ziggurat', desc: 'Courthouse of Cismarina, also known as the Ziggurat' },
            { coords: [1110, 1551], name: 'Cismarina 1', desc: 'The oldest skyscraper in the Neighborhood, recently moved by a few cubits' },
            { coords: [1250, 1236], name: 'Palazzo del Governo', desc: 'Palace of the Government and house of the Parliament' },
            { coords: [1150, 1808], name: 'Torre del Trono', desc: 'Tower once seat to the throne of the Kingdom' },
            { coords: [945, 1267], name: 'Palazzo della Civiltà', desc: 'Building representing the cultural heritage of Cismarina, built in the style of the Palazzo della Civiltà in Rome' },
            { coords: [1060, 1152], name: 'Vecchio Senato Reale', desc: 'Old Royal Senate building, now in disuse' },
            { coords: [1060, 1400], name: 'Palazzo della Vittoria', desc: 'Building dedicated to the victory of Cismarina, hosts the Permanent Exhibition of Victory' },
            { coords: [810, 1274], name: 'Fontana del Silos', desc: 'Large fountain built in place of the historic Silos built by King Frank X' },
            { coords: [1190, 1512], name: 'Torre Kenzo', desc: 'Fantastic tower with a unique design, second skyscraper built in the Neighborhood' },
            { coords: [1150, 1990], name: 'Magazzino del Centro', desc: 'Large warehouse in the center of the Neighborhood' },

        ]
    },
    'monumentale-monte': {
        image: 'assets/maps/C3bMonteMonumentale.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [926, 1681], name: 'Villa Cottage', desc: 'Gubernatorial Villa, first to be built in a pseudo-english style' },
            { coords: [1230, 1858], name: 'Monumento', desc: 'Gives his name to the area; gorgeous monument built in the Royal Era' },
            { coords: [1100, 1989], name: 'Torre Granda', desc: 'Highest tower in the City for a long time, built as a copy of the Garisenda Tower in Bologna' },
            { coords: [750, 1916], name: 'Granaio', desc: 'Building used for storing grain, located close to the crop fields' },
            { coords: [550, 1793], name: 'Hotel Morgendorffer', desc: 'Building for which the work has taken the longest in the history of the City' },
            { coords: [1300, 2062], name: 'Mercato della Darsena', desc: 'Now the Natural History Museum of Cismarina' },
            { coords: [930, 2192], name: 'Monte Rodolfo', desc: 'Highest peak in the City' },
            { coords: [1200, 2030], name: 'Istituto Geografico', desc: 'Geographical Institute of Cismarina, built during the Royal Era of Exploration' },

        ]
    },
    'deserto-tempio': {
        image: 'assets/maps/C4DesertoTempio.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [700, 700], name: 'Historic Center', desc: 'Prototype landmark.' },
        ]
    },
    'fiumana': {
        image: 'assets/maps/C5Fiumana.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [700, 700], name: 'Historic Center', desc: 'Prototype landmark.' },
        ]
    },
    'giungla': {
        image: 'assets/maps/C6Giungla.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [700, 700], name: 'Historic Center', desc: 'Prototype landmark.' },
        ]
    },
    'q70': {
        image: 'assets/maps/C7Q70.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [700, 700], name: 'Historic Center', desc: 'Prototype landmark.' },
        ]
    },
    'citta-alta': {
        image: 'assets/maps/C8CittaAlta.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [700, 700], name: 'Historic Center', desc: 'Prototype landmark.' },
        ]
    },
    'sanfabrizio': {
        image: 'assets/maps/C9SanFabrizio.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [700, 700], name: 'Historic Center', desc: 'Prototype landmark.' },
        ]
    },
    'aggiunta': {
        image: 'assets/maps/C10aAggiunta.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [700, 700], name: 'Historic Center', desc: 'Prototype landmark.' },
        ]
    },
    'isola': {
        image: 'assets/maps/C10bIsola.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [700, 700], name: 'Historic Center', desc: 'Prototype landmark.' },
        ]
    },
    'pescatore': {
        image: 'assets/maps/C11Pescatore.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [700, 700], name: 'Historic Center', desc: 'Prototype landmark.' },
        ]
    },
    'goccia': {
        image: 'assets/maps/C12Goccia.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [700, 700], name: 'Historic Center', desc: 'Prototype landmark.' },
        ]
    },
    'ademia': {
        image: 'assets/maps/C13Adémia.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [700, 700], name: 'Historic Center', desc: 'Prototype landmark.' },
        ]
    },
    // add more maps here, nothing else changes
};