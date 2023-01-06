import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
 let avgTemp = data.planets.map(planet => planet.avgTemp).reduce((a, b) => a + b, 0);
 let answer = avgTemp/(data.planets.map(planet => planet.avgTemp).length)
 console.log(answer);
 return answer;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
