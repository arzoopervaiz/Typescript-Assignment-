//13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Your favorite mode of transportation
let transportation: string[] = ["Alto", "Honda", "civic", "Audi"];
let i;

// Loop through the array and print statements about each item
for (i = 0; i < transportation.length; i++) {
  console.log(" \u201C I would like to own a " + transportation[i] + " \u201D");
}
