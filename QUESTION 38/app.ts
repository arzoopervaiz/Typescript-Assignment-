// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.

// Define the describe_city function
function describe_city(city: string, country: string = "Pakistan"): void {
  // Print a sentence describing the city and its country
  console.log(`${city} is in ${country}`);
}

// Calling the function for three different cities.

// Call describe_city with city "Karachi" (default country is used)
describe_city("Karachi");

// Call describe_city with city "Lahore" (default country is used)
describe_city("Faisalabad");

// Call describe_city with city "New York" and country "USA"
describe_city("New York", "USA");
