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
            { coords: [1083, 2062], name: 'Tempio Antico', desc: 'Old and obscure temple, built during the Royal Era' },
            { coords: [900, 2703], name: 'Galleria del Deserto', desc: 'Underground gallery built by King Frank X using dynamite' },
            { coords: [1076, 2507], name: 'Villaggio del Deserto', desc: 'Recently built Village in the Desert Neighborhood' },
            { coords: [1129, 1351], name: 'Tempio Nuovo', desc: 'Most recent temple built in the Desert Neighborhood, dedicated to a cult not yet discovered' },

        ]
    },
    'fiumana': {
        image: 'assets/maps/C5Fiumana.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [1100, 2184], name: 'Villa Fiumana', desc: 'Ancient villa located in the Fiumana Neighborhood, built in the Royal Era' },
            { coords: [1050, 1685], name: 'Diga di Fiumana', desc: 'Dam built to control the flow of the Fiumana watersource' },

        ]
    },
    'giungla': {
        image: 'assets/maps/C6Giungla.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [930, 1570], name: 'Borghetto della Giungla', desc: 'First constructions in the Giungla Neighborhood' },
            { coords: [920, 1647], name: 'Rovina della Villa del Borghetto', desc: 'Old Villa whose ruins are still visible' },
            { coords: [930, 2403], name: 'Avamposto della Giungla', desc: 'Seat of the Giungla Neighborhood, recently expanded and modernized' },
            { coords: [1080, 2469], name: 'Porto della Giungla', desc: 'Nice harbor in the Giungla Neighborhood, heading east to the City of Grontolom' },
            { coords: [1200, 1570], name: 'Parlamento Superiore della Repubblica Federale', desc: 'Parliament of the Federal Republic of the Sister Cities, located in the Giungla Neighborhood' },

        ]
    },
    'q70': {
        image: 'assets/maps/C7Q70.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [900, 1728], name: 'Stadio Q70', desc: 'Biggest Stadium in the City' },
            { coords: [1200, 2065], name: 'Museo di Arte Moderna Q70', desc: 'Modern Art Museum of Q70' },
            { coords: [1100, 2269], name: 'Prioria del Q70', desc: 'Priory of the Q70 Neighborhood, most magnificent house in the area' },
            { coords: [900, 2219], name: 'Monumento della Prioria', desc: 'Beautiful landmark in the Q70 Neighborhood' },
        ]
    },
    'citta-alta': {
        image: 'assets/maps/C8CittaAlta.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [1190, 1670], name: 'Cattedrale di Cismarina', desc: 'One of the three major Cathedrals in the Federal Republic, this is the biggest' },
            { coords: [1400, 1555], name: 'Accademia di Cismarina', desc: 'Architectural Academy of Cismarina' },
            { coords: [1600, 1939], name: 'Piazza del Tappeto', desc: 'Piazza shaped like a carpet' },
            { coords: [700, 1616], name: 'Palazzo della Guardia Cittadina', desc: 'Palace of the City Guard, now the Museum of Flags' },
            { coords: [800, 1190], name: 'Villa Turchi', desc: 'Magnificent Villa built by Filippo Turchi, now a major Gubernatorial Residence' },
            { coords: [400, 1450], name: 'Complesso Libreria-Prigione', desc: 'The first building ever built in Città Alta' },
            { coords: [550, 1608], name: 'Banca di Cismarina', desc: 'Seat of the Central Bank of Cismarina and its reserves' },
            { coords: [980, 1681], name: 'Piazza dei Quattro Pilastri', desc: 'Four Pillars Square, each pillar represents a different virtue of the City' },
            { coords: [500, 1194], name: 'Palazzo di Vetro', desc: 'Seat of the Città Alta Neighborhood and the Cismarina Herald' },
       
        ]
    },
    'sanfabrizio': {
        image: 'assets/maps/C9SanFabrizio.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [1150, 1728], name: 'Faro di San Fabrizio', desc: 'Beautiful lighthouse in the San Fabrizio Neighborhood' },
            { coords: [950, 1831], name: 'Arenella di San Fabrizio', desc: 'Small theatre in the San Fabrizio Neighborhood built in the greek style' },
            { coords: [1068, 2472], name: 'Isole di San Fabrizio', desc: 'Group of small islands in the San Fabrizio Neighborhood' },

        ]
    },
    'aggiunta': {
        image: 'assets/maps/C10aAggiunta.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [1390, 2085], name: 'Tempio Civile del Millenario', desc: 'Civic temple of the millennial anniversary of the Reign of King Frank X' },
            { coords: [1100, 1855], name: 'Torre Islandese', desc: 'Monumental tower in the style of that Icelandic tower in Reykjavik' },
            { coords: [1350, 1666], name: 'Statua Ingegno Umano', desc: 'Statue of Human Ingenuity' },
            { coords: [1100, 1593], name: 'Palazzo di Lugano - Metro Cismarina', desc: 'Civic building seat of the Cismarina Metro Authority' },
            { coords: [1250, 1463], name: 'Palazzo del Commercio Cittadino', desc: 'Built in the new World Trade Center One style of New York' },
            { coords: [1072, 1466], name: 'Stadio Aggiunta', desc: 'Small stadium in the Aggiunta Neighborhood' },
            { coords: [980, 1466], name: 'Istituto di Lingua Cismarina', desc: 'Seat of the Cismarina Language Institute' },
            { coords: [840, 1466], name: 'Palazzo Mornintoni', desc: 'Glorious building in the Aggiunta Neighborhood, built by Governor Oleg Mornintoni' },
            { coords: [1290, 1263], name: 'Museo di Cismarina', desc: 'Museum to store every existing block' },
            { coords: [1064, 1328], name: 'Torre della Polvere da Sparo', desc: 'Once the tallest tower in the City, it was built for the purpose of producing gunpowder; the factory never operated' },
            { coords: [840, 1328], name: 'Fontana del Cascone', desc: 'Monumental fountain in the Aggiunta Neighborhood' },
            { coords: [710, 1328], name: 'Torre Geberit o Palazzo degli Abeti', desc: 'One of the first skyscrapers built in the Aggiunta Neighborhood' },
            { coords: [580, 1328], name: 'Torre Cercati', desc: 'Magnificent apartment building in the Aggiunta Neighborhood' },
            { coords: [450, 1328], name: 'Torre Galli-Hendel', desc: 'Nice office building in the Aggiunta Neighborhood' },
            { coords: [960, 1198], name: 'Palazzo dei Partiti', desc: 'Seat of the Political Parties of the Federal Republic' },
            { coords: [840, 1198], name: 'Torre Avviluppata', desc: 'Artistic tower built in dark wood' },
            { coords: [710, 1198], name: 'Torre Arisini', desc: 'Apartment building in the Aggiunta Neighborhood' },
            { coords: [580, 1198], name: 'Torre Galli-Angiolo', desc: 'Office building in the Aggiunta Neighborhood' },
            { coords: [450, 1198], name: 'Torre Michelini', desc: 'Office building in the Aggiunta Neighborhood' },
            { coords: [1175, 1032], name: 'Monumento e Alloggi di Basalto', desc: 'Built entirely with basalt created on site' },
            { coords: [700, 1032], name: 'Ville a schiera', desc: 'Residential buildings in the Aggiunta Neighborhood, built in the style of the victorian era' },
            { coords: [600, 837], name: 'Lago Tamborina', desc: 'Lake in the Aggiunta Neighborhood' },

        ]
    },
    'isola': {
        image: 'assets/maps/C10bIsola.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [1060, 1840], name: 'Torretta Isolana', desc: 'Beautifull tower built in the Cismarinan neo-gothic style' },
            { coords: [1000, 1860], name: 'Sede del Quartiere Isola', desc: 'Seat of the Isola Neighborhood' },
            { coords: [1040, 1793], name: 'Cisterna Isolana', desc: 'Public water reservoir' },
            { coords: [900, 1858], name: 'Taverna Isolana', desc: 'Local tavern' },
            { coords: [930, 1804], name: 'Ponte Gentile', desc: 'Bridge connecting the Isola Neighborhood to Aggiunta' },
            { coords: [1000, 1904], name: 'Ponte verso Villa Turchi', desc: 'Bridge connecting the Isola Neighborhood to Villa Turchi' },
        
        ]
    },
    'pescatore': {
        image: 'assets/maps/C11Pescatore.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [1050, 2158], name: 'Palazzo dello Sviluppo', desc: 'Part of a bigger project aimed at the development of underdeveloped areas, never completed' },
            { coords: [800, 2112], name: 'Palazzo della Borsa', desc: 'Stock exchange building' },
            { coords: [600, 2146], name: 'Ara Tergis', desc: 'Building for the 100th day of Governor Todd Tergi in power' },
            { coords: [1050, 2415], name: 'Zona Industriale del Pescatore', desc: 'First industrial zone built in the Pescatore Neighborhood and in the City' },
            { coords: [800, 2407], name: 'F.C.U.A. Fabbrica Cismarina Uova Autoctone', desc: 'First factory built in the Pescatore Neighborhood' },
            { coords: [1000, 2672], name: 'Baia del Porto di Cismarina', desc: 'Natural harbor of the city' },
            { coords: [1290, 1973], name: 'Chiesetta e Monastero del Pescatore', desc: 'Historic church and monastery, property of the Church of Frank X' },
            { coords: [1150, 1831], name: 'Villino San Francesco', desc: 'Governor residence built as a base during the development of the area' },

        ]
    },
    'goccia': {
        image: 'assets/maps/C12Goccia.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [1000, 1850], name: 'Viale della Goccia', desc: 'Central avenue in the Goccia Neighborhood' },
        ]
    },
    'ademia': {
        image: 'assets/maps/C13Ademia.png',
        bounds: [[0, 0], [2160, 3840]],
        pins: [
            { coords: [1300, 1693], name: 'Nuova Darsena', desc: 'Dock built in the Royal Era' },
            { coords: [1000, 1566], name: 'Villaggio di Ademia', desc: 'Historic village in the Ademia Neighborhood' },
            { coords: [1270, 1601], name: 'Villa Governatoriale Ademia-Campionesi', desc: 'Historic villa in the Ademia Neighborhood, recently expanded by Governor Omobono Campionesi' },

        ]
    },
    // add more maps here, nothing else changes
};