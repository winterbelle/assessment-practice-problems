// The ten biggest cities in North America by population
const cities = [
    {
        name: "Mexico City",
        country: "Mexico",
        population: 9218653,
        thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Mexico_City_Reforma_skyline.jpg/240px-Mexico_City_Reforma_skyline.jpg`,
        yearFounded: 1325,
        stateOrProvince: "Mexico City",
        nationalCapital: true,
        stateOrProvinceCapital: true,
        sportsTeams: "Cruz Azul, Club America, Club Universidad Nacional",
        id: 'aj38d9'
    },
    {
        name: "New York City",
        country: "United States",
        population: 8550405,
        thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/A_view_of_New_York_City_with_the_Empire_State_Building_and_One_World_Trade_Center_from_the_Rockefeller_Center.jpg/240px-A_view_of_New_York_City_with_the_Empire_State_Building_and_One_World_Trade_Center_from_the_Rockefeller_Center.jpg`,
        yearFounded: 1653,
        stateOrProvince: "New York",
        nationalCapital: false,
        stateOrProvinceCapital: false,
        sportsTeams: "Knicks, Mets, Yankees",
        id: 'eiu318'
    },
    {
        name: "Los Angeles",
        country: "United States",
        population: 3971883,
        thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/LA_Skyline_Mountains2.jpg/240px-LA_Skyline_Mountains2.jpg`,
        yearFounded: 1781,
        stateOrProvince: "California",
        nationalCapital: false,
        stateOrProvinceCapital: false,
        sportsTeams: "Lakers, Dodgers, Chargers",
        id: 'pwl30a'
    },
    {
        name: "Toronto",
        country: "Canada",
        population:	2826498,
        thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Toronto_Skyline_September_2014.jpg/240px-Toronto_Skyline_September_2014.jpg`,
        yearFounded: 1750,
        stateOrProvince: "Ontario",
        nationalCapital: false,
        stateOrProvinceCapital: true,
        sportsTeams: "Maple Leafs, Raptors, Blue Jays",
        id: 'x35kor'
    },
    {
        name: "Chicago",
        country: "United States",
        population:	2720546,
        thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/2010-02-19_3000x2000_chicago_skyline.jpg/240px-2010-02-19_3000x2000_chicago_skyline.jpg`,
        yearFounded: 1833,
        stateOrProvince: "Illinois",
        nationalCapital: false,
        stateOrProvinceCapital: false,
        sportsTeams: "Bulls, Bears, Cubs",
        id: 'p0sej3'
    },
    {
        name: "Houston",
        country: "United States",
        population:	2296224,
        thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Panoramic_Houston_skyline.jpg/240px-Panoramic_Houston_skyline.jpg`,
        yearFounded: 1837,
        stateOrProvince: "Texas",
        nationalCapital: false,
        stateOrProvinceCapital: false,
        sportsTeams: "Texans, Astros, Rockets",
        id: 't870ol'
    },
    {
        name: "Havana",
        country: "Cuba",
        population:	2117625,
        thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Bahia_Habana_Entrada.jpg/240px-Bahia_Habana_Entrada.jpg`,
        yearFounded: 1519,
        stateOrProvince: "La Habana Province",
        nationalCapital: true,
        stateOrProvinceCapital: true,
        sportsTeams: "Industriales, FC La Habana, Sugar Kings",
        id: 'w34erd'
    },
    {
        name: "Montreal",
        country: "Canada",
        population:	1753034,
        thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/VuedeMontreal.jpg/240px-VuedeMontreal.jpg`,
        yearFounded: 1642,
        stateOrProvince: "Quebec",
        nationalCapital: false,
        stateOrProvinceCapital: false,
        sportsTeams: "Canadiens, Alouettes, CF Montreal",
        id: 'hgn54j'
    },
    {
        name: "Ecatepec de Morelos",
        country: "Mexico",
        population:	1677678,
        thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Mexicable_1.jpg/240px-Mexicable_1.jpg`,
        yearFounded: 1428,
        stateOrProvince: "Estado de México",
        nationalCapital: false,
        stateOrProvinceCapital: false,
        sportsTeams: "Ecatepec FC",
        id: 'dj39de'
    },
    {
        name: "Philadelphia",
        country: "United States",
        population:	1567442,
        thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Philadelphia_from_South_Street_Bridge_July_2016_panorama_3b.jpg/240px-Philadelphia_from_South_Street_Bridge_July_2016_panorama_3b.jpg`,
        yearFounded: 1682,
        stateOrProvince: "Pennsylvania",
        nationalCapital: false,
        stateOrProvinceCapital: false,
        sportsTeams: "Eagles, Phillies, Flyers",
        id: 'p4j902'
    },
]

module.exports = cities;