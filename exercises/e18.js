import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
    // Create a map to store the count of asteroids discovered each year
    const yearCounts = new Map();
    for (const asteroid of data.asteroids) {
      const { discoveryYear } = asteroid;
      if (yearCounts.has(discoveryYear)) {
        yearCounts.set(discoveryYear, yearCounts.get(discoveryYear) + 1);
      } else {
        yearCounts.set(discoveryYear, 1);
      }
    }
  
    // Find the year with the highest count of asteroids discovered
    let mostAsteroidsYear = 0;
    let mostAsteroidsCount = 0;
    for (const [year, count] of yearCounts.entries()) {
      if (count > mostAsteroidsCount) {
        mostAsteroidsYear = year;
        mostAsteroidsCount = count;
      }
    }
    return mostAsteroidsYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
