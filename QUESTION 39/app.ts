// 39.City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.

// Define the city_country function
function city_country(city: string, country: string): void {
  // Print the formatted string directly
  console.log(`"${city}, ${country}"`);
}

// Call the function with at least three city-country pairs
city_country("lahore", "Pakistan");

city_country("New York", "USA");

city_country("Paris", "France");
