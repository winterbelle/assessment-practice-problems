const {
  getAllCityNames,
  getOldestCity,
  findByName,
  countByCountry,
  filterByCountry,
  findBySportsTeam,
  getAverageFoundingYearForCapitals,
  getAllCitiesFoundedBeforeYear,
} = require("..");

const cities = require("../cities");
const alternative = require("./fixtures/alternative-cities");

describe("getAllCityNames()", () => {
  test("should return all of the city names in an array", () => {
    const actual = getAllCityNames(cities);
    const expected = [
      "Mexico City",
      "New York City",
      "Los Angeles",
      "Toronto",
      "Chicago",
      "Houston",
      "Havana",
      "Montreal",
      "Ecatepec de Morelos",
      "Philadelphia",
    ];
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the cities inputted", () => {
    const actual = getAllCityNames(alternative);
    const expected = ["Tegucicalpa", "Managua", "San Jose"];
    expect(actual).toEqual(expected);
  });
  test("should return an empty array if there are no cities", () => {
    const actual = getAllCityNames([]);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("getOldestCity()", () => {
  test("should return the name of the oldest city", () => {
    const actual = getOldestCity(cities);
    const expected = "Mexico City";
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the cities inputted", () => {
    const actual = getOldestCity(alternative);
    const expected = "Tegucicalpa";
    expect(actual).toEqual(expected);
  });
  test("should return null if there are no cities", () => {
    const actual = getOldestCity([]);
    const expected = null;
    expect(actual).toEqual(expected);
  });
});

describe("findByName()", () => {
  test("should return the object of the city with that name", () => {
    const actual = findByName(cities, "Philadelphia");
    const expected = {
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
  };
    expect(actual).toEqual(expected);
  });
  test("should return null if there is no matching city", () => {
    const actual = findByName(cities, "Kansas City");
    const expected = null;
    expect(actual).toEqual(expected);
  });
});

describe("countByCountry()", () => {
  test("should return an object that correctly counts the countries", () => {
    const actual = countByCountry(cities);
    const expected = {
      Mexico: 2,
      "United States": 5,
      Canada: 2,
      Cuba: 1
    };
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the cities inputted", () => {
    const actual = countByCountry(alternative);
    const expected = {
      Honduras: 1,
      Nicaragua: 1,
      "United States": 1
    };
    expect(actual).toEqual(expected);
  });
  test("should return an empty object if an empty array is given", () => {
    const actual = countByCountry([]);
    const expected = {};
    expect(actual).toEqual(expected);
  });
});

describe("filterByCountry()", () => {
  test("should return an array of all the cities in the given country", () => {
    const actual = filterByCountry(cities, "Cuba");
    const expected = [{
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
  }];
    expect(actual).toEqual(expected);
  });
  test("should be case insensitive", () => {
    const actual = filterByCountry(cities, "mExIcO");
    expect(actual.length).toEqual(2);
  });
  test("should return an empty array if an empty array is given", () => {
    const actual = filterByCountry([]);
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

describe("findBySportsTeam()", () => {
  test("should return the name of the city with the given sports team", () => {
    const actual = findBySportsTeam(cities, "Industriales");
    const expected = "Havana"
    expect(actual).toEqual(expected);
  });
  test("should return null if no city on the list has the matching team name", () => {
    const actual = findBySportsTeam(cities, "Golden State Warriors");
    const expected = null;
    expect(actual).toEqual(expected);
  });
});

describe("getAverageFoundingYearForCapitals()", () => {
  test("should return the average founding year of all capital cities", () => {
    const actual = getAverageFoundingYearForCapitals(cities);
    const expected = 1531
    expect(actual).toEqual(expected);
  });
  test("should dynamically change depending on the cities inputted", () => {
    const actual = getAverageFoundingYearForCapitals(alternative);
    const expected = 1699
    expect(actual).toEqual(expected);
  });
  test("should return 0 if no capital cities are input", () => {
    const actual = getAverageFoundingYearForCapitals([
      {
        name: "Ciudad Juárez",
        yearFounded: 1659,
        nationalCaptial: false,
        stateOrProvinceCapital: false
      }
    ]);
    const expected = 0;
    expect(actual).toEqual(expected);
  });
  test("should return 0 if an empty array is input", () => {
    const actual = getAverageFoundingYearForCapitals([]);
    const expected = 0;
    expect(actual).toEqual(expected);
  });
});

describe("getAllCitiesFoundedBeforeYear()", () => {
  test("should return a list of cities founded before the given year", () => {
    const actual = getAllCitiesFoundedBeforeYear(cities, 1642);
    const expected = [
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
      }
    ]
    expect(actual).toEqual(expected);
  });
});