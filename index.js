/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleCities` variable below to gain access to an array of the ten biggest cities in North America.

  Keep in mind that your functions must still have and use a parameter for accepting all cities.
*/
const exampleCities = require("./cities");
// Do not change the line above.

/**
 * getAllCityNames()
 * -----------------------------
 * Returns all the names from an array of cities. If the inputted `cities` array is empty, return `[]`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @returns {string[]} An array of strings, which are city names.
 *
 * EXAMPLE:
 *  getAlLCityNames(cities);
 *  //> [
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
 */
function getAllCityNames(cities) {
  let cityNames = [];
  // This method allows me to loop through the array and get the name of the different cities in each object with out having to use a for loop. 
  cityNames = cities.map(city => city.name);
  return cityNames;
}

/**
 * getOldestCity()
 * -----------------------------
 * Returns the name of the inputted city with the oldest yearFounded. If the inputted `cities` array is empty, return null.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @returns {string} The name of the oldest inputted city.
 *
 * EXAMPLE:
 *  getOldestCity(cities);
 *  //> "Mexico City"
 */
function getOldestCity(cities) {
  let oldestCity = ''
  
  if (!cities.length) {
    return null;
  } else {
  oldestCity = cities.filter(city => city.yearFounded > 0)
  .map(city => city.name);
  }
  return oldestCity[0];
}

/**
 * findByName()
 * -----------------------------
 * Returns a city object from an array of objects based on the given name. If the inputted `cities` array is empty or the name does not match any city, return `null`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @param {string} name - A name.
 * @returns {Object|null} The city object with the matching name.
 *
 * EXAMPLE:
 *  findByName(cities, "Houston");
 *  //> {
        name: "Houston",
        country: "United States",
        population:	2296224,
        thumbnail: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Panoramic_Houston_skyline.jpg/240px-Panoramic_Houston_skyline.jpg`,
        yearFounded: 1837,
        stateOrProvince: "Texas",
        nationalCapital: false,
        stateOrProvinceCapital: false,
        id: 't870ol'
    }
 */
function findByName(cities, name) {
  let cityObject = {};

  for (let city of cities) {
    cityObject = name === city.name ? city : null;
  }
  return cityObject;
}

/**
 * filterByCountry()
 * -----------------------------
 * Returns all city objects with a matching country. Case-insensitive. If the inputted `cities` array is empty or no cities match the inputted `country`, return `[]`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @param {string} country - The country a city is in. (e.g. "United States")
 * @returns {Object[]} An array of cities where at least one of the genres matches the `genre` inputted.
 *
 * EXAMPLE:
 *  filterByCountry(cities, "Mexico");
 *  //> [
      {
        // Mexico City
      },
      {
        // Ecatepec de Morelos
      },
    ]
    function filterByCountry() {}
*/
function filterByCountry(cities, country) {
  let filteredCities = [];
  filteredCities = cities.filter(city => country.toUpperCase() === city.country.toUpperCase());
  return filteredCities;
}

/**
 * findBySportsTeam()
 * -----------------------------
 * Returns the name of the city with a sports team matching the one given. If the inputted `cities` array is empty or no cities have a matching sports team, return null.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @param {string} teamName - The name of a sports team (with "The" omitted if applicable).
 * @returns {string} The name of a city with a matching sports team.
 *
 * EXAMPLE:
 *  findBySportsTeam(cities, "Cubs")
 *  //> "Chicago"
 */
function findBySportsTeam(cities, teamName) {
  let cityOfTeam = null;
  for (let city of cities) {
    if (city.sportsTeams.includes(teamName)) {
      cityOfTeam = city.name;
      
    }
  }
  return cityOfTeam;
}

/**
 * countByCountry()
 * -----------------------------
 * Returns an object where the keys are countries and the values are the number of cities in the array that are in that country. If the inputted `cities` array is empty, return `{}`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @returns {Object} An object where keys are countries (e.g. "Mexico") and the values are how many cities in the array are in that country (e.g. 2).
 *
 * EXAMPLE:
 *  countByCountry(cities);
 *  //> {
 *        "Mexico": 2,
 *        "United States": 5,
 *        "Canada": 2,
 *        "Cuba": 1
 *      }
 */
function countByCountry(cities) {
  let countCountry = {};
  for (let city of cities) {
    if (countCountry[city.country]) {
      // below I am iterating through the cities array and every time I get the same country I add one to the object. 
      countCountry[city.country] += 1;
    } else {
      countCountry[city.country] = 1;
    }
  }
  return countCountry;
}

/**
 * getAverageFoundingYearForCapitals()
 * -----------------------------
 * Averages all of the founding years ONLY of the cities which are EITHER national capitals or the capital of their provice/state, and returns it as a number, rounded to the nearest integer. If the inputted `cities` array is empty or contains no capital cities, return `0`.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @returns {number} The average founding year across all capital cities.
 *
 * EXAMPLE:
 *  getAverageFoundingYearForCapitals(cities);
 *  //> 1531
 */
function getAverageFoundingYearForCapitals(cities) {
  let foundingYears = [];
  for (const city of cities) {
    if (city.nationalCapital || city.stateOrProvinceCapital) {
      foundingYears.push(city.yearFounded);
    }
  }
  if (foundingYears.length === 0) {
    return 0;
  } else {
    //.reduce method helps me find the sum of the numbers in the array. I then divide by the length of the array to get the average. 
    let average = foundingYears.reduce((a, b) => a + b) / foundingYears.length;
    average = average.toFixed(0); // adjust the decimal place.
    average = parseInt(average); // turns the string in to a number/integer
    return average;
  }
}

/**
 * getAllCitiesFoundedBeforeYear()
 * -----------------------------
 * Returns the names of all cities with a `yearFounded` less than the given year.
 * @param {Object[]} cities - An array of cities. See the `cities.js` file for an example of this array.
 * @param {number} year - A year as a number. (e.g. 2000)
 * @returns {Object[]} An array of cities where the `yearFounded` is less than the inputted year.
 *
 * EXAMPLE:
 *  getAllCitiesFoundedBeforeYear(cities, 1492);
 *  //> [
      {
        // Mexico City
      },
      {
        // Ecatepec de Morelos
      },
    ];
 */
function getAllCitiesFoundedBeforeYear(cities, year) {
  let citiesFoundedBeforeYear = [];
citiesFoundedBeforeYear = cities.filter(city => year > city.yearFounded);
return citiesFoundedBeforeYear;
}

// Do not change anything below this line.
module.exports = {
  getAllCityNames,
  getOldestCity,
  findByName,
  filterByCountry,
  countByCountry,
  findBySportsTeam,
  getAverageFoundingYearForCapitals,
  getAllCitiesFoundedBeforeYear,
};
